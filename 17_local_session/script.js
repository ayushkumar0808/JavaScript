// if ([] == false) {
//   console.log("Ayush");
// } else {
//   console.log("kumar");
// }

// if ({} == false) {
//   console.log("hi");
// } else {
//   console.log("wow");
// }

// let a = 10;
// if (function abs() {}) {
//   console.log(a + typeof abs);
// }

// function add(a) {
//   return function (b) {
//     if (b) {
//       return add(a + b);
//     }
//     return a;
//   };
// }
// let res = add(4)(4)(2)();
// console.log(res);

// let arr = [10, 30, 50, 30, 20, 5];
// const sencondSmallestNo = (arr) => {
//   arr.sort((a, b) => a - b);
//   console.log(arr[1]);
// };
// sencondSmallestNo(arr);

// let arr = [23, 44, 34, 35, 43];
// let arr2 = [43, 34, 54, 54];
// let newArr = [];

// for (let val of arr) {
//   for (let val1 of arr2) {
//     if (val === val1) newArr.push(val);
//   }
// }
// console.log(newArr);

// let newarr = arr.filter((val) => arr2.includes(val));
// console.log(newarr);

// mera tariksa------->

// function removeDuplicate(arr) {
//   let newArr = arr.filter((e, i) => {
//     return arr.indexOf(e) === i;
//   });
//   return newArr;
// }

// let arr3 = [...removeDuplicate(arr), ...removeDuplicate(arr2)];
// // let arr3 = [...new Set(arr), ...new Set(arr2)];

// const sencondSmallestNo = (arr) => {
//   arr.sort((a, b) => a - b);
//   // console.log(arr);
//   let newarr = arr.filter((e, i) => {
//     return e === arr[i + 1];
//   });
//   return newarr;
// };
// console.log(sencondSmallestNo(arr3));

// let arr = ["Ayush", "hsuy"];
// function isPresent(arr) {
//   for (let val of arr[1]) {
//     if (!arr[0].includes(val)) return false;
//   }
//   return true;
// }

// console.log(isPresent(arr));
