const router = require("express").Router();
const passport = require("passport");

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

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", { session: false }),
  (req, res) => {
    console.log(req.user);
    if (req.user && req.user.accessToken) {
      console.log(req.user);
      res.redirect(
        `http://localhost:5173/auth/login/?token=${req.user.accessToken}`
      );
    } else {
      res
        .status(400)
        .json({ status: false, message: "Authentication failed", data: null });
    }
  }
);

module.exports = router;
