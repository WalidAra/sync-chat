const router = require("express").Router();

router.use("/auth", require("./auth/routes"));
router.use("/chat", require("./chat/routes"));
router.use("/user", require("./user/routes"));
router.use("/message", require("./message/routes"));

module.exports = router;
