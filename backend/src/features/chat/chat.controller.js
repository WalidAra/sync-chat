const prisma = require("../../../config/prisma");
const { createMemberOfChat } = require("./models/member.model");

exports.createChat = async (req, res) => {
  
  const { id } = req.user; // adminId

  const { name, isGroup, members } = req.body;
  try {
    const chat = await prisma.chat.create({
      data: {
        name: name || null,
        isGroup,
        adminId: isGroup ? id : null,
      },
    });

    members.push(id);
    await createMemberOfChat(members, chat.id);

    res.status(201).send({
      status: true,
      message: "Chat created successfully",
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

exports.getUSerChats = async (req, res) => {
  
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
        Member: {
          where: {
            userId: {
              not: id,
            },
          },
          include: {
            User: true,
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
