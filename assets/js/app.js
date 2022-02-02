//Nav hamburger selection
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// scroll to top functionality
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});