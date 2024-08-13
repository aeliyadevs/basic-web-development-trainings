// Statement
let percentage = 25;

// Conditional Statement
// if
if (percentage > 40) {
  // things to execute when the condition is true
  console.log("Passed");
}

// if else
if (percentage > 40) {
  // things to execute when the condition is true
  console.log("Passed");
} else {
  console.log("Failed");
}

// if - else if - else
// Find the actual grade of the student based on the provided GPA score.
let GPA = 0.9;
if (GPA < 0) {
  console.log("Negative");
} else if (GPA > 4) {
  console.log("Out of range");
} else if (GPA <= 0.8) {
  console.log("NG");
} else if (GPA > 0.8 && GPA <= 1.6) {
  console.log("E");
}
