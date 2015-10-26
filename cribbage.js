var Deck = require('cards.js');

function Cribbage(numberOfPlayers, teamPlayWith4Players = true) {
    this.players = {}; //Object properties name, score, hand(array)
    this.groups = {}; //Object properties ID, array Players
    this.dealer = ""; //Who is the dealer, maybe track this as bool in players.
    this.deck = new Deck(6, 2); //Generate a new deck.
    this.round = 0;
    this.phase = 1; //1 = count to 31, 2 = score
    this.count = 0; //Track the count in phase 1.
    this.countCards = []; //Track cards played during phase 1 to calculate points.
    this.cutCard = {}; // Card object.
    this.victory = 121;
    this.skunk = 90;
    if (numberOfPlayers < 2) {
        throw "Too few players";
    }
    if (numberOfPlayers > 6) {
        throw "Too many players";
    }
    //TODO: Populate players or group object.
}

Cribbage.prototype = {
    scoreHand: function (hand, centerCard) {
        
    },
    playCard: function (player, card) {
        if(this.phase != 1) {
            throw "Wrong phase";
        }
        //TODO: if card is undefined count as GO.
        //check card is a valid play
        //Must be in hand and not put the count over 31.
        var _card = this.getCard(card);
        if (_card.value + this.count > 31) {
            throw "Illegal play: Greater than 31";
        }
        var cardIndex = this.players[player].hand.indexOf(card);
        if (cardIndex != -1) {
         this.players[player].hand.splice(cardIndex, 1);
         this.countCards.push(_card);
         this.count += _card.value;
        } else {
            throw "Card not found in hand";
        }
        //TODO check if the player scores pair/trips/quads, run, 15, 31.
    },
    throwCard: function (player, card) {
        
    },
    cut: function (player, cutDepth, forDeal = false) {
        
    },
    getCard: function (_card) {
        var suit = 1;
        var cardValue = _card;
        var card;
        while (cardValue > 13) {
            cardValue -= 13;
            suit++;
        }
        switch (cardValue) {
            case 1: {
                card = "Ace";
                break;
            }
            case 11: {
                card = "Jack";
                cardValue = 10;
                break;
            }
            case 12: {
                card = "Queen";
                cardValue = 10;
                break;
            }
            case 13: {
                card = "King";
                cardValue = 10;
                break;
            }
            default: {
                card = cardValue;
                break;
            }
        }
        return {"value": cardValue, "suit": suit, "card": card};
    }
};

//Export module for use in other files.
module.exports = Cribbage;