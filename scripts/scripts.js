const nav = document.querySelector(".nav");
const menu = document.querySelector(".header__menu");
const close = document.querySelector(".header__close-menu");

menu.addEventListener("click", () => {
  nav.classList.add("nav--visible");
  menu.classList.add("menu--hidden");
  close.classList.add("menu--visible");
});

close.addEventListener("click", () => {
  nav.classList.remove("nav--visible");
  menu.classList.remove("menu--hidden");
  close.classList.remove("menu--visible");
});
