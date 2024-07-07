const router = require("express").Router();

router.use("/public", require("./features/auth/routes/public"));

module.exports = router;
