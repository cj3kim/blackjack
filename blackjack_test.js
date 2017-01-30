var chai = require("chai")
var chaiImmutable = require("chai-immutable");
var assert = chai.assert
var Immutable = require("immutable");
var List = Immutable.List;
var Map = Immutable.Map;
var Blackjack = require("./blackjack");
var generate_deck  = Blackjack.generate_deck;
var score_cards_in_hand = Blackjack.score_cards_in_hand;

describe("#generate_deck", function() {
  it("should create an initial deck of playing cards", function () {
    var input = List(["Hearts", "Spades", "Cloves", "Diamonds"]);

    var result = generate_deck(input);
    var expectedResult = Map({
        value: "2",
        cardName: "2",
        suit: "Hearts"
      });

    assert.deepEqual(result.first(), expectedResult)
  });
})


describe("#score_cards_in_hand", function () {
  describe("when cards in hand are over 21", function () {
    describe("when aces come into play", function () {
      it("should sum to 21 and under", function () {
        var input = [
          { value: 10, cardName: "King", suit: "Hearts" },
          { value: [1,11], cardName: "Ace", suit: "Spades" },
          { value: 5, cardName: "5", suit: "Cloves" }
        ];
        var result = score_cards_in_hand(input);
        var expectedResult = { score: 16, valid: true };
        assert.deepEqual(result,expectedResult)
      })
    });
    it("should return invalid state", function () {
      var input = [
        {
          value: 10,
          cardName: "King",
          suit: "Hearts"
        },
        {
          value: 4,
          cardName: "4",
          suit: "Spades"
        },
        {
          value: 10,
          cardName: "Jack",
          suit: "Cloves"
        }
      ];
      var result = score_cards_in_hand(input);

      var expectedResult = { score: 24, valid: false };

      assert.deepEqual(result, expectedResult)
    });

  })
  describe("when cards in hand sum to 21 and under", function () {
    describe("when aces come into play", function () {
      it("should sum to 21 ", function () {
        var input = [
          { value: 10, cardName: "King", suit: "Hearts" },
          { value: [1,11], cardName: "Ace", suit: "Spades" },
        ];
        var result = score_cards_in_hand(input);
        var expectedResult = { score: 21, valid: true };
        assert.deepEqual(result,expectedResult)
      })
    });
    it("should return the cards and score", function () {
      var input = [
        { value: 10, cardName: "King", suit: "Hearts" },
        { value: 4, cardName: "4", suit: "Spades" },
        { value: 5, cardName: "5", suit: "Cloves" }
      ];
      var result = score_cards_in_hand(input);
      var expectedResult = { score: 19, valid: true };
      assert.deepEqual(result, expectedResult)
    });
  })
});
