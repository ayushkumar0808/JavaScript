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
