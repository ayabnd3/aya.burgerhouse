const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav__links");
const meanuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    meanuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")});

    

    const bannerCards = document.querySelectorAll('.banner__card');

    bannerCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.09)';
        this.style.transition = '0.3s';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});



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
ScrollReveal().reveal(".event__content", {
   duration:2000,
});

// تكبير صورة الفعاليات عند التمرير
const eventImg = document.querySelector('.event__image img');

if (eventImg) {
    eventImg.addEventListener('mouseenter', () => {
        eventImg.style.transform = 'scale(0.9)';
        eventImg.style.transition = 'transform 0.3s ease';
    });
    
    eventImg.addEventListener('mouseleave', () => {
        eventImg.style.transform = 'scale(1)';
    });
}


const formInputs = document.querySelectorAll('.reservation input');
formInputs.forEach(input => {
    input.onfocus = () => input.style.borderColor = '#ffc135';
    input.onblur = () => input.style.borderColor = '';
});

// 2. تكبير الزر عند التمرير
const reserveBtn = document.querySelector('.reservation .btn');
if (reserveBtn) {
    reserveBtn.onmouseover = () => reserveBtn.style.transform = 'scale(0.7)';
    reserveBtn.onmouseout = () => reserveBtn.style.transform = 'scale(0.9)';
}


