const navbar = document.getElementById("navbar");
const hamBtn = document.getElementById("hamBtn");
const navLinks = document.querySelectorAll(".nav__link");

hamBtn.addEventListener("click", () => {
  if (navbar.style.left === "0px") {
    navbar.style.left = "-100%";
  } else {
    navbar.style.left = "0px";
  }
})

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    navbar.style.left = "-100%";
  });
})