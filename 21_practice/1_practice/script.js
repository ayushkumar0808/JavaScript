const arr = ["Milk", "Paneer", "Bread", "Ghee", "Water"];
const unOrderList = document.querySelector("#listing");
// const frag = document.createDocumentFragment();
let arrr = [];

for (food of arr) {
  const list = document.createElement("li");
  list.textContent = food;
  arrr.push(list);

  //   unOrderList.append(list);❌
  //   frag.append(list);
}
// unOrderList.append(frag);
unOrderList.append(...arrr);
