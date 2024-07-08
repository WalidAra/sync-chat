const checkAuth = require("../../middlewares/checkAuth");
const router = require("express").Router();

router.use("/private", checkAuth, require("./routes/user.private"));

module.exports = router;
