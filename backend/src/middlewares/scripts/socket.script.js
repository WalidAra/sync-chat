const { redisHelper } = require("../../../helpers/redis.helper");
const { getUserFriends } = require("../../features/user/models/friend.model");

const getUserOnlineFriends = async (socket, userId , io) => {
  const friends = await getUserFriends(userId);
  if (friends) {
    const activeClientsKeys = await redisHelper.keys("AC_*");
    const onlineFriends = friends.filter((friend) => {
      return activeClientsKeys.includes(`AC_${friend.User.id}`);
    });

    const value = await redisHelper.get(`AC_${userId}`);
    if(value){
      io.to(value).emit("online-friends", onlineFriends);
    }
  }
};

module.exports = { getUserOnlineFriends };
