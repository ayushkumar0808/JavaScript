let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let nameValue = document.querySelector(".nameValue");
let emailValue = document.querySelector(".emailValue");

nameInput.addEventListener("input", () => {
  nameValue.innerText = nameInput.value;
});
emailInput.addEventListener("input", (e) => {
  emailValue.innerText = e.target.value;
});
