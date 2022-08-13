"use strict";

const openMenu = document.querySelector(".menu-open");
const closeMenu = document.querySelector(".menu-close");
const headerEl = document.querySelector(".header");
const btns = document.querySelectorAll(".btn");
const sliders = document.getElementById("slider");
const anisha = document.querySelector(".anisha");
const richard = document.querySelector(".richard");
const ali = document.querySelector(".ali");
const shanai = document.querySelector(".shanai");

openMenu.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});

console.log(btns[0]);
console.log(sliders);

btns[0].addEventListener("click", function () {
  ali.style.transform = "translateX(0px)";
  anisha.style.transform = "translateX(-600px)";
  richard.style.transform = "translateX(-1000px)";
  shanai.style.transform = "translateX(-1500px)";
  btns[0].classList.add("active");
  btns[2].classList.remove("active");
  btns[3].classList.remove("active");
  btns[1].classList.remove("active");

  sliders.style.backgroundColor = "red";
});

btns[1].addEventListener("click", function () {
  anisha.style.transform = "translateX(0px)";
  ali.style.transform = "translateX(-600px)";
  richard.style.transform = "translateX(-1000px)";
  shanai.style.transform = "translateX(-1500px)";
  btns[0].classList.remove("active");
  btns[2].classList.remove("active");
  btns[3].classList.remove("active");
  btns[1].classList.add("active");
  sliders.style.backgroundColor = "red";
});

btns[2].addEventListener("click", function () {
  richard.style.transform = "translateX(0px)";
  anisha.style.transform = "translateX(-600px)";
  ali.style.transform = "translateX(-1000px)";
  shanai.style.transform = "translateX(-1500px)";
  btns[0].classList.remove("active");
  btns[2].classList.add("active");
  btns[3].classList.remove("active");
  btns[1].classList.remove("active");
});

btns[3].addEventListener("click", function () {
  shanai.style.transform = "translateX(0px)";
  anisha.style.transform = "translateX(-600px)";
  ali.style.transform = "translateX(-1000px)";
  richard.style.transform = "translateX(-1500px)";
  btns[0].classList.remove("active");
  btns[2].classList.remove("active");
  btns[1].classList.remove("active");
  btns[3].classList.add("active");
});

const mainSect = document.querySelector(".main-section");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(mainSect);
