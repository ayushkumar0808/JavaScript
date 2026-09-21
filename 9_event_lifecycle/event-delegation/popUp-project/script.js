let btn = document.querySelector(".btn");
let container = document.querySelector(".container");
// let close = document.querySelector(".close");

btn.addEventListener("click", () => {
  container.style.display = "flex";
});

// close.addEventListener("click", () => {
//   container.style.display = "none";
// });

container.addEventListener("click", (e) => {
  if (e.target.className === "container") {
    container.style.display = "none";
  }
});
