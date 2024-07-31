const prisma = require("../../../../config/prisma");

const getUserProfile = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return user;
};

module.exports = {
  getUserProfile,
};
