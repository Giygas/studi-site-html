#!/usr/bin/env node

var compression = require('compression')
var express = require('express');

var app = express();


app.use(express.static('public'));
app.use(compression);

app.use('/assets', express.static(__dirname + 'public/assets'));



var server = app.listen(8081, function() {
  var port = server.address().port;
  console.log('Sever started at http://localhost:%s', port);
});