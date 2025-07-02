import gsap from 'gsap';

const showNotification = () => {
  gsap.to('.toast', {
    y: -150,
    opacity: 1,
    duration: 1,
    scale: 1.1,
    // ease: 'power2.out',

    onComplete: () => {
      gsap.to(
        '.toast',
        {
          y: 0,
          opacity: 0,
          duration: 1,
          scale: 1,
          //   ease: 'bounce.out',
        },

        gsap.to('.one', {
          y: -200,
          opacity: 1,
          duration: 0.9,
          scale: 1.1,
          ease: 'power2.out',
        })
      );
    },
  });
};

showNotification();
