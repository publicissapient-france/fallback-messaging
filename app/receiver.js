'use strict';

var rabbit = require('rabbit.js');

var context = rabbit.createContext('amqp://192.168.59.103:5672');
context.on('ready', function () {
  var sub = context.socket('PULL');
  //sub.setsockopt('persistent', false);
  sub.connect('hello2', function () {
    console.log('receiver connected');
    sub.on('readable', function () {
      var chunk;
      while (null !== (chunk = sub.read())) {
        console.log('got %s bytes of data', chunk);
      }
    });
  });
});