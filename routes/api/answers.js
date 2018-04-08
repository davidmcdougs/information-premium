const router = require("express").Router();
const answerController = require("../../controllers/answer");

// use Questions routes to post new answers attached to a question
router.put("/:id", answerController.update);
router.delete("/:id", answerController.delete);
router.get("/:id", answerController.findOne);
router.get("/", answerController.findAll);

module.exports = router;