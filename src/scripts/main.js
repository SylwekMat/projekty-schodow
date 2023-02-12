const navToggleButton = document.querySelector(".mobile-nav-toggle");
const navbarLinks = document.querySelector(".header-container nav ul");

navToggleButton.addEventListener("click", (e) => {
  navbarLinks.style.display =
    navbarLinks.style.display === "block" ? "none" : "block";
});
