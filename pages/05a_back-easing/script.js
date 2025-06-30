import gsap from 'gsap';

const tabs = document.querySelectorAll('.tabs');
const indicator = document.querySelectorAll('.indicator');
const tabRow = document.querySelectorAll('.tab-row');

const updateIndicator = (target) => {
  const tabBunds = target.getBoundingClientRect();
  const rowBounds = tabRow.getBoundingClientRect();

  const width = tabBunds.width;
  const offset = tabBunds.left - rowBounds.left;

  gsap.to('.indicato', {});
};
