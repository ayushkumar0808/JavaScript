const arr = ["Milk", "Paneer", "Bread", "Ghee", "Water"];
const unOrderList = document.querySelector("#listing");
const frag = document.createDocumentFragment();
for (food of arr) {
  const list = document.createElement("li");
  list.textContent = food;

  console.log(food);
  frag.append(list);
}
unOrderList.append(frag);
