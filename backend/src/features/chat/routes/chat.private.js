const { createChat, getChatInfo } = require("../chat.controller");

// const {
//   createMessageController,
//   getLastMessages,
// } = require("../message.controller");

const router = require("express").Router();

router.post("/create-or-join", createChat);

// router.post("/messages/create", createMessageController);
// router.get("/messages/last", getLastMessages);
router.get("/:id", getChatInfo);

module.exports = router;
