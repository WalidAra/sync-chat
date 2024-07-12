const checkAuth = require("../../middlewares/checkAuth");
const router = require("express").Router();

router.use("/private", checkAuth, require("./routes/chat.private"));

module.exports = router;
