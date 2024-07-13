const { Server } = require("socket.io");

// ! CHAT ID IS THE ROOM NAME

const socketInitializer = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
  });

  io.on("connection", (socket) => {
    socket.on("user-online", (id) => {
      // {id:string , socketId: string} store in redis and update friends room
    });

    socket.on("disconnect", () => {
      // {id:string , socketId: string} remove in redis and update friends room
      console.log("user disconnected");
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
