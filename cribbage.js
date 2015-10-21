function Cribbage(numberOfPlayers) {
    this.players = {};
    this.groups = {};
    if (numberOfPlayers < 2) {
        throw "Too few players";
    }
    if (numberOfPlayers > 6) {
        throw "Too many players";
    }
}

Cribbage.prototype = {
    
};