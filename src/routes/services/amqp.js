const amqp = require('amqplib');

const url = process.env.AMQP_URL || 'amqp://localhost';

async function getChannel() {
  const connection = await amqp.connect(url);
  const channel = await connection.createChannel();

  return channel;
}

module.exports = { getChannel };