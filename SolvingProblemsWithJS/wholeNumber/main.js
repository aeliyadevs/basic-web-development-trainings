// check if the given number
// is a whole number or not.

// example
// -6 is not a whole number
// 8 is a whole number
// 34.7 is not a whole number

let number = 0;

let myNum = document.getElementById("num");
myNum.addEventListener("change", setValue);

let myBtn = document.getElementById("btn");
myBtn.addEventListener("click", checkWholeNumber);

let resultArea = document.getElementById("result");

function setValue(e) {
  number = e.target.value;
}

function checkWholeNumber() {
  // console.log(number + " is a/not a whole number");

  if (number < 0) {
    resultArea.innerHTML = number + " (-ve) is not a whole number";
  } else {
    if ((number * 10) % 10 === 0) {
      resultArea.innerHTML = number + " is a whole number";
    } else {
      resultArea.innerHTML = number + " is not a whole number";
    }
  }
}
