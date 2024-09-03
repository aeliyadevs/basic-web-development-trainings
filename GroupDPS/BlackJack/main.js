let deck = [];

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

// prepare cards and add to the deck
let card = {};
for (i = 0; i < suits.length; i++) {
  for (j = 0; j < values.length; j++) {
    console.log(values[j] + " of " + suits[i]);
    card = {
      suit: suits[i],
      value: values[j],
    };
    deck.push(card);
  }
}

// switch statement
function convertValue(valueString) {
  switch (valueString) {
    case "ace":
      return 1;
    case "two":
      return 2;
    case "three":
      return 3;
    case "four":
      return 4;
    case "five":
      return 5;
    case "six":
      return 6;
    case "seven":
      return 7;
    case "eight":
      return 8;
    case "nine":
      return 9;
    default:
      return 10;
  }
}

console.log(convertValue("two"));

console.log(convertValue("ten") + convertValue("two"));
