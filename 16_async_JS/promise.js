let p1 = new Promise((resolve, reject) => {
  resolve("hi");
  reject("hibro");
});

console.log(p1);
p1.then((data) => {
  console.log(data);
}).catch((err) => {
  console.error(err);
});
