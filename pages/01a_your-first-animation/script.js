gsap.to('.card', {
  opacity: 1,
  scale: 1,
  duration: 5,
  onComplete: () => {
    gsap.to('.card', {
      y: -20,
      repeat: 4,
      duration: 0.5,
      onComplete: () => {
        gsap.to('.card', {
          scale: 2,
          x: 20,
          yolo: true,
          repeat: 2,
          duration: 1,
        });
      },
    });
  },
});
