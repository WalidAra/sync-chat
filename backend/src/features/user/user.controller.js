const prisma = require("../../../config/prisma");

exports.GetUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
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

    console.log("User details:", user);

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

exports.UpdateUser = async (req, res) => {
  const userId = req.params.id;
  const { email, name, bio, image } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        email,
        name,
        bio,
        image,
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

    res.status(200).json({
      status: true,
      message: "User updated successfully",
      data: updatedUser,
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

exports.DeleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    await prisma.user.delete({
      where: { id: userId },
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
