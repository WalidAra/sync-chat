const { redisHelper } = require("../../helpers/redis.helper");
const jwt = require("jsonwebtoken");

// ! CHAT ID IS THE ROOM NAME
// ** AC_ is for the activated users

const {
  getUserFriends,
  createFriendRequest,
  getFriendRequests,
  removeFriendRequest,
  createFriend,
} = require("../features/user/models/friend.model");

const { getUserProfile } = require("../features/user/models/user.model");
const { getUserOnlineFriends } = require("./scripts/socket.script");

const markUserActivation = async (socket) => {
  return socket.on("user-activated", async (obj) => {
    if (obj.id) {
      const userId = obj.id;
      redisHelper.set(`AC_${userId}`, socket.id);
    }
  });
};

const markUserDisconnect = async (socket) => {
  return socket.on("disconnect", async () => {
    const activeClientsKeys = await redisHelper.keys("AC_*");

    const activeClients = await Promise.all(
      activeClientsKeys.map(async (key) => {
        const obj = {};
        obj.value = await redisHelper.get(key);
        obj.key = key;
        return obj;
      })
    );

    const target = activeClients.find((obj) => {
      return obj.value === socket.id;
    });

    if (target && target.key) {
      await redisHelper.delete(target.key);
    }
  });
};

const acceptFriendRequest = async (socket , io) => {
  return socket.on("accept-friend-request", async ({ token, senderId }) => {
    try {
      const obj = jwt.verify(token, process.env.JWT_SECRET);
      const receiverId = obj.id;

      if (senderId && receiverId) {
        const obj = await createFriend(senderId, receiverId);
        const res = await removeFriendRequest(senderId, receiverId);

        if (obj && obj.count === 2 && res) {
          const activeClientsKeys = await redisHelper.keys("AC_*");
          const activeClients = await Promise.all(
            activeClientsKeys.map(async (key) => {
              const obj = {};
              obj.value = await redisHelper.get(key);
              obj.key = key.split("_")[1];
              return obj;
            })
          );

          const targets = activeClients.filter((obj) => {
            return obj.key === senderId || obj.key === receiverId;
          });

          console.log(targets);
          await getUserOnlineFriends(socket, senderId , io);
          await getUserOnlineFriends(socket, receiverId , io);
        }
      } else {
        console.log("====================================");
        console.log(senderId, receiverId);
        console.log("====================================");
      }
    } catch (error) {
      console.error(error.message);
    }
  });
};

const areMyHommiesOnline = async (socket , io) => {
  return socket.on("user-online", async (token) => {
    if (token) {
      try {
        const obj = jwt.verify(token, process.env.JWT_SECRET);
        const userId = obj.id;
        await getUserOnlineFriends(socket, userId , io);
      } catch (error) {
        console.log(error.message);
      }
    }
  });
};

const sendFriendRequest = async (socket) => {
  return socket.on("send-friend-request", async ({ token, receiverId }) => {
    try {
      const obj = jwt.verify(token, process.env.JWT_SECRET);

      const senderId = obj.id;

      if (senderId && receiverId) {
        const activeClientsKeys = await redisHelper.keys("AC_*");

        const receivers = activeClientsKeys.filter(
          (userId) => userId.split("_")[1] === receiverId
        );

        const receiverSocket = await redisHelper.get(receivers[0]);

        const data = await createFriendRequest(senderId, receiverId);

        if (receiverSocket && data) {
          socket.to(receiverSocket).emit("friend-requests", data);
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  });
};

module.exports = {
  markUserActivation,
  markUserDisconnect,
  areMyHommiesOnline,
  sendFriendRequest,
  acceptFriendRequest,
};
