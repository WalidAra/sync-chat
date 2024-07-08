const { Register } = require("../auth.controller");

const router = require("express").Router();

router.post("/register", Register);
router.post("/login", async () => {});
router.use("/oauth", require("./public/oauth"));

module.exports = router;
