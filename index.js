// Entry point of the application
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const userRoutes = require("./routes/userRoutes");
const limiter = require("./middleware/rateLimiter");

app.use(express.json()); // Middleware to parse JSON requests
app.use(limiter); // Apply rate limiting middleware
app.use("/api", userRoutes); // Register API routes

// Start the server
app.listen(3000, () => console.log("Server running on port 3000"));
