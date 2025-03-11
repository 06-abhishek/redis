// Pub/Sub Service for real-time messaging

const pub = new Redis();
const sub = new Redis();

sub.subscribe("notifications");

sub.on("message", (channel, message) => {
  console.log(`Received on ${channel}: ${message}`);
});

const publishMessage = (message) => pub.publish("notifications", message);

module.exports = { publishMessage };
