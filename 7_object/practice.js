//create a person with propreties name age city

// let obj = {
//   name: "Ayush",
//   age: 25,
//   city: "blr",
// };
// for (let val in obj) {
//   console.log(`property is ${val} and value is ${obj[val]}`);
// }

// obj.email = "example@gmail.com";
// console.log(obj);

// delete obj.age;
// console.log(obj);

//create function takes an object with firstname middile name and lastname and return fullname

// let obj = {
//   firstName: "Ayush",
//   middleName: "na",
//   lastName: "Kumar",
// };

// const createFullname = (obj) => {
//   return `${obj.firstName} ${obj.middleName} ${obj.lastName}`;
// };

// let fullName = createFullname(obj);
// console.log(fullName);

//write a function that takes a object  and return the number of properties in an object

// let obj = {
//   name: "Ayush",
//   age: 25,
//   city: "blr",
// };

// let entries = Object.entries(obj);

// const createLengthOfObj = (arr) => {
//   return arr.length;
// };

// let length = createLengthOfObj(entries);
// console.log(length);

//write a function that returns an array of names of users who have the role admin.

// const user = [
//   { name: "abc", role: "admin" },
//   { name: "bcd", role: "user" },
//   { name: "efg", role: "admin" },
// ];

// let resultArr = (user, role) => {
//   let arr = user.filter((item) => {
//     return item.role === role;
//   });

//   let resultArr = arr.map((item) => {
//     return item.name;
//   });
//   return resultArr;
// };

// console.log(resultArr(user, "admin"));

//write a function searchProduct that returns an array of products whose name givn in keywords

// let products = [
//   { id: 1, name: "samsung glexy" },
//   { id: 2, name: "poco" },
//   { id: 3, name: "mi" },
// ];

// const searchProduct = (products, searchItem) => {
//   let fillterArr = products.filter((item) => {
//     return item.name.toLowerCase().includes(searchItem.toLowerCase());
//   });
//   return fillterArr;
// };

// const filterArr = searchProduct(products, "Samsung");
// console.log(filterArr);

//write a function groupby(text) that return an grpuping comments by id

// const comments = [
//   { id: 1, text: "Great post" },
//   { id: 2, text: "Thanks" },
//   { id: 1, text: "Very helpful" },
//   { id: 2, text: "Very helpful" },
//   { id: 3, text: "Very helpful" },
//   { id: 1, text: "Very helpful" },
// ];

// function groupComments(comments) {
//   const obj = {};
//   comments.forEach((item) => {
//     let { id, text } = item;
//     if (obj.hasOwnProperty(id)) {
//       obj[id].push(text);
//     } else {
//       obj[id] = [text];
//     }
//   });
//   return obj;
// }

// console.log(groupComments(comments));

//write a function buildQuery(params) that returns
