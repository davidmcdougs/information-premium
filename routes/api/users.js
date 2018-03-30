var router = require("express").Router();
var userController = require("../../controllers/user");

router.get("/:id", userController.findOne);
router.post("/", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);
router.get("/", userController.findAll);
module.exports = router;