const amqp = require('amqplib/callback_api');
const queue ="chat_queue";
const message = "Teste";

amqp.connect("amqp://localhost", (err, connection) => {
    if(err){
        console.error("Conexão falhou:", err);
        process.exit(1);
    }
    connection.createChannel((err, channel) =>{
        if(err){
            console.error("Falha ao criar o canal:", err);
            process.exit(1);
        }
        channel.assertQueue(queue, {durable: false});

        channel.sendToQueue(queue, Buffer.from(message));
        console.log("Mensagem enviada:", message);
    });

    setTimeout(() => {
        connection.close();
        process.exit(0);
    }, 500);
});

