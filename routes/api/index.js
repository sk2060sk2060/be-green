const router = require("express").Router();
const userRoutes = require("./users");

// Book routes
router.use("/api", userRoutes);

module.exports = router;
