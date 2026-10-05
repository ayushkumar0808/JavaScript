// ##### build some base/ object literal

// let obj = {
//   myName: "Ayush", //property
//   age: 24,
//   introduce: intro,
// };
// let obj1 = {
//   myName: "Atul", //property
//   age: 22,
//   introduce: intro,
// };
// let obj2 = {
//   myName: "piyush", //property
//   age: 14,
//   introduce: intro,
// };

// function intro() {
//   console.log(this);
//   console.log(`My name:${this.myName} age:${this.age}`); //method
// }
// obj.introduce();
// obj1.introduce();
// obj2.introduce();

// factory function

// function student(name, age) {
//   return {
//     myName: name,
//     age,
//     intro: function () {
//       console.log(`Name:${this.myName} age:${this.age}`);
//     },
//   };
// }
// let s1 = student("Piyush", 23);
// let s2 = student("Ayush", 24);
// let s3 = student("Atul", 26);

// s1.intro();
// s2.intro();
// s3.intro();

// funtion constrocter

// function student(name, age) {
//   //   console.log(this);
//   this.name = name;
//   this.age = age;
//   this.intro = function () {
//     console.log(`Name:${this.name} Age:${age}`);
//   };
//   return this;
// }
// let s1 = new student("Ayush", 24);
// let s2 = new student("piyush", 23);
// console.log(s1);
// console.log(s2);
// s1.intro();
// s2.intro();

// function student(name, age) {
//   this.name = name;
//   this.age = age;
// }

// student.prototype.intro = function () {
//   console.log(`Name:${this.name} Age:${this.age}`);
// };

// let s1 = new student("Ayush", 24);
// let s2 = new student("piyush", 23);
// console.log(s1);
// console.log(s2);
// s1.intro();
// s2.intro();
