/**
 * Created by bapaydin on 06.02.2017.
 */


var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    KeyedMessage = kafka.KeyedMessage,
    client = new kafka.Client(),
    producer = new Producer(client),
    km = new KeyedMessage('dm','firstDm'),
    payloads = [
        {topic : 'test',messages : 'hi' , partition : 0}
    ];


producer.on('ready',function () {
    producer.send(payloads,function (err, data) {
        console.log(data);
    }) ;
});

producer.on('error',function (err) {
   console.log(err);
});