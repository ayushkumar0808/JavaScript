//for an array with marks  of students find the avarage marks of the entire class .

// let marks = [90, 78, 65, 46, 89, 75];
// let sum = 0;
// let avg;
// marks.forEach((elem) => {
//   sum += elem;
// });
// avg = sum / marks.length;
// console.log(avg);

// let avg;
// let sum = marks.reduce((acc, curr) => {
//   return acc + curr;
// });
// avg = sum / marks.length;
// console.log(avg);

//create an array with given lenght(n) and fill with 0.

// let n = 10;
// let arr = new Array(n).fill(0);
// console.log(arr);

//create an array with given length and store the natural no 1 to n

// let n = 20;
// let arr = new Array(n).fill(0);
// let arr1 = arr.map((elem, index) => {
//   return index + 1;
// });
// console.log(arr1);

//question 4

// let arr = ["Ayush", "Abhishek", "Arkadeep", "Bimba", "Abhipsa"];
// arr.push("Spiderman");
// console.log(arr);
// arr.unshift("thor");
// console.log(arr);

// arr.splice(3, 1, "Kumar");
// console.log(arr);

// console.log(arr.includes("Ayush"));

//how to check given thing is array or not ? convert the other any strin to array ? what if we try to convert an  object to array

// let a = "Ayush";
// let a = {
//   name: "Ayush",
// };
// console.log(Array.isArray(a));
// console.log(Array.from(a));

//question 6

// let a = 2;
// let b = "rffer";
// let c = { name: "ayush" };
// let d = [4, 6, 7, 54, 4];
// console.log(Array.of(a, b, c, d));

//check the given string is  palindrome or not

// let str = "ollo";
// let test = Array.from(str).reverse().join("");
// console.log(test);
// if (str === test) {
//   console.log("it's a palindrome");
// } else {
//   console.log("Not a palindrome");
// }

//capitalized first  letter of every word in a sentance

// let str = "he is a boy and she is a girl";
// str = str.split(" ");
// str.forEach((elm, i) => {
//   str[i] = elm.charAt(0).toUpperCase() + elm.slice(1).toLowerCase();
// });
// console.log(str.join(" "));

//give repeat element

// let arr = [3, 4, 2, 6, 7, 9, 8, 3, 8];

// let resultArr = (arr) => {
//   arr.sort((a, b) => a - b);
//   console.log(arr);
//   let res = arr.filter((item, index) => item === arr[index + 1]);
//   return res;
// };

// console.log(resultArr(arr));

//count accrence

// let str = "My name is badshah sh ayush";
// let count = 0;
// for (let i in str) {
//   console.log(str[i], str[Number(i) + 1]);
//   if (str[i] === "s" && str[Number(i) + 1] === "h") count++;
// }
// console.log(count);

// console.log(str.includes("shb"));
// console.log(str.indexOf("sh"));

// let str = "Ayush";
// let str2 = "Kumar";

// let str3 = str && str2;
// console.log(str3);

//  [a] = [100, 200, 300];  //array destructing
// console.log(a);

// let a = 100;
// const b = ++a + a++;
// console.log(b);

// let arr = ["A", "F", "T", "B"].sort();
// console.log(arr);

arr = [, , ,];
console.log(arr, arr.length);
