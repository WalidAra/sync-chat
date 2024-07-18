const prisma = require("../../../../config/prisma");

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
};