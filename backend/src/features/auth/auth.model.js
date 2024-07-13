const prisma = require("../../../config/prisma");
const { generateRandomChars } = require("../../scripts");
const JwtHelper = require("../../../helpers/jwt.helper");

async function handleGoogleOAuth(profile) {
  const { displayName, emails, photos } = profile;
  const email = emails[0].value;
  const image = photos[0].value;

  try {
    let existUser = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        bio: true,
        email: true,
        image: true,
        createdAt: true,
        name: true,
      },
    });

    if (!existUser) {
      const pwHash = generateRandomChars(16);
      const provider = await prisma.provider.findFirst({
        where: { name: "Google" },
      });

      const newUser = await prisma.user.create({
        data: {
          name: displayName.trim(),
          email,
          image,
          password: pwHash,
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

      const token = JwtHelper.generateToken({ id: newUser.id }, true);
      return {
        ...newUser,
        token,
      };
    }

    const token = JwtHelper.generateToken({ id: existUser.id }, true);
    return {
      ...existUser,
      token,
    };
  } catch (error) {
    throw new Error("Error handling Google OAuth : ", error.message);
  }
}

async function handleGitHubOAuth(profile) {
  const { username, emails, photos } = profile;
  const email = emails[0].value;
  const image = photos && photos.length > 0 ? photos[0].value : null; 

  try {
    let existUser = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        bio: true,
        email: true,
        image: true,
        createdAt: true,
        name: true,
      },
    });

    if (!existUser) {
      const pwHash = generateRandomChars(16);
      const provider = await prisma.provider.findFirst({
        where: { name: "Github" },
      });

      const newUser = await prisma.user.create({
        data: {
          name: username.trim(),
          email,
          password: pwHash,
          providerId: provider.id,
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

      const token = JwtHelper.generateToken({ id: newUser.id }, true);

      return {
        ...newUser,
        token,
      };
    }

    const token = JwtHelper.generateToken({ id: existUser.id }, true);

    return {
      ...existUser,
      token,
    };
  } catch (error) {
    throw new Error("Error handling GitHub OAuth : " + error.message);
  }
}

module.exports = { handleGitHubOAuth, handleGoogleOAuth };
