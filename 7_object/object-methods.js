let obj = {
  name: "Ayush",
  age: 24,
};

let keys = Object.keys(obj);
console.log(keys);

let values = Object.values(obj);
console.log(values);

let entities = Object.entries(obj);
console.log(entities.flat());

for (let ch in obj) {
  console.log(ch);
  console.log(obj[ch]);
}
