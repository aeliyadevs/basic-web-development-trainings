// check if a given number
// is positive or negative

let number = 0;

let myNum = document.getElementById("num");
myNum.addEventListener("change", setValue);

let myBtn = document.getElementById("btn");
myBtn.addEventListener("click", checkPositiveNegative);

let resultArea = document.getElementById("result");

function setValue(e) {
  number = e.target.value;
}

function checkPositiveNegative() {
  if (number > 0) {
    resultArea.innerHTML = number + " is a positive number.";
  } else {
    resultArea.innerHTML = number + " is a negative number.";
  }
}
