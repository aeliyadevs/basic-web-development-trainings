let deck = [];

let dealerTotal = 0;
let playerTotal = 0;

let dealerCards = [],
  playerCards = [];

const MAX = 21;

let hiddenCard = "";

let result = "";

// Card Terms
// Deck - Set of all cards
// Suit - Club, Spade, Heart, Diamond
// Value - Ace, 2, 3, ......, 10, J, Q, K

// let AceOfClub = {
//   suit: "Club",
//   value: 1,
//   image: "a-clubs.png",
// };

// let AceOfDiamond = {
//   suit: "Diamond",
//   value: 1,
//   image: "a-diamonds.png",
// };

// let AceOfHearts = {
//   suit: "Hearts",
//   value: 1,
//   image: "a-hearts.png",
// };

// let AceOfSpade = {
//   suit: "Spade",
//   value: 1,
//   image: "a-spades.png",
// };

let suits = ["diamond", "spade", "club", "heart"];

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

let resultArea = document.getElementById("resultArea");

// prepare cards and add to the deck
let card = {};

function prepareDeck() {
  for (i = 0; i < suits.length; i++) {
    for (j = 0; j < values.length; j++) {
      // console.log(values[j] + " of " + suits[i]);
      card = {
        suit: suits[i],
        value: values[j],
        image: generateImageName(suits[i], values[j]),
      };
      deck.push(card);
    }
  }
  // console.log(deck);
}

function generateImageName(suit, value) {
  var valueShort;
  switch (value) {
    case "ace":
      valueShort = "a";
      break;
    case "two":
      valueShort = "2";
      break;
    case "three":
      valueShort = "3";
      break;
    case "four":
      valueShort = "4";
      break;
    case "five":
      valueShort = "5";
      break;
    case "six":
      valueShort = "6";
      break;
    case "seven":
      valueShort = "7";
      break;
    case "eight":
      valueShort = "8";
      break;
    case "nine":
      valueShort = "9";
      break;
    case "ten":
      valueShort = "10";
      break;
    case "jack":
      valueShort = "j";
      break;
    case "queen":
      valueShort = "q";
      break;
    case "king":
      valueShort = "k";
      break;
    default:
      valueShort = "";
  }
  var imageName = valueShort + "-" + suit + "s.png";
  return imageName;
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
  // console.log(deck);
}
// shuffleCards(); // execute the function to suffle the cards
// console.log(deck); // show shuffled card deck

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
  // playerCards.push(deck.shift());
  // dealerCards.push(deck.shift());
  // console.log(playerCards);
  // console.log(dealerCards);
}
// distributeCards();

// function addNewCard() {
//   playerCards.push(deck.shift());
// }
// addNewCard();

function playerCardsSum() {
  for (i = 0; i < playerCards.length; i++) {
    playerTotal = playerTotal + convertValue(playerCards[i].value);
  }
}

function dealerCardsSum() {
  for (i = 0; i < dealerCards.length; i++) {
    dealerTotal = dealerTotal + convertValue(dealerCards[i].value);
  }
}

function compareCardsSum() {
  // console.log(dealerCards);
  console.log(playerCards);
  playerCardsSum();
  dealerCardsSum();
  // console.log(dealerTotal);
  // console.log(playerTotal);
  // if (dealerTotal > playerTotal) {
  //   console.log("You lost");
  // } else {
  //   console.log("You won");
  // }
  console.log(playerTotal);
  console.log(dealerTotal);
  if (dealerTotal > 21) {
    result = "You won!";
  } else if (playerTotal > 21) {
    result = "You lost!";
  } else if (playerTotal > dealerTotal) {
    result = "You won!";
  } else {
    result = "You lost!";
  }
}
// compareCardsSum();

let playerCardImages = document.getElementById("playerCards");
let dealerCardImages = document.getElementById("dealerCards");
function displayCardImages() {
  // display card images for the player
  for (i = 0; i < playerCards.length; i++) {
    let playerCard = document.createElement("img");
    playerCard.src = "images/" + playerCards[i].image;
    playerCard.classList.add("animate");
    playerCardImages.appendChild(playerCard);
  }

  // display card images for the dealer
  for (i = 0; i < dealerCards.length; i++) {
    let dealerCard = document.createElement("img");
    if (i === dealerCards.length - 1) {
      hiddenCard = dealerCards[i].image;
      dealerCard.src = "images/back.png";
    } else {
      dealerCard.src = "images/" + dealerCards[i].image;
    }
    dealerCard.classList.add("animate");
    dealerCardImages.appendChild(dealerCard);
  }
}

// handle button events
let dealButton = document.getElementById("dealBtn");

// Handle Deal button click
function handleDealBtnClick() {
  playerCards = [];
  dealerCards = [];
  playerCardImages.innerHTML = "";
  dealerCardImages.innerHTML = "";
  resultArea.className = "";
  prepareDeck();
  shuffleCards();
  distributeCards();
  displayCardImages();
}
dealButton.addEventListener("click", handleDealBtnClick);

// Handle Hit Button click
let hitButton = document.getElementById("hitBtn");
function handleHitBtnClick() {
  playerCards.push(deck.shift());
  playerCardImages.innerHTML = "";
  dealerCardImages.innerHTML = "";
  handleDealerHit();
  displayCardImages();
}

hitButton.addEventListener("click", handleHitBtnClick);

//Handle Stay Button click
let stayButton = document.getElementById("stayBtn");
function handleStayBtnClick() {
  playerTotal = 0;
  dealerTotal = 0;
  compareCardsSum();
  showHiddenCard();
  resultArea.innerHTML = result;
  resultArea.classList.add("show");
  if (result == "You won!") {
    resultArea.classList.add("winner");
  } else {
    resultArea.classList.add("looser");
  }
  // document.getElementById("resultArea").classList.remove("hide");
}
stayButton.addEventListener("click", handleStayBtnClick);

function handleDealerHit() {
  dealerTotal = 0;
  dealerCardsSum();
  console.log(dealerCards);
  console.log(dealerTotal);
  if (dealerTotal < 17) {
    dealerCards.push(deck.shift());
  }
  // displayCardImages();
}

function showHiddenCard() {
  dealerCardImages.lastChild.src = "images/" + hiddenCard;
}
