const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelectorAll(".nav__items a");

const navItems = document.querySelectorAll(".nav__items");
const body = document.querySelector("body");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
//   hamburger.classList.toggle("toggle");
// });

// hide close button on larger screens

// const hideCloseBtn = () => {
//   if (window.innerWidth > 950) {
//     closeBtn.style.display = "none";
//     menuBtn.style.display = "none";
//     menu.style.display = "flex";
//   } else {
//     menuBtn.style.display = "inline-block";
//   }
// };

// window.addEventListener("resize", hideCloseBtn);

// show/hide nav menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// close nav menu

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

// Close Nav when link is clicked

navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", (e) => {
  //console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    //remove active class from other buttons
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    //hide other articles
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// Change background color of header as you scroll
const nav = document.getElementById("nav");

window.onscroll = () => {
  const top = window.scrollY;
  if (top > 50) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
};

// Change copyright date dynamically

const currentYear = new Date().getFullYear();
document.getElementById("copyright-year").textContent = currentYear;
