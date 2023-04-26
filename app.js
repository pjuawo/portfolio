const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav__items");

const navSlide = () => {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s linear forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    hamburger.classList.toggle("toggle");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      navLinks.forEach((link) => {
        link.style.animation = "";
      });
      hamburger.classList.remove("toggle");
    });
  });
};

navSlide();

// Change background color of header as you scroll
const navBar = document.getElementById("nav");

window.onscroll = () => {
  const top = window.scrollY;
  if (top > 50) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
};

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

// Change copyright date dynamically

const currentYear = new Date().getFullYear();
document.getElementById("copyright-year").textContent = currentYear;
