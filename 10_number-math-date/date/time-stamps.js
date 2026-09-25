// let date = Date.now();
// let date1 = new Date().getTime();
// console.log(date, date1);
// let date2 = new Date(1790356936704);
// console.log(date2);

let currentTime = Date.now();
console.log(currentTime);

let tenMin = 1000 * 60 * 10;

let updatedTime = currentTime + tenMin;
console.log(updatedTime);

let date = new Date(updatedTime);
console.log(date.toLocaleString());
