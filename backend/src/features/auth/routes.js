const InputValidator = require("../../middlewares/inputValidator");
const router = require("express").Router();

router.use("/public", InputValidator, require("./routes/auth.public"));

module.exports = router;
