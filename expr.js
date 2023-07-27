'use strict';

const express = require('express');
const app = express();

app.get('/', function (req, res) {

  res.send('Merhaba Express');
});

app.post('/', function (req, res) {
  res.send('Merhaba Express');
});

app.listen(1453, function () {
  console.log('Sunucu çalışıyor...');
});