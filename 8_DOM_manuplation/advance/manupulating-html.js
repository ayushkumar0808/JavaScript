let a = document.querySelector("div");

//1.get tag name (read only)

//.tagName
//.nodeName

// // console.log(a.tagName);
// console.log(a.nodeName);
// console.log(a.firstChild.nodeName);

// 2.text get&se

//innerText
//textContent

// a.innerText = "      Ayus  azjnaskjd   h";
// a.textContent = "hi ay        ush";
// console.log(a.innerText);
// console.log(a.textContent);

// 3.element/html get and set

// a.innerHTML = "<p>baki kya hal</p> ";
// console.log(a.innerHTML);

// console.log(a);

//#create  element:

let elem = document.createElement("p");
elem.innerText = "New para";

//#operations:

// a.append(elem);
// a.prepend(elem);
// a.before(elem);
// a.after(elem);
// a.insertAdjacentElement("afterbegin", elem);
// a.insertAdjacentElement("afterend", elem);
// a.insertAdjacentElement("beforebegin", elem);
// a.insertAdjacentElement("beforeend", elem);
// a.replaceChild(elem, a.children[1]);
// a.insertBefore(elem, a.children[2]);
// a.remove();
// a.removeChild(a.children[1]);

// let p = a.children[2];
// p.remove();

//acesses child to parent node

// let p = document.querySelector("#a");
// p.style.backgroundColor = "red";
// let parentNode = p.parentNode;

// console.log(parentNode);
// parentNode.append(elem);
