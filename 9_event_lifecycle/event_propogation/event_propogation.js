let grandParent = document.querySelector(".grand_parent");
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
//capturing target bubbling by default bubbling
grandParent.addEventListener(
  "click",
  () => {
    alert("grand parent call");
  },
  true,
);
grandParent.addEventListener("click", () => {
  alert("grand parent call");
});

parent.addEventListener(
  "click",
  () => {
    alert("parent call");
  },
  true,
);
parent.addEventListener("click", () => {
  alert("parent call");
});

child.addEventListener(
  "click",
  () => {
    alert(" child call");
  },
  true,
);
child.addEventListener("click", () => {
  alert(" child call");
});
