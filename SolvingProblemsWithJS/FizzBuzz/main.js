let mylist = document.getElementById("list");

function addListItem(text) {
  let item = document.createElement("li");
  item.innerHTML = text;
  mylist.appendChild(item);
}

for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    addListItem("FizzBuzz");
  } else if (i % 3 === 0) {
    addListItem("Fizz");
  } else if (i % 5 === 0) {
    addListItem("Buzz");
  } else {
    addListItem(i);
  }

  //   if (i % 3 === 0) {
  //     if (i % 5 === 0) {
  //       console.log("FizzBuzz");
  //     } else {
  //       console.log("Fizz");
  //     }
  //   } else if (i % 5 === 0) {
  //     console.log("Buzz");
  //   } else {
  //     console.log(i);
  //   }
}
