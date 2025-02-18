import { createAndPlayAnimation } from "./modules/helpers/createAndPlayAnimation.mjs";
import { sections, lines, words } from "./modules/elements.mjs";

document.addEventListener('DOMContentLoaded', () => {
  //HTML has loaded
  console.log('Main.js and the DOM are loaded');
});




// Create animations for all words
const wordAnimations = words.map((word, index) => {
  const wordAnimation = createAndPlayAnimation(word);
  // console.log(`Created animation for word ${index}:`, {
  //   enabled: word.dataset.enable,
  //   duration: word.dataset.duration,
  //   delay: word.dataset.delay,
  //   easing: word.dataset.easing
  // });
  return wordAnimation;
});

// Get a specific word animation
// const firstWordAnimation = s00WordAnimations[0];

// Pause all word animations
// wordAnimations.forEach(animation => animation?.pause());

// Play all word animations
// wordAnimations.forEach(animation => animation?.play());



// Create animations for all lines
const lineAnimations = lines.map((line, index) => {
  const lineAnimation = createAndPlayAnimation(line);
  // console.log(`Created animation for line ${index}:`, {
  //   enabled: line.dataset.enable,
  //   duration: line.dataset.duration,
  //   delay: line.dataset.delay,
  //   easing: line.dataset.easing,
  // });
  return lineAnimation;
});

// Get a specific animation
// const firstLineAnimation = s00LineAnimations[0];

// Pause all animations
// lineAnimations.forEach(animation => animation?.pause());

// Play all animations
// lineAnimations.forEach(animation => animation?.play());

