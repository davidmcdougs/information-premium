var router = require("express").Router();
var apiRoutes = require("./api");

router.use("/api", apiRoutes);

module.exports = router;