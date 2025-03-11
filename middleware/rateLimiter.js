const rateLimit = require("express-rate-limit");
const RedisStore = require("rate-limit-redis").default; // Use .default for RedisStore
const redis = require("../config/redisClient"); // Import Redis client

const limiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args) => redis.call(...args), // Fix Redis command issue
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests, please try again later.",
});

module.exports = limiter;
