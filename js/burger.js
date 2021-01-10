const burger = document.querySelector(".menu-btn");
const nav = document.querySelector(".right-page-navigation");

let flag = false;

burger.addEventListener("click", () => {
  if (!flag) {
    nav.style.top = "0";
    burger.classList.remove("menu-btn");
    burger.classList.add("close-btn");

    flag = true;
  } else {
    nav.style.top = "-2000px";
    burger.classList.remove("close-btn");
    burger.classList.add("menu-btn");

    flag = false;
  }
});
