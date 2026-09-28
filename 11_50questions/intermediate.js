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

// let string = "Ayyush";
// let arr = ['a', 'y', 'u', 's', 'h']

// let test = arr.slice(-4, -2)
// console.log(test)
// console.log(arr, string)

// let test = arr.splice(-4, 0, 'z', 'y')
// console.log(test);
// console.log(arr);

/*

1st difference - slice apka string and array dono ke sath kam karta hai lekin splice apka sirf or sirf array ke sath kam karta hai

2nd difference - slice apka originial array, string me koi change nahi karta hai lekin splice apka original array me change kar deta hai

3rd difference - slice apka sirf tukda kat ke de rha hota hai lekin splice apka tukda bhi katt ke de skta hai sath hi add bhi kar skta h elements ko and sath hi delete bhi kar skta hai elements ko


*/

// 21.**** reverse each word of string

// let str = "mai hu ayush";
// console.log(str.split("").reverse().join("").split(" ").reverse().join(" "));

// 22.**** in array of numbers and strings only add those numbers which are not string

// let arr = [2, 3, , "7", 7, "5"];
// let sum = 0;
// arr.forEach((elem) => {
//   if (typeof elem === "number") sum += elem;
// });
// console.log(sum);

// 23.*** How would check a nummber is a interger

// let num = 234.345;

// console.log(Number.isInteger(num));
// console.log(num % 1 === 0);

// 24.*** write a javascript function that reverse a number

// function reverseNubmer(num) {
//   let revese = 0;
//   while (num > 0) {
//     let temp = parseInt(num % 10);
//     revese = revese * 10 + temp;
//     num = parseInt(num / 10);
//   }
//   return revese;
// }
// console.log(reverseNubmer(123));

//  25.*** write function that returns a passed string with latters in alpha oreder

// 26.**** write a fucntion that accepts a string as a parameter and coverts the first letter of ecah word in uppercase

// let str = "ayush kumar singh";

// function captalized(str) {
//   let arrNew = str.split(" ").map((elem) => {
//     return elem.charAt(0).toUpperCase() + elem.slice(1);
//   });

//   return arrNew.join(" ");
// }
// console.log(captalized(str));

// 27.**** wirte a function  to get the first element of an array. passing parameter n will return the first n elememt of the array

// let arr = [2, 3, 4, 5, 6, 8];
// function getFirstElement(arr, n) {
//   if (!n) return arr[0];
//   else if (n > arr.length) {
//     console.log("n is greter then arr length");
//   } else {
//     return arr.slice(0, n);
//   }
// }

// console.log(getFirstElement(arr, 2));

//28.**** wirte a function to get number of accurance of each latter in specified string

// let str = "ayusahsass";
// let str1 = "efhghoi eirjtite";

// function getOccurenceOfEachLetter(str) {
//   let obj = {};
//   for (let key of str) {
//     if (obj.hasOwnProperty(key)) {
//       obj[key]++;
//     } else {
//       obj[key] = 1;
//     }
//   }
//   return obj;
// }
// console.log(getOccurenceOfEachLetter(str));
// console.log(getOccurenceOfEachLetter(str1));

// 29. write a prigrame to fiond most frequent item in an array

// let arr = [3, 4, 5, 5, 5, 6, 6, 6, 3, 7];

// let obj = {};

// arr.forEach((key) => {
//   if (obj.hasOwnProperty(key)) {
//     obj[key]++;
//   } else {
//     obj[key] = 1;
//   }
// });
// let maxFerq = Math.max(...Object.values(obj));
// console.log("Most occurance elements:");
// for (let key in obj) {
//   if (obj[key] == maxFerq) {
//     console.log(`${key}, ${obj[key]}times`);
//   }
// }

// 30.**** write a programe to suffle the array

// let arr = [3, 4, 5, 6, 7];
// let temp;
// arr.forEach((elem, i) => {
//   let randomIndex = Math.floor(Math.random() * arr.length);
//   //   temp = elem;
//   //   arr[i] = arr[randomIndex];
//   //   arr[randomIndex] = temp;

//   // or destructre the array
//   [arr[randomIndex], arr[i]] = [arr[i], arr[randomIndex]];
// });

// console.log(arr);
