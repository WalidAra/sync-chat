const { GetUser, DeleteUser, UpdateUser } = require("../user.controller");

const router = require("express").Router();

router.get("/:id", GetUser);
router.delete("/:id", DeleteUser);
router.put("/:id", UpdateUser);

module.exports = router;
