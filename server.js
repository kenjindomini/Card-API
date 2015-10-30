var http = require('http');
var path = require('path');

//var async = require('async');
var express = require('express');
var Cribbage = require("./cribbage.js");

// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));

router.post('/cribbage/newgame/', cribbageNewGame);
router.post('/cribbage/newgame/teams', cribbageNewGameTeams);

server.listen(process.env.PORT || 80, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Card API listening at", addr.address + ":" + addr.port);
});

function cribbageNewGame(req, res) {
  //TODO: read posted JSON should contain list of players
  //{ players: [] }
  //auto set teams when given 6 players
  //reject 5 player games.
  //return session
}

function cribbageNewGameTeams(req, res) {
  //TODO: read posted JSON should contain list of players
  //{players: [], teams: { 1: [], 2: [], 3: []}}
}