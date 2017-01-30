var _ = require("underscore");
var Immutable = require("immutable");
var List = Immutable.List;


const Cards = List([ 2,3,4,5,6,7,8,9,10, "Jack", "Queen", "King", "Ace" ])

function assign_face_card_value (face) {
   return face === "Ace" ? List([1,11]) : 10;
}

function generate_deck (suits) {
  return suits.map(function (suit) {
    return Cards.map(function (card) {
      var value = _.isNumber(card) ? card : assign_face_card_value(card);
      return {
        value: value,
        cardName: card.toString(),
        suit: suit
      }
    })
  }).flatten(true);

}

module.exports = {
  generate_deck: generate_deck
}
