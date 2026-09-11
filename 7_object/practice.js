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

let obj = {
  firstName: "Ayush",
  middleName: "na",
  lastName: "Kumar",
};

const createFullname = (obj) => {
  return `${obj.firstName} ${obj.middleName} ${obj.lastName}`;
};

let fullName = createFullname(obj);
console.log(fullName);
