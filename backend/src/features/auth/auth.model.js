const prisma = require("../../../config/prisma");
const { generateRandomChars } = require("../../scripts");
const JwtHelper = require("../../../helpers/jwt.helper");

async function handleGoogleOAuth(profile) {
  const { displayName, emails, photos } = profile;
  const email = emails[0].value;
  const image = photos[0].value;

  try {
    let user = await prisma.user.findUnique({
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

    const pwHash = generateRandomChars(16);
    const provider = await prisma.provider.findFirst({
      where: { name: "Google" },
    });

    if (!user) {
      user = await prisma.user.create({
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

      const token = JwtHelper.generateToken({ id: user.id }, true);

      return {
        ...user,
        token,
      };
    }

    const token = JwtHelper.generateToken({ id: user.id }, true);

    return {
      ...user,
      token,
    };
  } catch (error) {
    throw new Error("Error handling Google OAuth : ", error.message);
  }
}

module.exports = { handleGoogleOAuth };

async function handleGitHubOAuth(profile, accessToken) {
  const { username, emails } = profile;
  const email = emails[0].value;

  try {
    let user = await prisma.user.findUnique({
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

    const pwHash = generateRandomChars(16);
    const provider = await prisma.provider.findFirst({
      where: { name: "Github" },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          name: username.trim(),
          email,
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
    }

    return {
      ...user,
      accessToken,
    };
  } catch (error) {
    throw new Error("Error handling GitHub OAuth : " + error.message);
  }
}

module.exports = { handleGitHubOAuth };
