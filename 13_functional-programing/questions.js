// 1. #### how do you use reduce() to calculate the total price in shoping cart

// let arr = [40, 54, 34, 55, 78, 68];

// let price = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log(price);

// 2. #### explain immutability and how you would update an object in an array without mutating the original

// let user = { name: "ayush ", age: 24 };

// function replaceName(user, name) {
//   let newUser = { ...user, name };
//   return newUser;
// }

// console.log(replaceName(user, "piyush"));

// 3. chaining

// let str = "ayush";

// let reverse = str.split("").reverse().join("");

// console.log(reverse);

// 4.. compose

// let add2 = (num) => num + 2;
// let multiply5 = (num) => num * 5;
// let sub10 = (num) => num - 10;

// let res = sub10(multiply5(add2(6)));
// console.log(res);

// 5.compose with utility fn

// let add2 = (num) => num + 2;
// let multiply5 = (num) => num * 5;
// let sub10 = (num) => num - 10;

// function compose(...fns) {
//   return function (val) {
//     return fns.reduceRight((val, currfn) => {
//       return currfn(val);
//     }, val);
//   };
// }

// let res = compose(sub10, multiply5, add2)(6);
// console.log(res);

// 6. pip

// let add2 = (num) => num + 2;
// let multiply5 = (num) => num * 5;
// let sub10 = (num) => num - 10;

// function pipe(...fns) {
//   return function (val) {
//     return fns.reduce((val, currfn) => {
//       return currfn(val);
//     }, val);
//   };
// }

// let res = pipe(sub10, multiply5, add2)(6);
// console.log(res);

// 7. #### how would you multiple funnction to tranform data step by step

// let str = "   ay u sh k u ma R";
// let trim = (str) => str.trim();
// let snatize = (str) => str.replaceAll(" ", "");
// let captalized = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

// // let result = captalized(snatize(trim(str)));

// function compose(...fns) {
//   return function (str) {
//     return fns.reduceRight((str, cuurfn) => {
//       return cuurfn(str);
//     }, str);
//   };
// }
// let result = compose(captalized, snatize, trim)(str);
// console.log(result);

// 8. how to create your own map

// let arr2 = [3, 4, 3, 5, 3];

// let ayushMap = function (fn) {
//   let arr1 = [];
//   for (let i = 0; i < this.length; i++) {
//     arr1.push(fn(this[i], i));
//   }
//   return arr1;
// };

// Array.prototype.ownMap = ayushMap;

// let a = arr2.ownMap((e, i) => {
//   return e * 2;
// });
// console.log(a);
