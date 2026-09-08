// function withNoReturn() {
//   console.log("HI Ayush");
// }

// withNoReturn();
// withNoReturn();

// function withReturn() {
//   return "ayush";
// }

// let a = withReturn();
// console.log(a);

// function withArgument(name) {
//   console.log(name);
// }

// withArgument("ayush");

function withArgumentWithReturn(name) {
  return name + " hi";
}
let str = withArgumentWithReturn("Ayush");
console.log(str);
