var router = require("express").Router();
var questionController = require("../../controllers/question");

router.get("/:id", questionController.findOne);
router.post("/", questionController.create);
router.delete("/:id", questionController.delete);
module.exports = router;