var http = require('http');

var nState = require('node-static');

var fileServer = new nState.Server('.');

http.createServer(function(req, res) {
  
  fileServer.serve(req,res);
  
}).listen(5000);