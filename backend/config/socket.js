const { Server } = require("socket.io");

const {
  markUserActivation,
  markUserDisconnect,
  areMyHommiesOnline,
  sendFriendRequest,
  acceptFriendRequest,
  sendMessageToChat,
  requestUserStatus,
  createGroupChat,
} = require("../src/middlewares/socketValidator");

const socketInitializer = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
  });

  io.on("connection", (socket) => {
    markUserActivation(socket);
    areMyHommiesOnline(socket, io);
    sendFriendRequest(socket);
    markUserDisconnect(socket);
    acceptFriendRequest(socket, io);
    sendMessageToChat(socket, io);
    requestUserStatus(socket, io);
    createGroupChat(socket, io);
  });
};

module.exports = { socketInitializer };
