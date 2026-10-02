// ###imparative programing

// let arr = [2, 3, 4, 5, 6];
// let doubleArr = [];
// for (let i = 0; i < arr.length; i++) {
//   doubleArr[i] = arr[i] * 2;
// }
// console.log(doubleArr);

// ###declarative progaming

// let arr = [1, 2, 3, 4, 5];
// let doubleArr = arr.map((elem) => elem * 2);
// console.log(doubleArr);

// #### pure function

// function add(a, b) {
//   let sum = a + b;
//   return sum;
// }
// let sum = add(5, 2);
// console.log(sum);

// ### impure function

// function add(a, b) {
//   console.log(a + b);//side effect
// }
// add(5, 3);

// let val = 0;

// function increament() {
//   val++;
// }
// // increament();// shared state
// console.log(increament());

//  ### immutability

// let str = "Ayush";
// str[0] = "C";

// console.log(str[0]);
// console.log(str);

// let arr = [2, 3, 5, 6, 4];

// arr[0] = 4;
// console.log(arr);

// let obj = {
//   name: "Ayush",
//   age: 24,
// };

// function replaceName(name) {
//   let newObj = { ...obj, name };
//   console.log(newObj);
// }
// replaceName("Piyush");
// console.log(obj);

// let arr = ["alo", "gobhi", "muli"];

// function removeLastItem(arr) {
//   //   let newArr = [...arr];
//   //   newArr.pop();

//   let newArr = arr.slice(0, -1);
//   return newArr;
// }
// console.log(arr);
// console.log(removeLastItem(arr));
