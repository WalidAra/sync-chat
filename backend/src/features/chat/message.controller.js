const prisma = require("../../../config/prisma");
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

const getLastMessages = async (req, res) => {
  const { id } = req.user;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        Chat: {
          include: {
            Message: {
              where: { isDeleted: false },
              orderBy: { createdAt: "desc" },
              take: 1,
            },
          },
        },
      },
    });

    const lastMessages = user.Chat.map((chat) => ({
      chatId: chat.id,
      chatName: chat.name,
      lastMessage: chat.Message[0],
    }));

    res.status(200).json({
      status: true,
      message: "Last messages retrieved successfully",
      data: lastMessages,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
      data: null,
    });
  }
};

module.exports = { createMessageController, getLastMessages };
