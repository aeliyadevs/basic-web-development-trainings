let dealerTotal = 0;
let playerTotal = 0;

let dealerCards, playerCards;

const MAX = 21;

let result = "";

// Card Terms
// Deck - Set of all cards
// Suit - Club, Spade, Heart, Diamond
// Value - Ace, 2, 3, ......, 10, J, Q, K

let AceOfClub = {
  suit: "Club",
  value: 1,
  image: "a-clubs.png",
};

let AceOfDiamond = {
  suit: "Diamond",
  value: 1,
  image: "a-diamonds.png",
};

let AceOfHearts = {
  suit: "Hearts",
  value: 1,
  image: "a-hearts.png",
};

let AceOfSpade = {
  suit: "Spade",
  value: 1,
  image: "a-spades.png",
};

let suits = ["diamond", "heart", "club", "spade"];
let values = [
  "ace",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "jack",
  "queen",
  "king",
];

for (i = 0; i < suits.length; i++) {
  for (j = 0; j < values.length; j++) {
    console.log(values[j] + " of " + suits[i]);
  }
}
