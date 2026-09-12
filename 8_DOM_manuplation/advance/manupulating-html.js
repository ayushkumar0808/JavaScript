//get tag name (read only)
//.tagName
//.nodeName

let a = document.querySelector("div");
// console.log(a.tagName);
// console.log(a.nodeName);
// console.log(a.firstChild.nodeName);

// text get&se
//innerText
//textContent

// a.innerText = "      Ayus  azjnaskjd   h";
// a.textContent = "hi ay        ush";
// console.log(a.innerText);
// console.log(a.textContent);

//element/html get and set
// a.innerHTML = "<p>baki kya hal</p> ";
// console.log(a.innerHTML);

// console.log(a);

let elem = document.createElement("p");
elem.innerText = "New para";
a.append(elem);
// a.prepend(elem);
// a.before(elem);
// a.after(elem);
// a.insertAdjacentElement("afterbegin", elem);
// a.insertAdjacentElement("afterend", elem);
// a.insertAdjacentElement("beforebegin", elem);
// a.insertAdjacentElement("beforeend", elem);

// a.remove();

let p = a.children[2];
p.remove();
