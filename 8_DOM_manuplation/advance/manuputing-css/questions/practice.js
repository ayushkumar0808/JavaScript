let btn = document.querySelector("button");
let body = document.querySelector("body");

// let theme = "light";
// btn.addEventListener("click", () => {
//   if (theme === "light") {
//     body.style.backgroundColor = "black";
//     body.style.color = "white";
//     theme = "dark";
//   } else {
//     body.style.backgroundColor = "white";
//     body.style.color = "black";
//     theme = "light";
//   }
// });

// btn.addEventListener("click", () => {
//   if (body.className === "dark") {
//     body.className = "light";
//   } else {
//     body.className = "dark";
//   }
// });

btn.addEventListener("click", () => {
  body.classList.toggle("dark");
});
