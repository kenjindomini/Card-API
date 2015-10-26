function Deck(maxPlayers, minPlayers = 1, deckSize = 52, lowestCard = 1, cardDuplicates = 0) {
  this.deck = [];
  this.minPlayers = minPlayers;
  this.maxPlayers = maxPlayers;
  this.deckSize = deckSize;
  this.lowestCard = lowestCard;
  //Not implemented yet, for special card games with card duplicates
  this.cardDuplicates = 0;
  this.max = this.deckSize;
  this.min = this.lowestCard;
  while (this.deck.length < this.deckSize) {
    var nextCard = Math.floor(Math.random() *
    (this.max - this.min + 1) + this.min);
    if (nextCard == this.min) {
      this.min++;
    } else if (nextCard == this.max) {
      this.max--;
    }
    if (this.deck.indexOf(nextCard) == -1) {
      this.deck.push(nextCard);
    }
  }
}

Deck.prototype = {
    deal: function deal(numberPerPlayer, numberOfPlayers) {
      numberOfPlayers = this.coerce(numberOfPlayers, this.minPlayers, this.maxPlayers);
      var hands = {};
      var player = 1;
      for (var i = 1; i < numberOfPlayers * numberPerPlayer; i++) {
        var nextCard = this.deck.shift();
        hands[player].hand.push(nextCard);
        if (player++ > numberOfPlayers) {
          player = 1;
        }
      }
    },
    coerce: function coerce(value, floor, ceiling) {
      if (!(value >= floor && value <= ceiling)) {
        if (value > ceiling) {
          return ceiling;
        }
        return floor;
      }
      return value;
    }
};

//Export Deck contructor, so it can be loaded to another file using require()
module.exports = Deck;
