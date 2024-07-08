const { profile, deleteUser, update } = require("../user.controller");
const router = require("express").Router();

router.get("/profile", profile);
router.delete("/delete", deleteUser);
router.put("/update", update);

module.exports = router;
