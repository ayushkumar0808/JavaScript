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

// #### avoid shared state

// let total = 0;

// function addAmount(amount) {
//   total += amount;
// }
// addAmount(100);
// console.log(total);

// #### avoid side effect

// let str = "ayush";

// function captalized(str) {
//   let capitalized = str[0].toUpperCase() + str.slice(1);
//   console.log(capitalized);
// }
// captalized(str);

// #### reuse or compose logic

// let str = "Confused Ayush Kumar";
// let lowerCase = (str) => str.toLowerCase();
// let removeSpace = (str) => str.replaceAll(" ", "");
// let addAdtherit = (str) => "@" + str;

// function createUserName(str) {
//   return addAdtherit(removeSpace(lowerCase(str)));
// }
// let userName = createUserName(str);
// console.log(userName);

// #### dont iterate

// let arr = [2, 5, 6, 3, 5, 8, 7];
// let filterArr = [];

// for (let i = 0, j = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     filterArr[j] = arr[i];
//     j++;
//   }
// }
// console.log(filterArr);

// let filterArr = arr.filter((elem) => elem % 2 == 0);
// console.log(filterArr);

// #### tight coupling

// function getUser() {
//   fetch("www.http/exaple.com/user");
// }
// getUser();

// #### loose couping

// let endpoint = "www.http/example.com";

// function getUser(endpoint) {
//   fetch(`${endpoint}/user`);
// }
// getUser(endpoint);

// function getProduct(endoint) {
//   fetch(`${endoint}/product`);
// }
// getProduct(endpoint);

// or ###

// function getData(endpoint, router) {
//   fetch(`${endpoint}/${router}`);
// }
// getData(endpoint, "user");

// getData(endpoint, "product");

// or #####

// function fetchData(fn) {
//   let endpoint = "www.http/example.com";
//   fn(endpoint);
// }
// function getUser(endpoitn) {
//   fetch(`${endpoitn}/user`);
// }
// fetchData(getUser);

// function getProduct(endpoitn) {
//   fetch(`${endpoitn}/product`);
// }
// fetchData(getProduct);

// or ###

// let user = {
//   name: "Ayush Kumar",
//   email: "ayush@gamil.com",
//   phone: 242524545,
// };

// function sendEmail(user) {
//   console.log("send email to:" + user.email);
// }
// sendEmail(user);

// function sendSms(user) {
//   console.log("send sms to:" + user.phone);
// }
// sendSms(user);

// function sendMsg(user, msg) {
//   console.log(`${msg}:${user}`);
// }
// sendMsg(user.email, "send to email");
// sendMsg(user.phone, "send to sms");

// function sendEmail(user) {
//   console.log("send email to:" + user.email);
// }

// function sendSms(user) {
//   console.log("send sms to:" + user.phone);
// }

// function sendMsg(user, fn) {
//   console.log("hi");
//   fn(user);
// }
// sendMsg(user, sendEmail);
// sendMsg(user, sendSms);

//  #### first class fn , callback fn , high order fn

// function greetHello() {
//   return "Hello";
// }
// function greetNamaste() {
//   return "Namaste";
// }

// function greetWithName(name, fn) {
//   return fn() + " " + name;
// }
// let res = greetWithName("Ayush", greetNamaste);
// console.log(res);

// function callbackFn() {//callback fn
//   console.log("helo");
// }

// function HOF(fn) {//higher order fn
//   return fn;
// }

// let res = HOF(callbackFn);
// console.log(res);
// res();
