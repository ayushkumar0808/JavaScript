let div = document.querySelector("nav");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 100) {
    div.classList.add("stickey");
  } else {
    div.classList.remove("stickey");
  }
});
