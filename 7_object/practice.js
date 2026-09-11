//create a person with propreties name age city

let obj = {
  name: "Ayush",
  age: 25,
  city: "blr",
};
// for (let val in obj) {
//   console.log(`property is ${val} and value is ${obj[val]}`);
// }

obj.email = "example@gmail.com";
console.log(obj);

delete obj.age;
console.log(obj);
