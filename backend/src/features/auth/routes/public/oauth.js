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

module.exports = router;
