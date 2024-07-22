const prisma = require("../../../../config/prisma");

const createFriend = async (senderId, receiverId) => {
  try {
    const sender = await prisma.friend.create({
      data: {
        clientId: senderId,
        userId: receiverId,
      },
      select: {
        id: true,
        clientId: true,
        userId: true,
      },
    });

    const receiver = await prisma.friend.create({
      data: {
        clientId: receiverId,
        userId: senderId,
      },
      select: {
        id: true,
        clientId: true,
        userId: true,
      },
    });

    return { sender, receiver };
  } catch (error) {
    console.error(error.message);
  }
};

const getUserFriends = async (id) => {
  try {
    const friends = await prisma.friend.findMany({
      where: {
        userId: id,
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
    });

    return friends;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getUserFriends,
  createFriend
};
