import gsap from 'gsap';

const dock = document.querySelector('.dock');
const icons = document.querySelectorAll('.icon');
const trigger = document.querySelector('.dock-trigger');

let isDockVisible = false;
let isDockHovered = false;
let isTriggerHovered = false;
let isReadyForHover = false;

function showDock() {
  gsap.to(dock, {
    bottom: 40,
    duration: 0.4,
    ease: 'power3.out',
    onStart: () => {
      isReadyForHover = false;
    },
    onComplete: () => {
      isReadyForHover = true;
    },
  });

  gsap.to(icons, {
    scale: 1,
    opacity: 1,
    stagger: 0.05,
    duration: 0.3,
    ease: 'back.out(1.7)',
  });
}

function hideDock() {
  isDockVisible = false;
  isReadyForHover = false;

  gsap.to(dock, {
    bottom: -150,
    duration: 0.4,
    ease: 'power3.in',
  });

  gsap.to(icons, {
    scale: 0,
    opacity: 0,
    stagger: 0.03,
    duration: 0.2,
    ease: 'back.in(1.7)',
  });
}

trigger.addEventListener('mouseenter', () => {
  isTriggerHovered = true;
  if (!isDockVisible) {
    isDockVisible = true;
    showDock();
  }
});

trigger.addEventListener('mouseleave', () => {
  isTriggerHovered = false;
  setTimeout(() => {
    if (!isDockHovered) hideDock();
  }, 100);
});

dock.addEventListener('mouseenter', () => {
  isDockHovered = true;
});

dock.addEventListener('mouseleave', () => {
  isDockHovered = false;
  if (!isTriggerHovered) hideDock();
});

dock.addEventListener('mousemove', (e) => {
  if (!isDockVisible || !isDockHovered || !isReadyForHover) return;

  const rect = dock.getBoundingClientRect();
  const cursorX = e.clientX;

  icons.forEach((icon) => {
    const iconRect = icon.getBoundingClientRect();
    const iconCenter = iconRect.left + iconRect.width / 2;
    const distance = Math.abs(cursorX - iconCenter);
    const maxDistance = 120;

    const scale = Math.max(1, 1.7 - distance / maxDistance);

    gsap.to(icon, {
      scale,
      duration: 0.2,
      ease: 'power2.out',
    });
  });
});
