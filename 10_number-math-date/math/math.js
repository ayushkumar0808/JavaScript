// let n = 42.5254;
// console.log(Math.round(n));
// console.log(Math.floor(n));
// console.log(Math.ceil(n));
// console.log(Math.abs(-9));
// console.log(Math.sqrt(9));
// console.log(Math.pow(3, 2));
// console.log(Math.min(45, 3445, 54, 35, 25));
// console.log(Math.random());

//write a function that gives random no between 2 no

// console.log(Math.floor(Math.random() * (1 + 1)) + 1);
function generateRandomValues(min, max) {
  let rVal = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(rVal);
}
generateRandomValues(1, 10);
