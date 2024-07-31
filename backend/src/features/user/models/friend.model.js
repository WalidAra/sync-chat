const prisma = require("../../../../config/prisma");

const createFriendRequest = async (senderId, receiverId) => {
  if (senderId && receiverId) {
    const friendRequest = await prisma.friendRequest.create({
      data: {
        senderId,
        receiverId,
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            image: true,
            createdAt: true,
            email: true,
          },
        },
      },
    });
    return friendRequest;
  } else {
    return null;
  }
};

const removeFriendRequest = async (senderId, receiverId) => {

  const existingRequest = await prisma.friendRequest.findUnique({
    where: {
      senderId_receiverId: {
        senderId,
        receiverId,
      },
    },
  });

  if (existingRequest) {
    await prisma.friendRequest.delete({
      where: {
        senderId_receiverId: {
          senderId,
          receiverId,
        },
      },
    });
    return true;
  } else {
    return false;
  }
};

const getFriendRequests = async (id) => {
  const data = await prisma.friendRequest.findMany({
    where: {
      receiverId: id,
    },
    select: {
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
  return data;
};

const createFriend = async (senderId, receiverId) => {
  try {
    const friends = await prisma.friend.createMany({
      data: [
        {
          clientId: senderId,
          userId: receiverId,
        },
        {
          clientId: receiverId,
          userId: senderId,
        },
      ],
    });

    return friends;
  } catch (error) {
    console.error(error.message);
  }
};

const getUserFriends = async (id) => {
  try {
    const friends = await prisma.friend.findMany({
      where: {
        clientId: id,
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
  createFriend,
  createFriendRequest,
  getFriendRequests,
  removeFriendRequest,
};
