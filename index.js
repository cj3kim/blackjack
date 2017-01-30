var prompt = require('prompt-sync')();
var Blackjack = require("./blackjack.js");
var generate_deck = Blackjack.generate_deck;
var score_cards_in_hand = Blackjack.score_cards_in_hand;
var Immutable = require("immutable");
var List = Immutable.List;

function start_game() {
  console.log("============ Welcome to Blackjack ============");
  var game_switch = true;
  var name_one = prompt("Please input player 1's name.")
  var name_two = prompt("Please input player 2's name.")

  var player_one = { name: name_one, cardsInHand: []};
  var player_two = { name: name_two, cardsInHand: []};
  var players = List([player_one, player_two]);

  console.log("Starting game...".);
  var deck = generate_deck(List(["Hearts", "Spades", "Cloves", "Diamonds"]));
  while (game_switch) {

  }
}

function deal_cards_to_players(deck, players) {

  players.map(function (player) {
    player.cardsInHand
  })
}
