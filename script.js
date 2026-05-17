// script.js

// ANIMAÇÃO AO SCROLL

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }

  });

});

const hiddenElements = document.querySelectorAll(
  '.dino-card, .element-card, .timeline-item, .team-card'
);

hiddenElements.forEach((el) => observer.observe(el));


// EFEITO PARALLAX NO HERO

window.addEventListener('mousemove', (e) => {

  const heroImage = document.querySelector('.hero-image');

  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;

  heroImage.style.transform =
    `translate(${x}px, ${y}px)`;

});


// TROCA DE COR DOS ELEMENTOS

const body = document.body;

document.querySelector('.fire').addEventListener('mouseenter', () => {
  body.style.background = '#1b0b0b';
});

document.querySelector('.water').addEventListener('mouseenter', () => {
  body.style.background = '#061a24';
});

document.querySelector('.thunder').addEventListener('mouseenter', () => {
  body.style.background = '#241f08';
});

document.querySelector('.wind').addEventListener('mouseenter', () => {
  body.style.background = '#130824';
});

document.querySelectorAll('.element-card').forEach((card) => {

  card.addEventListener('mouseleave', () => {

    body.style.background = '#070b1a';

  });

});