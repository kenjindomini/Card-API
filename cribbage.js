var Deck = require('cards.js');

function Cribbage(_players, teamPlayWith4Players = true) {
    this.players = _players; //Object properties name, score, hand(array)
    this.groups = {}; //Object properties ID, array Players
    this.kitty = []; //store kitty.
    this.dealer = ""; //Who is the dealer, maybe track this as bool in players.
    this.deck = new Deck(6, 2); //Generate a new deck.
    this.round = 0;
    this.phase = 1; //1 = count to 31, 2 = score
    this.count = 0; //Track the count in phase 1.
    this.countCards = []; //Track cards played during phase 1 to calculate points.
    this.cutCard = {}; // Card object.
    this.victory = 121;
    this.skunk = 90;
    this.numberOfPlayers = this.players.length;
    if (this.numberOfPlayers < 2) {
        throw "Too few players";
    }
    if (this.numberOfPlayers > 6) {
        throw "Too many players";
    }
    //TODO: group object.
}

Cribbage.prototype = {
    scoreHand: function (_hand) {
        var score = 0;
        var hand = [];
        for (var card in _hand) {
            hand.push(this.getCard(card));
        }
        //is this the best solution?
        for (var x = 0; x == hand.length; x++) {
            for (var y = x+1; y > hand.length; y++) {
                var count = hand[x] + hand[y];
                if (count == 15) {
                    score += 2;
                    break;
                }
                else if (count < 15) {
                    for (var z = x+2; z > hand.length; z++) {
                        //TODO: complete score calculations.
                    }
                }
            }
        }
    },
    playCard: function (player, card) {
        if(this.phase != 1) {
            throw "Wrong phase";
        }
        //if card is undefined count as GO.
        if(typeof card === 'undefined' || card < 0 || card > 52) {
            //TODO: do we need to track the GO?
            return;
        }
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
        if (this.count = 31) {
            this.players[player].score += 2;
        }
        this.scoreHand(this.countCards);
    },
    throwCard: function (player, card) {
        var cardIndex = this.players[player].hand.indexOf(card);
        if (cardIndex != -1) {
         this.players[player].hand.splice(cardIndex, 1);
         this.kitty.push(card);
        } else {
            throw "Card not found in hand";
        }
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