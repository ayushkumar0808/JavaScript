// callback hamesa ek function hota hai
// callback wo function hota hai jisko ham as a argument pass kar rhe hote hai
// hod (higher order function) waisa function hota joki apne andar ek function(yani ki callback) le rha hota hai.

// example 1:
// function hod(name, callback) {
//     callback(name);
// }

// function printName(name) {
//     console.log("hello ", name);
// }

// hod("Manas Kumar Lal", printName)

// example 2:
// function calculate(a, b, callback) {
//     callback(a, b);
// }

// function sum(a, b) {
//     console.log(a + b);
// }

// function subtract(a, b) {
//     console.log(a - b);
// }

// function multiply(a, b) {
//     console.log(a * b);
// }

// calculate(5, 3, sum);
// calculate(5, 3, subtract);
// calculate(5, 3, multiply);

// example 3: (async)
// console.log("1. fetching data...")

// function fetchData(processData) {
//     setTimeout(() => {
//         console.log("2. data fetch ho chuka hai")
//         processData();
//     }, 3000);
// }

// function processData() {
//     console.log("3. processing with data...")
// }

// fetchData(processData)

// console.log("4. some other tasks......")

// example 4: (async);
// function getData(data, callback) {
//     setTimeout(() => {
//         console.log(data)
//         if (callback) {
//             callback();
//         }
//     }, 3000);
// }

// console.log("fetching first data...")

// getData('1st data', () => {
//     console.log("fetching 2nd data...")
//     getData('2nd data', () => {
//         console.log("fetching 3rd data...")
//         getData('3rd data', () => {
//             console.log("fetching 4rth data...")
//             getData('4rth data')
//         })
//     });
// });

// example5:(async)

// console.log("getting data")
// setTimeout(() => {
//     console.log("getting users from database...")
//     setTimeout(() => {
//         console.log("getting products from database...")
//         setTimeout(() => {
//             console.log("final data")
//         }, 3000);
//     }, 3000);
// }, 3000);

// Real World Scenario of Callback
// Note:- Never try to understand 🙂, if you want to live long

// function getUsers(callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             const users = JSON.parse(xhr.responseText);
//             callback(null, users);
//         } else {
//             callback(`Error: ${xhr.status}`);
//         }
//     };

//     xhr.onerror = function () {
//         callback('Network error');
//     };

//     xhr.send();
// }

// function showData(err, data) {
//     if (err) {
//         console.log("Failed:", err);
//     } else {
//         console.log("Success:", data);
//     }
// }

// // Using the function
// getUsers(showData);
