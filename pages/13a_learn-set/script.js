import gsap from 'gsap';

gsap.set('.gsap-box', {
  opacity: 0,
  scale: 0.5,
  y: 100,
});

gsap.to('.gsap-box', {
  delay: 0.5,
  scale: 1.2,
  y: 0,
  duration: 0.7,
  opacity: 1,
  ease: 'power2.in',
});
