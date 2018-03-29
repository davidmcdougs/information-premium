var router = require("express").Router();
var questionController = require("../../controllers/question");

router.get("questions/:id", questionController.findOne);
router.post("questions/", questionController.create);
router.put("questions/:id", questionController.update);
router.delete("questions/:id", questionController.delete);
router.get("questions/all", questionController.findAll);
module.exports = router;