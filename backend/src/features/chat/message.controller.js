const { createMessage } = require("./models/message.model");

const createMessageController = async (req, res) => {
  const { content, senderId, chatId, type, attachments } = req.body;

  try {
    const result = await createMessage({
      content,
      senderId,
      chatId,
      type,
      attachments,
    });

    res.status(201).send({
      status: true,
      message: "Message created successfully",
      data: result.data,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      status: false,
      message: "Internal server error",
      data: null,
    });
  }
};

module.exports = { createMessageController };
