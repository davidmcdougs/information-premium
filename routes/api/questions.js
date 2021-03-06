const router = require("express").Router();
const questionController = require("../../controllers/question");

router.get("/:id", questionController.popOneReply);
router.post("/", questionController.create);
router.put("/:id", questionController.update);
router.delete("/:id", questionController.delete);
router.get("/", questionController.findAll);
router.get("/search/:topic", questionController.findTopic);

router.post("/add-answer/:id", questionController.addAnswer);
router.get("/pop/answers", questionController.popAllReply);
router.get("/topics/all", questionController.getTopics);

module.exports = router;