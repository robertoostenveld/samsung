#!/usr/bin/env node

var express = require('express');
var SamsungRemote = require('samsung-remote');

var ADDRESS = '192.168.1.127'; // of the smart TV

var remote = new SamsungRemote({
    ip: ADDRESS
});

var app = express();
var PORT = 3010; // of this application

app.use(express.static('public'))

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});

app.get('/', function (req, res) {
  res.send('index.html')
  // res.send('Samsung Smart TV');
});

app.get('/status', function (req, res) {
  remote.isAlive(function(err) {
    if (err) {
        res.send('TV is offline');
    } else {
        res.send('TV is online');
    }
  });
});

app.get([], function (req, res) {
  arr = req.url.split('/');
  message = arr[1].toUpperCase();
  if (message.length>1) {
    remote.send(message, function callback(err) {
        if (err) {
            console.error(err);
            res.send(err);
        } else {
            console.log(message);
            res.send(message);
        }
    });
  }
});

