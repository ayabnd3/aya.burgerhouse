const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav__links");
const meanuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    meanuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")});


const ScrollRevealOptain = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};
 
ScrollReveal().reveal(".header__image img", {
    ...ScrollRevealOptain,
    origin: "right",
});

ScrollReveal().reveal(".header__content h2", {
    ...ScrollRevealOptain,
    delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
    ...ScrollRevealOptain,
    delay: 1000,
});

ScrollReveal().reveal(".order__card", {
    ...ScrollRevealOptain,
    Interval: 500,
});
