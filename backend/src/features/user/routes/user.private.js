const { getUSerChats } = require("../../chat/chat.controller");
const { profile, deleteUser, update } = require("../user.controller");
const router = require("express").Router();

router.get("/profile", profile);
router.delete("/delete", deleteUser);
router.put("/update", update);
router.get("/chats", getUSerChats);

module.exports = router;
