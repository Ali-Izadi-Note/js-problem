const amqp = require('amqplib');
const RABBIT_HOST = "amqp://localhost";

function makeConnectionAndChannel(haminjoori) {
    console.log(haminjoori)

    let connectionAndChannel = {
        connection: null,
        channel: null
    }

    amqp.connect(RABBIT_HOST).then((_connection) => {
        connectionAndChannel.connection = _connection;
        _connection.createChannel().then((_channel) => {
            connectionAndChannel.channel = _channel;
            return connectionAndChannel;
        }).catch((channelError) => {
            console.log("Error in Create Channel RabbitMQ");
            console.log(channelError);
        })
    }).catch((connectionError) => {
        console.log("Error in MakeConnection To RabbitMQ");
        console.log(connectionError);
    })
}


module.exports.makeConnection = makeConnectionAndChannel;
