let obj = {
  name: "Ayush",
  city: "blr",
  age: 25,
};

// let name = obj.name;
// let age = obj.age;
// console.log(name, age);

let { name, age, city } = obj;
console.log(name, age, city);

let arr = [4, "tdchn", { name: "Ayush" }];
let [a, , obj1] = arr;
console.log(obj1);
console.log(a);
