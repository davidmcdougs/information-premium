const router = require("express").Router();
const questionRoutes = require("./questions");
const userRoutes = require("./users");

router.use("/questions", questionRoutes);
router.use("/users", userRoutes);

module.exports = router;