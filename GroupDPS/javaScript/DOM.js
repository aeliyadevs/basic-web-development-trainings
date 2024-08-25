let num1, num2;
let firstNum = document.getElementById("firstNum");
let secondNum = document.getElementById("secondNum");
let addBtn = document.getElementById("addBtn");
let resultArea = document.getElementById("answer");

function setFirstNum(event) {
  num1 = parseInt(event.target.value);
}

function setSecondNum(event) {
  num2 = parseInt(event.target.value);
}

function addition() {
  let sum = num1 + num2;
  return sum;
}

function calculate() {
  resultArea.innerHTML = addition();
}
firstNum.addEventListener("change", setFirstNum);
secondNum.addEventListener("change", setSecondNum);
addBtn.addEventListener("click", calculate);
