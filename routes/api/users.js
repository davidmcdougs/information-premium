var router = require("express").Router();
var userController = require("../../controllers/user");

router.get("users/:id", userController.findOne);
router.post("users/", userController.create);
router.put("users/:id", userController.update);
router.delete("users/:id", userController.delete);
router.get("users/all", userController.findAll);
module.exports = router;