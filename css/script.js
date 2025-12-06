// Typing Effect
const typing = document.querySelector(".typing");
const words = ["Frontend Developer", "UI/UX Designer", "Freelancer"];
let wordIndex = 0;
let letterIndex = 0;

function type() {
  if (letterIndex < words[wordIndex].length) {
    typing.textContent += words[wordIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}
function erase() {
  if (letterIndex > 0) {
    typing.textContent = words[wordIndex].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(erase, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  }
}
document.addEventListener("DOMContentLoaded", type);

// Scroll Reveal
function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);

// Fade-Up Animation for All Cards
const allCards = document.querySelectorAll(
  ".service-card, .project-card, .blog-card, .contact-card"
);
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  allCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
});



js
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});


