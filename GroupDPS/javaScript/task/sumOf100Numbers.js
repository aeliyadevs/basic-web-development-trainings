// Write a JavaScript function to calculate
// the sum of all the numbers less than 100.

function sum() {
  // 1 + 2 + 3 + 4 + 5 + .................... + 98 + 99 = ?
  let sumOfAll = 0;
  for (let i = 1; i < 100; i++) {
    sumOfAll = sumOfAll + i;
  }
  //   console.log(sumOfAll);
}
sum();

function sumOfEven() {
  // 2 + 4 + 6 + .................... + 96 + 98 = ?
  let sumEven = 0;
  for (let i = 2; i < 100; i += 2) {
    sumEven = sumEven + i;
  }
  return sumEven;
}
sumOfEven();

function sumOfOdd() {
  // 2 + 4 + 6 + .................... + 96 + 98 = ?
  let sumOdd = 0;
  for (let i = 1; i < 100; i += 2) {
    sumOdd = sumOdd + i;
  }
  return sumOdd;
}
sumOfOdd();

console.log(sumOfEven());
console.log(sumOfOdd());
console.log(sumOfEven() + sumOfOdd());
