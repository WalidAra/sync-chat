const prisma = require("../../config/prisma");
const bcrypt = require("bcrypt");
const destructProfile = require("../../scripts/destructProfile");
const { generateToken } = require("../../helpers/jwt.helper");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!isUser) {
      return res.status(402).json({
        status: false,
        message: "User not found",
        data: null,
      });
    }

    const match = await bcrypt.compare(password, isUser.password);
    if (!match) {
      return res.status(404).json({
        status: false,
        message: "Wrong password",
        data: null,
      });
    }

    const updatedUser = await prisma.user.update({
      where: { id: isUser.id },
      data: { lastLoginAt: new Date(Date.now()) },
    });

    const user = destructProfile(updatedUser);
    const token = await generateToken(updatedUser.id);

    return res.status(200).json({
      status: true,
      message: "Authenticated successfully",
      data: user,
      token,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal server error",
      status: false,
      data: null,
    });
  }
};

module.exports = login;
