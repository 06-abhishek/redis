const redis = require("../config/redisClient");

const getUser = async (req, res) => {
  const userId = req.params.id;

  // Check if user data is cached
  const cachedUser = await redis.get(`user:${userId}`);
  if (cachedUser) {
    return res.json(JSON.parse(cachedUser));
  }

  // Dummy user data
  const user = { id: userId, name: "John Doe" };

  // Store in Redis for future requests (1 hour)
  await redis.setex(`user:${userId}`, 3600, JSON.stringify(user));

  res.json(user);
};

module.exports = { getUser };
