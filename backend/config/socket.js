const { Server } = require("socket.io");
const { redisHelper } = require("./redisHelper");
const {
  getUserFriends,
  createFriend,
} = require("../src/features/user/models/friend.model");
const { createMessage } = require("../src/features/chat/models/message.model");
const prisma = require("./prisma");

// ! CHAT ID IS THE ROOM NAME
// ** AC_ is for the activated users
// ** LM_ is for the last message of a user

const userSocketMap = new Map();

const socketInitializer = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
  });

  io.on("connection", (socket) => {
    
    socket.on("user-activated", (obj) => {
      userSocketMap.set(obj.id, socket.id);
      if (obj.id) {
        redisHelper.set(
          `AC_${socket.id}`,
          JSON.stringify({ connectedAt: obj.connectedAt, userId: obj.id })
        );
      }
    });

    socket.on("user-online", async (id) => {
      if (id) {
        const activeClientsKeys = await redisHelper.keys("AC_*");
        const activeClients = await Promise.all(
          activeClientsKeys.map(async (key) => {
            const value = await redisHelper.get(key);
            const obj = JSON.parse(value);
            obj.key = key;
            return obj;
          })
        );

        const clientFriends = await getUserFriends(id);

        const onlineFriends = activeClients.filter((client) => {
          return clientFriends.some(
            (friend) => friend.User.id === client.userId
          );
        });

        io.to(socket.id).emit("online-friends", onlineFriends);
      }
    });

    socket.on("disconnect", () => {
      redisHelper.delete(`AC_${socket.id}`);
      for (let [userId, socketId] of userSocketMap.entries()) {
        if (socketId === socket.id) {
          userSocketMap.delete(userId);
          break;
        }
      }
    });

    socket.on("chat-message", async (obj) => {
      // {content:string, senderId:string, chatId: string, type:SIMPLE|COMPLEX, attachments:Array }
      // ? call create message function from message model then emit to room
      try {
        const msg = await createMessage(obj);

        const notification = {
          content: msg.data.content,
          senderId: msg.data.senderId,
          chatId: msg.data.chatId,
        };

        const members = await prisma.member.findMany({
          where: { chatId: obj.chatId },
          select: { userId: true },
        });

        members.forEach((member) => {
          if (member.userId !== obj.senderId) {
            const socketId = userSocketMap.get(member.userId);
            if (socketId) {
              io.to(socketId).emit("new-notification", notification);
            }
          }
        });

        io.to(obj.chatId).emit("chat-message", {
          status: true,
          message: "Message sent successfully",
          data: msg,
        });
      } catch (error) {
        io.to(obj.chatId).emit("chat-message", {
          status: false,
          message: "Internal Server Error",
          data: null,
        });
      }
    });

    socket.on("create-or-join-room", async (obj) => {
      // {id:string , socketId: string , chatId:string}
      const roomName = obj.chatId;
      const rooms = await io.sockets.adapter.rooms;
      const roomExists = rooms.has(roomName);

      if (!roomExists) {
        socket.join(roomName);
        io.to(roomName).emit("room-created", roomName);
      } else {
        socket.join(roomName);
        io.to(roomName).emit("room-joined", roomName);
      }
    });

    socket.on("leave-room", (roomName) => {
      socket.leave(roomName);
    });

    socket.on("add-friend", async (obj) => {
      const { senderId, receiverId } = obj;
      try {
        const { sender, receiver } = await createFriend(senderId, receiverId);

        const notification = {
          content: `${senderId} added you as a friend`,
          senderId: senderId,
        };

        const socketId = userSocketMap.get(receiverId);
        if (socketId) {
          io.to(socketId).emit("new-notification", {
            status: true,
            message: "Message sent successfully",
            data: notification,
          });
        }
      } catch (error) {
        console.error("Error adding friend:", error);
      }
    });
  });
};

module.exports = { socketInitializer };
