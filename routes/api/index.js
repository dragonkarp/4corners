const router = require("express").Router();

const taskRoutes = require("./tasks");
const userRoutes = require("./user");

// Task route
router.use("/tasks", taskRoutes);

// User route
router.use("/user", userRoutes);

module.exports = router;
