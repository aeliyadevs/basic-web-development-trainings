// Task 3
// Use for loop together with if else
// to log to the console "X is odd"
// if the number is odd and "X is even"
// if the number is even
// where X is any number between 1 to 50.

for (let x = 1; x <= 50; x++) {
  if (x % 2 === 0) {
    console.log(x + " is even");
  } else {
    console.log(x + " is odd");
  }
}
