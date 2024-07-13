const { Server } = require("socket.io");
const RedisHelper = require("../helpers/redis.helper");
const redisHelper = new RedisHelper();

// ! CHAT ID IS THE ROOM NAME

const socketInitializer = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
  });

  io.on("connection", (socket) => {
    console.log("new user connected");

    socket.on("user-activated", (obj) => {
      if (obj.id) {
        redisHelper.set(
          `AC_${socket.id}`,
          JSON.stringify({ connectedAt: obj.connectedAt, socketId: obj.id })
        );
      }
    });

    socket.on("user-online", async (id) => {
      if (id) {
        const activeClients = await redisHelper.keys("AC_*");
        // fetch friends of user using user id
        // filtering the users based on activeClients
        console.log(activeClients);
      }
    });

    socket.on("disconnect", () => {
      console.log('====================================');
      console.log('user disconnected');
      console.log('====================================');
      redisHelper.delete(`AC_${socket.id}`);
    });

    socket.on("chat-message", (obj) => {
      // {content:string, senderId:string, chatId: string, type:SIMPLE|COMPLEX, attachments:Array }
      // ? call create message function from message model then emit to room
    });

    socket.on("create-or-join-room", (obj) => {
      // {id:string , socketId: string , chatId:string}
    });
  });
};

module.exports = { socketInitializer };
