// Statement
let percentage = 25;

// Conditional Statement
// if
if (percentage > 40) {
  // things to execute when the condition is true
  console.log("Passed");
}

// if else
// if (percentage > 40) {
//   // things to execute when the condition is true
//   console.log("Passed");
// } else {
//   console.log("Failed");
// }

// if - else if - else
// Find the actual grade of the student based on the provided GPA score.
let GPA = 0;

if (GPA < 0) {
  console.log("Negative value");
} else if (GPA > 4) {
  console.log("Out of range");
} else if (GPA <= 4 && GPA > 3.6) {
  console.log("A+");
} else if (GPA <= 3.6 && GPA > 3.2) {
  console.log("A");
} else if (GPA <= 3.2 && GPA > 2.8) {
  console.log("B+");
} else if (GPA <= 2.8 && GPA > 2.4) {
  console.log("B");
} else if (GPA <= 2.4 && GPA > 2) {
  console.log("C+");
} else if (GPA <= 2 && GPA > 1.6) {
  console.log("C");
} else if (GPA <= 1.6 && GPA > 0.8) {
  console.log("D");
} else if (GPA <= 0.8 && GPA > 0) {
  console.log("E");
} else {
  console.log("Not Graded");
}

// Switch Statement
let day = "";

// syntax
switch (day) {
  case "sunday":
    console.log("Mathematics");
    break;
  case "monday":
    console.log("Science");
    break;
  case "tuesday":
    console.log("English");
    break;
  case "wednesday":
    console.log("Nepali");
    break;
  case "thursday":
    console.log("Environment");
    break;
  case "friday":
    console.log("Computer Science");
    break;
  case "saturday":
    console.log("holiday");
    break;
  default:
    console.log("Wrong value");
}
