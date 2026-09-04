/* =========================
   TYPING ANIMATION
========================= */

const texts = [
    "Software Developer",
    "Web Developer",
    "CSE (AI & ML) Student",
    "Problem Solver"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const typingText = document.getElementById("typing-text");

    if (!typingText) return;

    const currentText = texts[textIndex];

    if (deleting) {
        typingText.textContent = currentText.substring(0, charIndex);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex);
        charIndex++;
    }

    if (!deleting && charIndex === currentText.length + 1) {
        deleting = true;

        setTimeout(typeEffect, 1200);

        return;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


/* =========================
   START TYPING
========================= */

typeEffect();
/* =========================
   SCROLL PROGRESS
========================= */

window.addEventListener("scroll", function () {

    const scrollProgress = document.getElementById("scroll-progress");

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercentage =
        (scrollTop / documentHeight) * 100;

    scrollProgress.style.width = scrollPercentage + "%";
});
/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
/* =========================
   BACK TO TOP
========================= */

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}