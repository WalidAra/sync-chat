const { createChat, removeChat } = require("../chat.controller");
const router = require("express").Router();

router.post("/create", createChat);

module.exports = router;
