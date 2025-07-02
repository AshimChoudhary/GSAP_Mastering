import gsap from 'gsap';

const buttons = document.querySelectorAll('[data-emoji]');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    gsap.fromTo(
      btn,
      {
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
      },
      {
        y: -50,
        scale: 1.5,
        opacity: 0,
        rotate: 360,
        duration: 0.8,
        ease: 'back.out(1.7)',
        onComplete: () => {
          gsap.set(btn, { clearProps: 'all' });
        },
      }
    );
  });
});
