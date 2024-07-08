const router = require("express").Router();

router.use("/private", require("./routes/user.private"));

module.exports = router;
