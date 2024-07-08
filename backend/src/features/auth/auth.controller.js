const prisma = require("../../../config/prisma");
const bcrypt = require("bcrypt");
const JwtHelper = require("../../../helpers/jwt.helper");

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

exports.Login = async (req, res) => {
  const { email, password, recall } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(402).json({
        status: false,
        message: "User not found",
        data: null,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        status: false,
        message: "Invalid email or password",
        data: null,
      });
    }

    const token = JwtHelper.generateToken({ id: user.id }, recall);

    res.status(200).json({
      status: true,
      message: "Login successful",
      data: {
        id: user.id,
        bio: user.bio,
        email: user.email,
        image: user.image,
        createdAt: user.createdAt,
        name: user.name,
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
