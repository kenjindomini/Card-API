var http = require('http');
var path = require('path');

//var async = require('async');
var express = require('express');

// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));

router.get('/NewDeck', NewDeck);

server.listen(process.env.PORT || 80, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Card API listening at", addr.address + ":" + addr.port);
});

function NewDeck(request, response) {
  
}