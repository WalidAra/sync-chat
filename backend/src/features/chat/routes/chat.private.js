const { createChat, removeChat } = require("../chat.controller");
const {
  createMessageController,
  getLastMessages,
} = require("../message.controller");
const router = require("express").Router();

router.post("/create", createChat);
router.post("/messages/create", createMessageController);
router.get("/messages/last", getLastMessages);

module.exports = router;
