let grandParent = document.querySelector(".grand_parent");
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
//capturing target bubbling by default bubbling
// grandParent.addEventListener(
//   "click",
//   () => {
//     alert("grand parent call");
//   },
//   true,
// );

// parent.addEventListener(
//   "click",
//   () => {
//     alert("parent call");
//   },
//   true,
// );

// child.addEventListener(
//   "click",
//   () => {
//     alert(" child call");
//   },
//   true,
// );

// grandParent.addEventListener("click", (e) => {
//   console.log(e.target);
//   console.log(e.currentTarget);
//   console.log(this);
// });

// parent.addEventListener("click", (e) => {
//   console.log(e.target);
//   console.log(e.currentTarget);
//   console.log(this);
// });

// child.addEventListener("click", (e) => {
//   console.log(e.target);
//   console.log(e.currentTarget);
//   console.log(this);
// });

//stop propagation

grandParent.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
});

parent.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
  //   e.stopPropagation();
  e.stopImmediatePropagation();
});

parent.addEventListener("click", (e) => {
  console.log("parent next");
});

child.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
  //   e.stopPropagation();
});
