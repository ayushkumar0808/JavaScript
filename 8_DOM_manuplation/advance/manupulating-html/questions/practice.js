// let div = document.querySelector("div");
// let p = document.createElement("p");
// p.innerText = "i m a boy";
// // p.style.backgroundColor = "red";
// // p.style.color = "green";
// p.setAttribute(
//   "style",
//   "background-color:red; color:green;border:2px solid black; ",
// );
// div.prepend(p);

// let btn = document.createElement("button");
// btn.innerText = "click me";

// p.prepend(btn);

//#challenge change tag

function convertTag(oldTag, tagName) {
  if (!(oldTag instanceof Element)) {
    console.error("innviald node");
    return null;
  }
  let newTag = document.createElement(tagName);
  //   console.log(oldTag.innerHTML);
  newTag.innerHTML = oldTag.innerHTML;
  //   console.log(newTag.innerHTML);
  //   console.log(oldTag.attributes);

  for (let attr of oldTag.attributes) {
    // console.log(attr.name, attr.value);
    newTag.setAttribute(attr.name, attr.value);
  }
  //   console.log(newTag.attributes);
  oldTag.replaceWith(newTag);
}

let oldTag = document.querySelector(".box");
convertTag(oldTag, "p");
