const checkAuth = require("../../middlewares/checkAuth");
const InputValidator = require("../../middlewares/inputValidator");

const router = require("express").Router();

router.use("/public", InputValidator, require("./routes/auth.public"));
router.use("/private", checkAuth, require("./routes/auth.private"));

module.exports = router;
