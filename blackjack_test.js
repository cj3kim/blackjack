var chai = require("chai")
var chaiImmutable = require("chai-immutable");
var assert = chai.assert
var Immutable = require("immutable");
var List = Immutable.List;
var Map = Immutable.Map;
var Blackjack = require("./blackjack");
var generate_deck  = Blackjack.generate_deck;

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
    it("should return BUST state", function () {
      var result;
      expectedResult;

      assert.deepEqual(result, expectedResult)
    });
  })
  describe("when cards in hand sum to 21 and under", function () {
    it("should return the cards and score", function () {
      var result;
      expectedResult;
      assert.deepEqual(result, expectedResult)
    });
  })

})

