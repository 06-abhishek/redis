// Routes for user-related API endpoints
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const cacheMiddleware = require("../middleware/cacheMiddleware");

router.get("/user/:id", cacheMiddleware, userController.getUser);

module.exports = router;
