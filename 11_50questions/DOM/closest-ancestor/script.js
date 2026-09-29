let child = document.querySelector("#child");

child.addEventListener("click", (e) => {
  console.log(e.target.closest(".parent"));
});
