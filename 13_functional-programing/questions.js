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
