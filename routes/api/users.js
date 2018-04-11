const router = require("express").Router();
const userController = require("../../controllers/user");

router.get("/:id", userController.findOne);
router.post("/", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);
router.get("/", userController.findAll);
router.get("/search/:handle", userController.findHandle);
module.exports = router;