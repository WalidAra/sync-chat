const prisma = require("../../../config/prisma");
const bcrypt = require("bcrypt");
const JwtHelper = require("../../helpers/jwt.helper");

exports.Register = async (req, res) => {
  const { email, password, recall, name } = req.body;

  try {
    const provider = await prisma.provider.findFirst({
      where: { name: "Direct" },
    });

    const isUser = await prisma.user.findUnique({
      where: { email },
    });

    if (isUser) {
      return res.status(400).json({
        status: false,
        message: "Email already exists",
        data: {
          itExist: true,
        },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        providerId: provider.id,
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

    const token = JwtHelper.generateToken({ id: user.id }, recall);

    res.status(200).json({
      status: true,
      message: "User created successfully",
      data: {
        ...user,
        token,
      },
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
