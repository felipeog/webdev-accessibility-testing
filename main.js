const mobileNavBtn = document.getElementById("mobile-nav-btn");
const mobileNav = document.getElementById("mobile-nav");

mobileNavBtn.addEventListener("click", function () {
  if (mobileNav.hasAttribute("class")) {
    mobileNav.removeAttribute("class");
  } else {
    mobileNav.setAttribute("class", "active");
  }
});
