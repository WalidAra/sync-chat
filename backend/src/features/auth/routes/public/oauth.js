const router = require("express").Router();
const passport = require("passport");

const prisma = require("../../../../../config/prisma");
const axios = require("axios");
const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    if (req.user && req.user.token) {
      res.redirect(`http://localhost:5173/?token=${req.user.token}`);
    } else {
      res
        .status(400)
        .json({ status: false, message: "Authentication failed", data: null });
    }
  }
);

router.get("/github", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`
  );
});

router.get("/github/callback", async (req, res) => {
  const code = req.query.code;
  if (!code) {
    return res.status(400).send("Code is missing");
  }

  try {
    const response = await axios.post(
      `https://github.com/login/oauth/access_token`,
      {
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code,
      },
      {
        headers: { accept: "application/json" },
      }
    );

    const accessToken = response.data.access_token;
    if (!accessToken) {
      return res.status(400).send("Failed to get access token");
    }

    const userResponse = await axios.get("https://api.github.com/user", {
      headers: { Authorization: `token ${accessToken}` },
    });
    const emailResponse = await axios.get(
      "https://api.github.com/user/emails",
      {
        headers: { Authorization: `token ${accessToken}` },
      }
    );

    const githubUser = {
      ...userResponse.data,
      emails: emailResponse.data,
    };

    const provider = await prisma.provider.findFirst({
      where: { name: "Github" },
    });

    let user = await prisma.user.findUnique({
      where: { email: githubUser.emails[0].email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: githubUser.emails[0].email,
          name: githubUser.name,
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
    console.log(user);
    res.redirect(process.env.GITHUB_CALLBACK_URL);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
      data: null,
    });
  }
});

module.exports = router;
