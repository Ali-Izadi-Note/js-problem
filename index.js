const rabbit = require("./rabbit.config");

function main() {
    console.log("Application Start");
    let c = rabbit.makeConnection("sample text");

    c.channel.assertQueue('mainQueue', {durable: false}).then((_queue) => {
        c.channel.sendToQueue(_queue.queue, Buffer.from({name: "ALI"}))
    })
}

main()
