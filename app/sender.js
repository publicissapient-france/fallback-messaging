'use strict';

//setup Dependencies
var rabbit = require('rabbit.js');

var context = rabbit.createContext('amqp://192.168.59.103:5672');
if (process.argv.length < 3) {
  console.log('Usage: node sender.js message_nbr');
  process.exit(1);
}

var max = process.argv[2];
context.on('ready', function () {
  var pub = context.socket('PUSH');
//  pub.setsockopt('persistent', false);

  pub.connect('hello2', function () {
    console.log('pub connect');
    for (var i = 0; i < max; i++)
      pub.write(JSON.stringify({welcome: 'rabbit.js', nbr: i}), 'utf8');
    pub.close();
  });

  pub.on('close', function () {
    context.close();
  });
});
