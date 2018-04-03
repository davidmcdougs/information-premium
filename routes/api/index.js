const router = require("express").Router();
const questionRoutes = require("./questions");
const userRoutes = require("./users");
const answerRoutes = require("./answers");

router.use("/questions", questionRoutes);
router.use("/users", userRoutes);
router.use("/answers", answerRoutes);

module.exports = router;