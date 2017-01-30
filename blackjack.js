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
function isScoreValid (score) {
  return score > 21 ? false : true;
}

function score_cards_in_hand (_hand) {
  var hand = List(_hand);

  var aceKey = hand.findKey(function (e) { return e.cardName === "Ace" });
  var hasAce = _.isNumber(aceKey);

  if (hasAce) {
    var aceCard = hand.get(aceKey);
    var acelessHand = hand.delete(aceKey);

    var computedScores = aceCard.value.map(function (k) {
      var sumOfOtherCards = acelessHand.reduce(function (accum, e) { return accum += e.value; }, 0)
      var _score =  k + sumOfOtherCards;
      return _score;
    });

    var validScores = List(computedScores.filter(isScoreValid));

    if (validScores.size === 0) {
      return {score: computedScores.min(), valid: false }
    } else {
      return {score: validScores.max(), valid: true}
    }
  } else {
    var score = hand.reduce(function(accum, card) { return accum += card.value }, 0);
    var valid = isScoreValid(score);
    return {score: score, valid: valid};
  }
}

module.exports = {
  generate_deck: generate_deck,
  score_cards_in_hand: score_cards_in_hand
}

