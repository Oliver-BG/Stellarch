'use strict';

const btnToTop = document.querySelector(".btn-to-top");
const btnProject = document.getElementById("li-projects");
const dropDownProject = document.querySelector(".li-projects-dropdown");
const headerMain = document.querySelector(".header-main");
const headerLogo = document.querySelector(".header-logo");
const headerTag = document.querySelector(".header-tag");
const headerTitle = document.querySelector(".header-title");
const menuList = document.querySelector(".menu-list");
const burgerMenu = document.querySelector(".burger-menu");
const burgerList = document.querySelector(".burger-list");

setTimeout(function(){
    headerMain.style.opacity = '1';
    headerLogo.style.left = '0';
    headerTitle.style.left = '0';
    headerTag.style.left = '0';
    menuList.style.top = '0';
}, 1);


window.onscroll = function () {
  scrollTop();
};

const scrollTop = function () {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    btnToTop.style.display = "block";
  } else {
    btnToTop.style.display = "none";
  }
};

burgerList.classList.add("burger-switch");

btnToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 100,
    behavior: "smooth",
  });
});

btnProject.addEventListener("click", () => {
  dropDownProject.classList.toggle("opacity-switch");
});

dropDownProject.addEventListener("mouseleave", () => {
  dropDownProject.classList.add("opacity-switch");
});

burgerMenu.addEventListener("click",() => {
    burgerList.classList.toggle("burger-switch");
});

dropDownProject.classList.add("opacity-switch");