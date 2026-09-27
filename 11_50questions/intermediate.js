// 16.**** what is the difference between parseInt and Number
// console.log(parseInt("44.4454"));
// console.log(Number("45356.356"));

// console.log(parseInt("44.4454px"));
// console.log(Number("45356.356px"));

// console.log(parseInt(101, 2));

// 17.*** why does 0.1+0.3 !== 0.3

// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);//floting point precision

// 19.*** how would you handle high precision decimal math in js
// let num1 = 0.1;
// let num2 = 0.2;

// let sum = num1 + num2;
// let fixedSum = sum.toFixed(2);
// console.log(Number(fixedSum) === 0.3);

// let decimal = require("decimal.js");
// let num1 = decimal(0.1);
// let num2 = decimal(0.2);
// let sum = num1.plus(num2);
// console.log(Number(sum) === 0.3);

// 20.*** what is the diffrence between slice and splice

// 21.**** reverse each word of string

// let str = "mai hu ayush";
// console.log(str.split("").reverse().join("").split(" ").reverse().join(" "));

// 22.**** in array of numbers and strings only add those numbers which are not string

let arr = [2, 3, , "7", 7, "5"];
let sum = 0;
arr.forEach((elem) => {
  if (typeof elem === "number") sum += elem;
});
console.log(sum);
