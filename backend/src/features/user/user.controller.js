const prisma = require("../../../config/prisma");
const bcrypt = require("bcrypt");
const { createFriend } = require("./models/friend.model");

exports.getAllUsers = async (req, res) => {
  const { id } = req.user; // Extract the current user's ID from the request

  try {
    // Fetch users who are not friends with the current user and have no pending friend requests
    const nonFriendUsers = await prisma.user.findMany({
      where: {
        AND: [
          {
            // Ensure the user is not in any Friend list where the current user is involved
            ClientFriend: {
              none: {
                userId: id, // Current user is not listed as a friend in ClientFriend
              },
            },
          },
          {
            UserFriend: {
              none: {
                clientId: id, // Current user is not listed as a friend in UserFriend
              },
            },
          },
          {
            // Ensure no sent friend requests to the current user
            sentFriendRequests: {
              none: {
                receiverId: id, // Current user is not a receiver of any friend request
              },
            },
          },
          {
            // Ensure no received friend requests from the current user
            receivedFriendRequests: {
              none: {
                senderId: id, // Current user is not a sender of any friend request
              },
            },
          },
          {
            id: {
              not: id, // Exclude the current user from the list
            },
          },
        ],
      },
      select: {
        id: true,
        bio: true,
        email: true,
        image: true,
        createdAt: true,
        name: true,
      },
    });

    // Send successful response with non-friend users data
    res.status(200).json({
      status: true,
      message: "Non-friend users retrieved successfully",
      data: nonFriendUsers,
    });
  } catch (error) {
    console.error(error.message);
    // Send error response for internal server error
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
      data: null,
    });
  }
};



exports.profile = async (req, res) => {
  const { id } = req.user;

  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
      select: {
        id: true,
        bio: true,
        email: true,
        image: true,
        createdAt: true,
        name: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
        data: null,
      });
    }

    res.status(200).json({
      status: true,
      message: "User details retrieved successfully",
      data: user,
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

exports.update = async (req, res) => {
  const { id } = req.user;
  const { email, name, image, bio, password } = req.body;

  try {
    const userData = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    let hashedPassword;

    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    const updatedUser = {
      email: email || userData.email,
      name: name || userData.name,
      bio: bio || userData.bio,
      image: image || userData.image,
      password: password ? hashedPassword : userData.password,
    };

    const finalUser = await prisma.user.update({
      where: { id: id },
      data: updatedUser,
      select: {
        id: true,
        bio: true,
        email: true,
        image: true,
        createdAt: true,
        name: true,
      },
    });

    res.status(200).json({
      status: true,
      message: "User updated successfully",
      data: finalUser,
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

exports.deleteUser = async (req, res) => {
  const { id } = req.user;

  try {
    await prisma.user.delete({
      where: { id: id },
    });

    res.status(200).json({
      status: true,
      message: "User deleted successfully",
      data: null,
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

exports.getUserFriendRequests = async (req, res) => {
  const { id } = req.user;

  try {
    const result = await prisma.friendRequest.findMany({
      where: {
        receiverId: id,
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

    res.status(200).json({
      status: true,
      message: "Friend requests retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
      data: null,
    });
  }
};

exports.addFriend = async (req, res) => {
  const { senderId, receiverId } = req.body;

  try {
    const { sender, receiver } = await createFriend(senderId, receiverId);
    res.status(200).json({
      status: true,
      message: "Friend added successfully",
      data: {
        sender,
        receiver,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
      data: null,
    });
  }
};
