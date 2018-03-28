var router = require("express").Router();
var questionRoutes = require("./questions");
router.use("/questions", questionRoutes);
module.exports = router;