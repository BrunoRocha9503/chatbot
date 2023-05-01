const amqp = require('./amqp');

async function getReply(message) {
  const channel = await amqp.getChannel();
  const queue = 'chatbot_queue';
  const correlationId = Date.now().toString();
  const payload = { message, correlationId };

  await channel.assertQueue(queue);
  await channel.sendToQueue(queue, Buffer.from(JSON.stringify(payload)), { correlationId });

  return new Promise(resolve => {
    channel.consume(queue, (msg) => {
      if (msg.properties.correlationId === correlationId) {
        channel.close();
        resolve(JSON.parse(msg.content.toString()).reply);
      }
    }, { noAck: true });
  });
}

module.exports = { getReply };