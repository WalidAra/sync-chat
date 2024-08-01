const {
  getUserChats,
  getUserLastChat,
  createUserLastChat,
} = require("../../chat/chat.controller");
const {
  profile,
  deleteUser,
  update,
  getAllUsers,
  getUserFriendRequests,
  addFriend,
  getUserFriends,
} = require("../user.controller");
const router = require("express").Router();

router.get("/profile", profile);
router.delete("/delete", deleteUser);
router.put("/update", update);
router.get("/chats", getUserChats);
router.get("/friends", getUserFriends);

router.get("/lastChat", getUserLastChat);
router.post("/lastChat", createUserLastChat);

router.get("/users", getAllUsers);

router.get("/friend-requests", getUserFriendRequests);
router.post("/add-friend", addFriend);

module.exports = router;
