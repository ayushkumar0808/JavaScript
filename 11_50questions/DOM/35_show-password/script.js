let password = document.querySelector("#password");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
  btn.innerText = password.type === "password" ? "show" : "hide";
});
