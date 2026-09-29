let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let nameError = document.querySelector(".nameError");
let emailError = document.querySelector(".emailError");
let passwordError = document.querySelector(".passwordError");

nameInput.addEventListener("input", (e) => {
  if (e.target.value.length < 3)
    nameError.innerText = "Error Name should be greater than 2  letters ";
  else nameError.innerText = "";
});
emailInput.addEventListener("input", (e) => {
  if (!e.target.value.includes("@") || !e.target.value.includes("."))
    emailError.innerText = "invalid email ";
  else emailError.innerText = "";
});
passwordInput.addEventListener("input", (e) => {
  if (e.target.value.length < 3)
    passwordError.innerText = "Error Invalid password ";
  else passwordError.innerText = "";
});
