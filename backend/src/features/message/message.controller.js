const prisma = require("../../../config/prisma");

exports.createMessage = async (req, res) => {
  const { id } = req.user; // senderId
  const { content, chatId, type } = req.body;

  try {
    const message = await prisma.message.create({
      data: {
        content,
        chatId,
        type,
        senderId: id,
      },
    });

    res.status(201).json({
      message: "Message created successfully",
      status: true,
      data: message,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Internal server error",
      status: false,
      data: null,
    });
  }
};
