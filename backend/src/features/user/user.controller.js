const prisma = require("../../../config/prisma");
const bcrypt = require("bcrypt");

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
