let div = document.querySelector("div");
//inline style

// div.style.backgroundColor = "red";
// div.style.color = "white";
// div.style.cssText = "background-color:red; color: green";
// div.setAttribute("style", "background-color:red; color: green");

//external style
// div.className = "redBg";
// div.className = "blueBg"; //remove fisrt one

// div.setAttribute("class", "redBg");
// div.setAttribute("class", "blueBg"); //remove fisrt

//classList

div.classList.add("redBg");
div.classList.add("blueBg");
