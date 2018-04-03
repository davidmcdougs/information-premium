var router = require("express").Router();
var questionController = require("../../controllers/question");

router.get("/:id", questionController.findOne);
router.post("/", questionController.create);
router.put("/:id", questionController.update);
router.delete("/:id", questionController.delete);
router.get("/", questionController.findAll);
router.get("/search/:topic", questionController.findTopic);

// router.post("/submit", questionController.addAnswer);
router.get("/pop/answers", questionController.popAllReply);

module.exports = router;