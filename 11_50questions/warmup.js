//1.**** create a funtion that returns the last element of array

// let arr = [3, 5, 7, 8];

// functiongetLastElem(arr) {
//   console.log(arr[arr.length - 1]);

// }
// getLastElem(arr);

//2.**** find the combination of two array

// let arr1 = [44, 6, 4, 7, 8, 4];
// let arr2 = [5, 6, 36, 7, 57, 5];

// let combineArr = [...arr1, ...arr2];
// console.log(combineArr);

//3.**** generate a ramdonn integer between 0 to 18

// console.log(Math.floor(Math.random() * 19));s

//4.**** create a function that takes an array containig both numbers and strings and return a new array containing only string values

// let arr = [24, 5, 33, 5, "e", "t", 6, "b"];

// function returnStringArr(arr) {
//   let newArr = arr.filter((elem) => typeof elem === "string");

//   return newArr;
// }

// console.log(returnStringArr(arr));

// 5.**** find the max no of an array

// let arr = [3, 5, 2, 7, 4, 9, 8];

// arr.sort((a, b) => b - a);
// console.log(arr[0]);
// //or
// console.log(Math.max(...arr));

//6.**** wirte a function retun the length of the given object

// let obj = {
//   name: "Ayush",
//   age: 24,
//   city: "blr",
// };

// function returnKeyLength(obj) {
//   let len = Object.keys(obj).length;
//   return len;
// }

// console.log(returnKeyLength(obj));

//7.**** in an array of objects filter out those objects which have gender value is  male

// const users = [
//   { name: "Ayush", age: 22, gender: "Male" },
//   { name: "Priya", age: 21, gender: "Female" },
//   { name: "Rahul", age: 24, gender: "Male" },
//   { name: "Sneha", age: 23, gender: "Female" }
//   { name: "Arjun", age: 20, gender: "Male" },
//   { name: "Ananya", age: 22, gender: "Female" },
//   { name: "Rohit", age: 25, gender: "Male" },
//   { name: "Neha", age: 21, gender: "Female" },
//   { name: "Vikram", age: 23, gender: "Male" },
//   { name: "Kavya", age: 24, gender: "Female" },
// ];

// let maleusers = users.filter((obj) => obj.gender.toLowerCase() === "male");
// console.log(maleusers);

//8.**** given an array of strings return a new array where all strings are in uppercase

// let arr = ["Ayush", "Rahul", "Sunny", "Priya"];

// let newArr = arr.map((elm) => elm.toUpperCase());
// console.log(newArr);

//9.**** check if an objext is empty or not

// let obj = {};
// let isEmpty = Object.keys(obj).length === 0;

// if (isEmpty) {
//   console.log("object is empty");
// } else {
//   console.log("object is not empty");
// }

//10.**** create an array of no and double the ecah value using map()

// let arr = [4, 5, 6, 3, 6];

// let finalArr = arr.map((elem) => elem * 2);
// console.log(finalArr);

// 11.**** convert an array of strings into single comma-seprated string

// let arr = [3, 5, 6, 6, 44, 5];

// let newStr = arr.join(",");
// console.log(newStr, typeof newStr);

// 12.**** write a function to flatten a nested array

// let arr = [[4, [5, 6], 6], 4, 6, 4, [5, 5, 6]];

// let arrNew = arr.flat(2);
// console.log(arrNew);

//13.****

// 14.**** checka no is prime or not

// function isPrime(n) {
//   if (n == 0 || n == 1) return false;

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(1));

//15.**** create a function that remove all duplicate value from an array

// let arr = [3, 5, 7, 9, 8, 7, 6, 5, 3];

// arr.sort((a, b) => a - b);
// console.log(arr);
// let filterArr = arr.filter((elem, ind) => elem !== arr[ind + 1]);
// console.log(filterArr);
