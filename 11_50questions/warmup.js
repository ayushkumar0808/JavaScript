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
//   { name: "Sneha", age: 23, gender: "Female" },
//   { name: "Arjun", age: 20, gender: "Male" },
//   { name: "Ananya", age: 22, gender: "Female" },
//   { name: "Rohit", age: 25, gender: "Male" },
//   { name: "Neha", age: 21, gender: "Female" },
//   { name: "Vikram", age: 23, gender: "Male" },
//   { name: "Kavya", age: 24, gender: "Female" },
// ];

// let maleusers = users.filter((obj) => obj.gender.toLowerCase() === "male");
// console.log(maleusers);
