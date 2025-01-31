const prisma = require("../../../config/prisma");
const {
  getUserLastChatModel,
  storeUserLastChat,
  createChatModel,
  getChatRoomInfo,
} = require("./models/chat.model");

const { createMemberOfChat } = require("./models/member.model");

exports.getChatInfo = async (req, res) => {
  const { id } = req.params;

  try {
    const chat = await getChatRoomInfo(id);

    res.status(200).json({
      status: true,
      message: "Chat fetched successfully",
      data: chat,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      status: false,
      message: "Internal server error",
      data: null,
    });
  }
};

exports.createChat = async (req, res) => {
  const { id } = req.user; // adminId

  const { name, isGroup, members } = req.body; // userId will be valid only for private chats
  try {
    members.push(id);
    const chat = await prisma.chat.findFirst({
      where: {
        name,
        isGroup,
        AND: members.map((memberId) => ({
          Member: {
            some: {
              userId: memberId,
            },
          },
        })),
      },
    });

    if (chat) {
      // call redis
      await storeUserLastChat(id, chat.id);
      return res.status(200).send({
        status: true,
        message: "Chat created successfully",
        data: chat,
      });
    }

    const newChat = await createChatModel(name, isGroup, members);

    // call redis

    await storeUserLastChat(id, newChat.id);

    res.status(201).send({
      status: true,
      message: "Chat created successfully",
      data: newChat,
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

exports.getUserChats = async (req, res) => {
  const { id } = req.user;

  try {
    const chats = await prisma.chat.findMany({
      where: {
        Member: {
          some: {
            userId: id,
          },
        },
      },

      include: {
        Message: {
          orderBy: {
            createdAt: "desc",
          },
          take: 1,
        },

        Member: {
          where: {
            userId: {
              not: id,
            },
          },
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
      },
    });

    res.status(200).send({
      status: true,
      message: "Chats fetched successfully",
      data: chats,
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

exports.removeChat = async (req, res) => {
  const { id } = req.params;
  try {
    const chat = await prisma.chat.delete({
      where: {
        id,
      },
    });

    res.status(200).send({
      status: true,
      message: "Chat deleted successfully",
      data: chat,
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

exports.getUserLastChat = async (req, res) => {
  const { id } = req.user;

  try {
    const lastChat = await getUserLastChatModel(id);

    if (lastChat === null) {
      return res.status(200).json({
        status: false,
        message: "No chat found",
        data: {
          noStoredChat: true,
        },
      });
    }

    return res.status(200).json({
      status: true,
      message: "Chat fetched successfully",
      data: lastChat,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      status: false,
      message: "Internal server error",
      data: null,
    });
  }
};

exports.createUserLastChat = async (req, res) => {
  const { id } = req.user;
  const { chatId } = req.body;

  try {
    await storeUserLastChat(id, chatId);

    res.status(200).json({
      status: true,
      message: "Chat stored successfully",
      data: null,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      status: false,
      message: "Internal server error",
      data: null,
    });
  }
};
