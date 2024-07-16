const { getUSerChats, getUserLastChat, createUserLastChat } = require("../../chat/chat.controller");
const { profile, deleteUser, update } = require("../user.controller");
const router = require("express").Router();

router.get("/profile", profile);
router.delete("/delete", deleteUser);
router.put("/update", update);
router.get("/chats", getUSerChats);
router.get("/lastChat", getUserLastChat);
router.post("/lastChat", createUserLastChat);

module.exports = router;
