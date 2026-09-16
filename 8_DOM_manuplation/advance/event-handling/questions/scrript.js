let btnDec = document.querySelector("#btnDec");
let btnInc = document.querySelector("#btnInc");
let currentValue = document.querySelector("#currentValue");
let val = 0;
btnDec.addEventListener("click", () => {
  if (val <= 0) {
    return;
  }
  val = val - 1;
  currentValue.innerText = val;
});
btnInc.addEventListener("click", () => {
  val = val + 1;
  currentValue.innerText = val;
});
