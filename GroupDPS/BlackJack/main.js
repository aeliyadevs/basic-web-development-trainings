let deck = [];

let dealerTotal = 0;
let playerTotal = 0;

let dealerCards = [],
  playerCards = [];

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
let suits = ["diamond", "spade", "club", "heart"];
console.log(suits);

hold = "spade";
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
    // console.log(values[j] + " of " + suits[i]);
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

// console.log(convertValue("two"));

// console.log(convertValue("ten") + convertValue("two"));

// suffle the card deck
function shuffleCards() {
  let hold; // a temporary variable to hold card before replacing it
  let newPos; // variable to store the new position of the card to be moved
  for (i = 0; i < deck.length; i++) {
    newPos = Math.trunc(Math.random() * deck.length); // generates random number less than the length of the card deck
    hold = deck[newPos]; // holds the card currently in the position generated above
    deck[newPos] = deck[i]; // swaps cards
    deck[i] = hold; // swaps cards
  }
}
shuffleCards(); // execute the function to suffle the cards
console.log(deck); // show shuffled card deck

// Array options/methods
// push - add new item to the array at last position
// pop - remove last item from the array
// unshift - add new item to the array at the first position
// shift - remove first item from the array

function distributeCards() {
  playerCards.push(deck.shift());
  dealerCards.push(deck.shift());
  playerCards.push(deck.shift());
  dealerCards.push(deck.shift());
}
distributeCards();

function playerCardsSum() {
  playerTotal = playerTotal + convertValue(playerCards[0].value);
  playerTotal = playerTotal + convertValue(playerCards[1].value);
  console.log(playerTotal);
}
playerCardsSum();
