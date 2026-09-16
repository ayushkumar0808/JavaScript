// let btnDec = document.querySelector("#btnDec");
// let btnInc = document.querySelector("#btnInc");
// let currentValue = document.querySelector("#currentValue");
// let val = 0;
// btnDec.addEventListener("click", () => {
//   if (val <= 0) {
//     return;
//   }
//   val = val - 1;
//   currentValue.innerText = val;
// });
// btnInc.addEventListener("click", () => {
//   val = val + 1;
//   currentValue.innerText = val;
// });

///question 2

let form = document.querySelector("form");
let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");
let submitBtn = document.querySelector("#submit");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputName.value || !inputEmail.value) {
    console.error("Fill the both field");
    alert("Fill the both field");
    return;
  }
  let div = document.createElement("div");
  div.innerHTML = `<p>Name: ${inputName.value}</p>
<span>Email: ${inputEmail.value}</span>
`;
  document.querySelector("body").append(div);

  console.log(inputName.value, inputEmail.value);
});
