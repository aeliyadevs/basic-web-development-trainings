let myNumber = 0;

// if (myNumber % 2 === 0) {
//   console.log(myNumber + " is even");
// } else {
//   console.log(myNumber + " is odd");
// }

let inputArea = document.getElementById("num");
let checkBtn = document.getElementById("btn");
let resultArea = document.getElementById("result");

function checkOddEven(event) {
  myNumber = event.target.value;
  console.log(myNumber);
}
function oddOrEven() {
  if (myNumber % 2 === 0) {
    // console.log(myNumber + " is even");
    resultArea.innerHTML = myNumber + " is even";
  } else {
    // console.log(myNumber + " is odd");
    resultArea.innerHTML = myNumber + " is odd";
  }
}
inputArea.addEventListener("change", checkOddEven);
checkBtn.addEventListener("click", oddOrEven);
