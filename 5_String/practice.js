//create a program to take full name from user and generate a username start with @

// let str = prompt("Enter your full name");
// str = "@" + str.replaceAll(" ", "") + "_" + str.length;

// alert(str);

//take a string and a character
// check how many times character appears

// let str = "ayushayaca";
// let count = 0;
// for (ch of str) {
//   if (ch === "a") count++;
// }
// console.log(count);

//case insensitive

let str = prompt("Enter the string");
let ch = prompt("Enter the charachter");
let count = 0;
for (let val of str) {
  if (val.toLowerCase() === ch.toLowerCase()) count++;
}
alert(count);
console.log(count);
