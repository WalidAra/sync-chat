const prisma = require("../../../../config/prisma");
const { createAttachments } = require("./attachment.model");

const createMessage = async (obj) => {
  const { content, senderId, chatId, type, attachments } = obj;

  try {
    const msg = await prisma.message.create({
      data: {
        content,
        senderId,
        type,
        chatId,
      },
    });

    if (type === "SIMPLE") {
      return {
        status: true,
        message: "Message created successfully",
        data: msg,
      };
    }

    const result = createAttachments(msg.id, attachments);

    return {
      status: true,
      message: "Message created successfully",
      data: { result, msg },
    };
    
  } catch (error) {
    console.error(error.message);
    return {
      status: false,
      message: "Internal Server Error",
      data: null,
    };
  }
};

module.exports = {
  createMessage,
};
