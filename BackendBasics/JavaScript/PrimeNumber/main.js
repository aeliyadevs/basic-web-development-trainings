// Check if the given number is a prime number

// definition: a number who is perfectly divisible by 1 or itself only. Eg. 3, 5, 7, 11, 13, 17, 7713663493, 7713663527, 1324567897654247

// 12 - [1, 2, 3, 4, 6, 12]
// 15 - [1, 3, 5, 15]
// 13 - [1, 13]
// 7 - [1, 7]

let number;
let isPrime = true;

let inputArea = document.getElementById("num");

let resultArea = document.getElementById("result");

function setValue(event) {
  number = event.target.value;
}

inputArea.addEventListener("change", setValue);

let checkBtn = document.getElementById("btn");

function checkValue() {
  isPrime = true;
  if (number < 2) {
    resultArea.innerHTML = number + " is invalid";
  } else if (number === 2) {
    isPrime = true;
  } else if (number % 2 === 0) {
    isPrime = false;
  } else {
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    resultArea.innerHTML = number + " is a prime number";
  } else {
    resultArea.innerHTML = number + " is not a prime number";
  }
}

checkBtn.addEventListener("click", checkValue);
