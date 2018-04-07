const router = require("express").Router();
const questionRoutes = require("./questions");
const userRoutes = require("./users");
const answerRoutes = require("./answers");
const authRoutes = require("./auth");

router.use("/questions", questionRoutes);
router.use("/users", userRoutes);
router.use("/answers", answerRoutes);
router.use("/auth", authRoutes);

module.exports = router;