const amqp = require('amqplib/callback_api');
const queue ="mensagem_chat";


function receber(){
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
            
            console.log("Esperando mensagem na fila");
            
        channel.consume(
            queue,
            (message) =>{
                console.log("mensagem recebida:", message.content.toString());
            },
            {noAck: true}
        );
        });
    });
}


module.exports = receber;