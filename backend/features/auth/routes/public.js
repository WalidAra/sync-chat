const express = require("express");
const router = express.Router();

router.use("/auth", require("./public/auth"));

module.exports = router;
