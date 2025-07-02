import gsap from 'gsap';

const showToastLoop = () => {
  gsap.to('.toast', {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 0.7,
    ease: 'power4.out',
    onComplete: () => {
      gsap.to('.toast', {
        y: 0,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,

        onComplete: () => {
          setTimeout(showToastLoop, 2000);
        },
      });
    },
  });
};

showToastLoop();
