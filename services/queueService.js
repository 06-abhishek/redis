// Task Queue using BullMQ for background job processing
const { Queue, Worker } = require("bullmq");
const redis = require("../config/redisClient");

const emailQueue = new Queue("emailQueue", { connection: redis });

// Worker to process email jobs
new Worker("emailQueue", async (job) => {
  console.log(`Processing job: ${job.id} -> ${job.data.email}`);
});

const addEmailJob = (email) => emailQueue.add("sendEmail", { email });

module.exports = { addEmailJob };
