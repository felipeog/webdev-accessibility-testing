const mobileNavBtn = document.getElementById("mobile-nav-btn");
const mobileNav = document.getElementById("mobile-nav");

mobileNavBtn.addEventListener("click", () => {
  if (mobileNav.hasAttribute("class")) {
    mobileNav.removeAttribute("class");
  } else {
    mobileNav.setAttribute("class", "active");
  }
});

const inputElements = document.querySelectorAll("input");

inputElements.forEach((element) => {
  element.value = "";
});

const formGroupElements = document.querySelectorAll(".form-group input");

formGroupElements.forEach((element) => {
  element.addEventListener("blur", (event) => {
    if (!event.target.value) {
      event.target.classList.remove("has-value");
    } else {
      event.target.classList.add("has-value");
    }
  });
});
