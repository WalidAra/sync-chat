const {
  getUSerChats,
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
} = require("../user.controller");
const router = require("express").Router();

router.get("/profile", profile);
router.delete("/delete", deleteUser);
router.put("/update", update);
router.get("/chats", getUSerChats);

router.get("/lastChat", getUserLastChat);
router.post("/lastChat", createUserLastChat);

router.get("/users", getAllUsers);

router.get("/friend-requests", getUserFriendRequests);
router.post("/add-friend", addFriend);

module.exports = router;
