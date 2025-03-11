// Session Management using Redis
const redis = require("../config/redisClient");

const setSession = async (userId, sessionData) => {
  await redis.setex(`session:${userId}`, 3600, JSON.stringify(sessionData)); // Store session for 1 hour
};

const getSession = async (userId) => {
  const session = await redis.get(`session:${userId}`);
  return session ? JSON.parse(session) : null;
};

module.exports = { setSession, getSession };
