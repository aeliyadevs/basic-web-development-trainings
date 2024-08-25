// DOM - Document Object Model
// Browser memory - tree-like structure of elements

// DOM Manipulation
// let x = 5;
// let y = 39;
// document.getElementById("h1").innerHTML = x + y;
// document.getElementById("h1").style.color = "red";

// Event Handling - ex = click, change, mouseover

let x, y;

let firstInput = document.getElementById("num1");
let secondInput = document.getElementById("num2");
let addBtn = document.getElementById("add");
let resultArea = document.getElementById("result");

// function definitions
function setFirstNum(event) {
  // x => something
  x = parseInt(event.target.value);
  console.log(x);
}
function setSecondNum(event) {
  y = parseInt(event.target.value);
  console.log(y);
}

function add() {
  let sum = x + y;
  resultArea.innerHTML = sum;
}
// event handling
firstInput.addEventListener("change", setFirstNum);
secondInput.addEventListener("change", setSecondNum);

addBtn.addEventListener("click", add);
