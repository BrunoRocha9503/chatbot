const amqp = require('amqplib/callback_api');
const queue ="mensagem_chat";
//const message = "teste";

function enviar(message){
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
    
            channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
            console.log("Mensagem enviada:", message);
        });
    
        setTimeout(() => {
            connection.close();
            process.exit(0);
        }, 500);
    });
    
}

module.exports = enviar;