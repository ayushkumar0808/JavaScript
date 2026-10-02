// Programming Paradigm :- tarika h/ way h jiss tarike se aap programming karte ho

// let arr = [5,6,9,10,2];

// // yha pe hame pta hai ki ye kaise kam kar rha hai
// for(let i = 0; i<arr.length ; i++){
//     console.log(arr[i])
// }

// arr.map(element=>console.log(element))
// ye pata nahi h ki ye internally kaise kam karta hai... hame bas itna pta hai ki ye kya kam karta h

// pocedural - procedure / functions

// function consoleEnd() {
//     console.log("Program is end..!!")
// }

// function checkNumber(num) {
//     if (num === 0) consoleZero()
//     else if (num > 0) positive()
//     else negative();
// }

// function positive() {
//     console.log("number is positive")
//     consoleEnd();
// }

// function consoleZero() {
//     console.log("number is zero")
//     consoleEnd();
// }

// function negative() {
//     console.log("number is negative")
//     consoleEnd();
// }

// let num = 10;

// checkNumber(num);

// structured - sequence(if, else), iterate

// function checkNumber(num){
//     if(num === 0){
//         console.log("number is zero");
//     }else if (num > 0){
//         console.log("number is positive")
//     }else{
//         console.log("number is negative")
//     }

//     console.log("Program is end")
// }

// checkNumber(10)

// function programming********

// function sum(a, b){
//     return a+b;
// }

// let result = sum(1,5);
// console.log(result);

// let arr = [1, 2, 3, 4, 5];

// function doubleTheElements(arr) {
//     let result = arr.map((elem) => {
//         return elem * 2;
//     })

//     return result;
// }

// let newArr = doubleTheElements(arr);
// console.log(newArr)
// console.log(arr)

// Object oriented programming *************

// class Car{

//     age = 15;

//     constructor(name){
//         this.name = name;
//     }

//     start(){
//         console.log("staring the car...");
//     }

//     stop(){
//         console.log("stopping the car...");
//     }
// }

// let buggati = new Car('buggati',55 )

// buggati.start()
// buggati.stop()

// function consoleClick(){
//     console.log("i am clicked")
// }

// console.log("hello")
// console.log("hi")

setTimeout(() => {
  console.log("task1");
}, 5000);

setTimeout(function () {
  console.log("task2");
}, 3000);

setTimeout(() => {
  console.log("task3");
}, 4000);
