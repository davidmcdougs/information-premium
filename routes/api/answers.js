const router = require("express").Router();
const answerController = require("../../controllers/answer");

router.post("/", answerController.create);
router.get("/:id", answerController.findOne);
router.get("/", answerController.findAll);

module.exports = router;