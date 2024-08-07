// Single line comment

/*
Multi-line comment
this is my
 multi-line
 comment 
 */

//  Variables
// let
let a = 5;
a = 50;
// const
const PI = 3.14;
// var
var b = 9;
b = 90;
console.log(a);
console.log(b);

// Datatypes
// string
let firstname = "Aeliya";
console.log(firstname);

// number
let age = 100;

// boolean
let off = true;

// null and undefined
let x;
let y = "";
console.log(x);
console.log(y);

// array - collection of similar data(datatypes)
var fruits = ["apple", "jackfruit", "banana", "mango"];
var subject = ["math", "science", "computer"];
var prime = [1, 3, 5, 7, 11, 13, 17];

// object
let book = {
  name: "Munamadan",
  author: "Laxmi Prasad Devkota",
  publishedYear: 2008,
};
console.log(book);
// Task - Student => Name, Class, Section, Roll No., Age

// Operators
let first = 5;
let second = 18;

// arithmetic operators
// addition = +
console.log(first + second);

// difference = -
console.log(first - second);

// multiplication(product) = *
console.log(first * second);

// division = /
console.log(second / first);

// modulo(mod) = %
console.log(second % first);

// Assignment operators
// equals to =
var radius = 4.5;
console.log(radius);

radius = radius + 5;
// +=
console.log((radius += 5));

// -=
console.log((radius -= 5));

// *=
console.log((radius *= 3));

// /=
console.log((radius /= 3));

// ++ increment operator
console.log(radius);
console.log(++radius);
console.log(radius++);
console.log(radius);

// -- decrement operator
console.log(radius);
console.log(--radius);
console.log(radius--);
console.log(radius);

// Comparison Operators

var sushma = "100";
console.log(sushma);
var khagendra = 100;
console.log(khagendra);

// equal to ==
console.log(sushma == 100);

// equal to ===
console.log(sushma === "100");

// not equal to != !==
console.log(sushma != 99);
console.log(sushma !== "100");

// greater than >
console.log(khagendra > 100);

// less than <
console.log(khagendra < 100);

// greater than or equal to >=
console.log(khagendra >= 100);

// less than or equal to <=
console.log(khagendra <= 100);

// Logical Operators
var minTest = "fail";
var minAtt = 100;
// AND - &&
console.log(minTest == "pass" && minAtt == 100);

// OR - ||
console.log(minTest == "pass" || minAtt == 100);

// NOT - !
console.log(!(minTest == "pass"));

// Min Devkota
// test pass -> true
// attendence 100% -> true
// if both true, give him certificate

// Calculate Simple Interest
// SI = PTR/100
let P = 120000;
let T = 3;
let R = 8;
let SI = (P * T * R) / 100;
// console.log(SI);
