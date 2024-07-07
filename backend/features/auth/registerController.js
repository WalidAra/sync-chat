const prisma = require("../../config/prisma");
const bcrypt = require("bcrypt");
const destructProfile = require("../../scripts/destructProfile");
const { generateToken } = require("../../helpers/jwt.helper");

const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const isUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (isUser) {
      return res.status(403).json({
        status: false,
        message: "User Already exists",
        data: null,
      });
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        password: hashedPwd,
        email: email,
        name: username,
        image: "",
        bio: "",
      },
    });

    const user = destructProfile(newUser);
    const token = await generateToken(newUser.id);

    return res.status(200).json({
      status: true,
      message: "Registered successfully",
      data: user,
      token,
    });
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ message: "Internal server error", status: false, data: null });
  }
};

module.exports = register;
