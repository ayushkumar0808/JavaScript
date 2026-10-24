// Q1----->
// let arr = [1, 2, 3, 5];
// let obj = { ...arr };
// console.log(obj);

// Q2--------->
// let obj = {
//   name: "Ayush",
//   age: 24,
// };
// let copyObj = { ...obj };
// copyObj.city = "blr";

// console.log(obj, copyObj);

// Q3------->

// function separate(...rest) {
//   let even = rest.filter((val) => val % 2 === 0);
//   let odd = rest.filter((val) => val % 2 !== 0);
//   return { even, odd };
// }
// let { even, odd } = separate(2, 3, 4, 5, 6, 7, 8, 9, 1);
// console.log(even, odd);

// function useState(i) {
//   let value = i;

//   function setVal(val) {
//     value = val;
//   }
//   function getVal() {
//     return value;
//   }

//   return [getVal, setVal];
// }
// let [count, setCount] = useState(0);

// console.log(count());
// setCount(5);
// console.log(count());
