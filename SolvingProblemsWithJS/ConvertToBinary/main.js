// Convert the given decimal number into binary number (ex. 7 into 111).
let decimalNum;
let temporary;
let result = "";

let inputArea = document.getElementById("number");
let resultArea = document.getElementById("resultArea");
let btn = document.getElementById("btn");

function setValue(e) {
  decimalNum = e.target.value;
  temporary = e.target.value;
}

inputArea.addEventListener("change", setValue);

function convertToBinary() {
  //   temporary = Math.trunc(decimalNum / 2);
  //   result = decimalNum % 2;
  //   resultArea.innerHTML = "Quotient = " + temporary + " & Remainder = " + result;
  result = "";
  while (temporary > 0) {
    result = result + (temporary % 2);
    temporary = Math.trunc(temporary / 2);
  }
  resultArea.innerHTML = result.split("").reverse().join("");
}

btn.addEventListener("click", convertToBinary);
