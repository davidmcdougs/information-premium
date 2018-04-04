const router = require("express").Router();
const answerController = require("../../controllers/answer");

router.post("/", answerController.update);
router.put("/:id", answerController.update);
router.delete("/:id", answerController.delete);
router.get("/:id", answerController.findOne);
router.get("/", answerController.findAll);

module.exports = router;