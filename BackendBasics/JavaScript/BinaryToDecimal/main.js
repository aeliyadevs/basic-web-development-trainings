// Comment in javaScript

// Code to convert Binary number
// to Decimal number system

let result;
let givenNum = "";
let binaryInput = document.getElementById("binaryNum");
let convertButton = document.getElementById("btn");
let resultArea = document.getElementById("result");

function setBinaryValue(event) {
  givenNum = event.target.value;
}

function calculateValue() {
  result = 0;
  for (let i = 0; i < givenNum.length; i++) {
    if (givenNum[i] > 1) {
      alert("Invalid number");
      resultArea.innerHTML = 0;
    } else {
      let temp = givenNum[i] * 2 ** (givenNum.length - 1 - i);
      result += temp;
      resultArea.innerHTML = result;
    }
  }
}

binaryInput.addEventListener("change", setBinaryValue);
convertButton.addEventListener("click", calculateValue);
