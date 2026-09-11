/* =========================
   TYPING EFFECT
========================= */

const text = [
    "Computer Engineering Student",
    "Web Developer",
    "Java Programmer",
    "Tech Enthusiast"
];

let count = 0;
let index = 0;

function type() {

    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    const currentText = text[count];

    typingElement.textContent = currentText.slice(0, index + 1);

    index++;

    if (index === currentText.length) {

        count++;
        index = 0;

        if (count === text.length) {
            count = 0;
        }

        setTimeout(type, 1500);

    } else {

        setTimeout(type, 120);

    }
}

type();


/* =========================
   MOBILE NAVBAR
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    const menuIcon = menuToggle.querySelector("i");

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-xmark");
        } else {
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");

        });

    });
}


/* =========================
   SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 80) {
            section.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


/* =========================
   SCROLL PROGRESS
========================= */

const scrollProgress = document.getElementById("scroll-progress");

function updateScrollProgress() {

    if (!scrollProgress) return;

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercentage =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;

    scrollProgress.style.width = scrollPercentage + "%";

}

window.addEventListener("scroll", updateScrollProgress);

updateScrollProgress();


/* =========================
   BACK TO TOP
========================= */

const backToTop = document.getElementById("back-to-top");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}