let btn = document.querySelector(".btn");
let container = document.querySelector(".container");
//property method
// btn.onclick = () => {
//   console.log("single click");
// };
// btn.ondblclick = () => {
//   console.log("double click");
// };
// btn.onclick = () => {
//   console.log("property wala click");
// };

//listener method
// node.addEventListener("event", function () {}); syntax
// btn.addEventListener("click", () => {
//   console.log("single click");
// });
// btn.addEventListener("click", () => {
//   console.log("dusra single click");
// });

// // remove event
// function fn() {
//   console.log("helo");
// }
// btn.addEventListener("click", fn);
// btn.removeEventListener("click", fn);

// event Object
// btn.addEventListener("click", function (event) {
//   console.log(event);
// });

//Event Most used

// 1.Mouse Event

// btn.addEventListener("mousedown", () => {
//   console.log("mousedown");
// });
// btn.addEventListener("mouseup", () => {
//   console.log("mousedup");
// });
// container.addEventListener("mouseenter", () => {
//   console.log("mouseenter");
// });
// container.addEventListener("mouseleave", () => {
//   console.log("mouseleave");
// });
// btn.addEventListener("mouseover", () => {
//   console.log("mouseover");
// });
// btn.addEventListener("mouseout", () => {
//   console.log("mouseout");
// });
// container.addEventListener("mousemove", () => {
//   console.log("mousemove");
// });
// container.addEventListener("contextmenu", () => {
//   console.log("contextmenu");
// });
// btn.addEventListener("auxclick", () => {
//   console.log("auxclick");
// });

//2.Key event

// btn.addEventListener("keydown", () => {
//   console.log("keydown");
// });
// btn.addEventListener("keypress", () => {
//   console.log("keypress");
// });
// btn.addEventListener("keyup", () => {
//   console.log("keyup");
// });

//3.form event

let form = document.querySelector(".form");
let submitBtn = document.querySelector("#submit");
// form.addEventListener("submit", () => {
//   console.log("submit hogya");
// });
// submitBtn.addEventListener("submit", () => {
//   console.log("submit hogya");
// });❌
// form.addEventListener("reset", () => {
//   console.log("reset hogya");
// });
form.addEventListener("focus", () => {
  console.log("focus hogya");
});
// form.addEventListener("submit", () => {
//   console.log("submit hogya");
// });
// form.addEventListener("submit", () => {
//   console.log("submit hogya");
// });
// form.addEventListener("submit", () => {
//   console.log("submit hogya");
// });
