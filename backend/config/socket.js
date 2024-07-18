const { Server } = require("socket.io");
const { redisHelper } = require("./redisHelper");

// ! CHAT ID IS THE ROOM NAME
// ** AC_ is for the activated users

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

        console.log(activeClients);
      }
    });

    socket.on("disconnect", () => {
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
