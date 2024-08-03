const prisma = require("../../../../config/prisma");
const { redisHelper } = require("../../../../helpers/redis.helper");
const { createMemberOfChat } = require("./member.model");

const getUserLastChatModel = async (id) => {
  try {
    const userLastChat = await redisHelper.get(`LM_${id}`);
    return userLastChat;
  } catch (error) {
    console.error(error.message);
  }
};

const storeUserLastChat = async (id, chatId) => {
  try {
    await redisHelper.set(`LM_${id}`, chatId);
  } catch (error) {
    console.error(error.message);
  }
};

const createChatModel = async (name, isGroup, members) => {
  try {
    const newChat = await prisma.chat.create({
      data: {
        name: name || null,
        isGroup,
        adminId: isGroup ? id : null,
      },
    });

    await createMemberOfChat(members, newChat.id);

    return newChat;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

const getChatRoomInfo = async (id) => {
  try {
    const chat = await prisma.chat.findUnique({
      where: {
        id: id,
      },

      include: {
        Member: {
          include: {
            User: {
              select: {
                id: true,
                bio: true,
                email: true,
                image: true,
                createdAt: true,
                name: true,
              },
            },
          },
        },

        Message: {
          include: {
            User: {
              select: {
                id: true,
                bio: true,
                email: true,
                image: true,
                createdAt: true,
                name: true,
              },
            },
            MessageAttachments: {
              include: {
                Attachment: true,
              },
            },
          },
        },
      },
    });

    return chat;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

module.exports = {
  getUserLastChatModel,
  storeUserLastChat,
  createChatModel,
  getChatRoomInfo,
};
