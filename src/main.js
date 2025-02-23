// import "./modules/createAndPlayAnimation.js";
import { lineReadingTimesArray } from "./modules/lineReadingTimes.js";
import { words } from "./modules/elements.js";
// import { wordAnimations } from "./modules/wordAnimations.js";
import { createAndPauseAnimation } from "./modules/createAndPauseAnimation.js";
import { iterateOverStartTime } from "./modules/iterateOverStartTime.js";

// let wordAnimations;

document.addEventListener('DOMContentLoaded', () => {
  // HTML has loaded
  console.log('Main.js and the DOM are loaded');

  // Modify data-enable attribute on half of animations
  words
    .filter((_, index) => index % 2 === 0)
    .map(element => element.setAttribute('data-enable', 'false'));
  console.log(`[data-enable] attribute set to "false" on
    half of animated elements for testing purposes.`);

  const wordAnimations = words
    .filter(w => w.dataset.enable === 'true')
    .map(w => createAndPauseAnimation(w));
  console.log('All word animations created.');

  // set startTimes
  iterateOverStartTime(wordAnimations);
  console.log("Animation startTimes set.");

});


// Pause all word animations
// wordAnimations.forEach(animation => animation?.pause());


// Play all word animations
// wordAnimations.forEach(animation => animation?.play());


// // Create animations for all lines
// const lineAnimations = lines.map((line, index) => {
//   const lineAnimation = createAndPlayAnimation(line);
//   return lineAnimation;
// });

// Get a specific animation
// const firstLineAnimation = s00LineAnimations[0];

// // Pause all line animations
// lineAnimations.forEach(animation => animation?.pause());

// Play all animations
// lineAnimations.forEach(animation => animation?.play());


// // Create animations for all sections
// const sectionAnimations = sections.map((section, index) => {
//   const sectionAnimation = createAndPlayAnimation(section);
//   return sectionAnimation;
// });

// Get a specific section animation
// const firstSectionAnimation = sectionAnimations[0];

// // Pause all sectionanimations
// sectionAnimations.forEach(animation => animation?.pause());

// Play all section animations
// sectionAnimations.forEach(animation => animation?.play());

