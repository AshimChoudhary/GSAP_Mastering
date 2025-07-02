import gsap from 'gsap';

const card = document.querySelector('#card');

gsap.from(card, {
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out',
});

card.addEventListener('mouseenter', () => {
  gsap.from(card, {
    scale: 0.95,
    duration: 0.3,
    ease: 'power1.out',
  });

  gsap.to(card, {
    rotateY: 180,
    duration: 0.6,
    ease: 'power2.out',
  });
});

card.addEventListener('mouseleave', () => {
  gsap.from(card, {
    scale: 1.05,
    duration: 0.3,
    ease: 'power1.out',
  });

  gsap.to(card, {
    rotateY: 0,
    duration: 0.6,
    ease: 'power2.out',
  });
});
