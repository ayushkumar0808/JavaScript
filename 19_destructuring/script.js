// let person = {
//   name: "Ayush",
//   age: 24,
//   isMarried: false,
//   add: { city: "blr", pincode: 34342 },
// };

// let name = person.name;
// let age = person.age;
// let isMarried = person.isMarried;
// destucturing------>
// let {
//   name,
//   age,
//   isMarried,
//   add: { pincode },
// } = person;
// console.log(name, age, isMarried, pincode);

// let arr = [2, 44, 3, 5, 5, 6, 3];

// let [a, b, c] = arr;
// console.log(a, b, c);

// swaping concept
// let a = 4;
// let b = 5;

// [b, a] = [a, b];
// console.log(a, b);

// basic destructure

// let [a, b, c, d] = [1, 2, 33, 5, 6];
// console.log(a, b, c, d);

// destucture with rest

// let [a, b, c, ...rest] = [1, 2, 33, 5, 6];
// console.log(a, b, c);
// console.log(rest);

// default value

// let [a, b, c, d = 0] = [1, 2, 3];
// console.log(a, b, c, d);

// skip array items

// let [a, , , d] = [1, 2, 3, 4];
// console.log(a, d);

// swaping with destructue

// let a = 4;
// let b = 5;

// [a, b] = [b, a];
// console.log(a, b);

//nested destructuring

// let [a, b, c, [x, y]] = [1, 2, 3, [3, 4]];
// // let [x, y] = d;
// console.log(x, y);

//  destructuring with objects

// basic destructure

// let obj = {
//   name: "Ayush",
//   age: 21,
//   isMarried: false,
// };

// let { name, age, isMarried } = obj;

// console.log(name, age, isMarried);

// desturcture with rest operator

// let obj = { name: "Ayush", age: 24, city: "blr" };

// let { name, ...rest } = obj;
// console.log(name, rest);

//default values

// let obj = {
//   name: "Ayush",
//   age: 21,
//   isMarried: false,
// };

// let { name, age, isMarried, city = "blr" } = obj;

// console.log(city);

// rename

// let person = {
//   name: "Ayush",
//   age: 24,
//   isMarried: false,
// };
// let { name: userName, age: userAge } = person;
// console.log(userAge, userName);

// nested destructure

// let person = {
//   name: "Ayush",
//   age: 24,
//   isMarried: false,
//   add: { city: "blr", pincode: 34342, arr: [1, 2, 3] },
// };

// let {
//   name,
//   age,
//   add: {
//     city,
//     pincode,
//     arr: [x, y, z],
//   },
// } = person;
// // let { city, pincode } = newadd;
// // console.log(newadd);
// console.log(city, pincode, x, y, z);
