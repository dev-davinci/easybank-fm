const hamburgerBtn = document.querySelector("#menu");
const header = document.querySelector(".header");
const fadeElements = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

hamburgerBtn.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    body.classList.remove("menu-scroll");
    header.classList.remove("open");
    fadeElements.forEach((el) => {
      el.classList.remove("fadeIn");
      el.classList.add("fadeOut");
    });
  } else {
    body.classList.add("menu-scroll");
    header.classList.add("open");

    fadeElements.forEach((el) => {
      el.classList.remove("fadeOut");
      el.classList.add("fadeIn");
    });
  }
});
