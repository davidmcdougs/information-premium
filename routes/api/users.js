var router = require("express").Router();
var userController = require("../../controllers/user");

router.get("/:id", userController.findOne);
router.post("/", userController.create);
router.delete("/:id", userController.delete);
module.exports = router;