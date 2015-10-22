function Cribbage(numberOfPlayers, teamPlayWith4Players = true) {
    this.players = {}; //Object properties name, score
    this.groups = {}; //Object properties ID, array Players
    this.dealer = "";
    this.deck = [];
    this.round = 0;
    this.phase = 1; //1 = count to 31, 2 = score
    this.victory = 121;
    this.skunk = 90;
    if (numberOfPlayers < 2) {
        throw "Too few players";
    }
    if (numberOfPlayers > 6) {
        throw "Too many players";
    }
}

Cribbage.prototype = {
    scoreHand: function (hand, centerCard) {
        
    },
    playCard: function (player, card) {
        
    },
    throwCard: function (player, card) {
        
    },
    cut: function (player, cutDepth, forDeal = false) {
        
    },
    
};