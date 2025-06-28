import gsap from 'gsap';

gsap.to('.box', {
  opacity: 1,
  rotationY: 360,
  background: '#ff8f91',
  borderRadius: '50%',
  duration: 3,
  scale: 1.25,
  yoyo: true,
  repeat: 2,
  repeatDelay: 1,
  // ease: 'expo',
});
