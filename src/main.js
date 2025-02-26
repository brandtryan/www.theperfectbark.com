import {
  words, movingTextElements, createAndPauseAnimation, iterateOverStartTime, sectionTimelines
} from './modules/parentModule.js';

document.addEventListener('DOMContentLoaded', () => {
  // HTML has loaded
  console.log('Main.js and the DOM are loaded');

  // Modify data-enable attribute on half of animations
  words
    .filter((_, index) => index % 2 === 0)
    .map(w => w.setAttribute('data-enable', 'false'));
});

// create word animations and push to wordAnimations array
const wordAnimations = words
  .filter(w => w.getAttribute('data-enable') === 'true')
  .map(w => createAndPauseAnimation(w));

// set startTimes (for sequence testing at the moment)
iterateOverStartTime(wordAnimations);
console.log("Animation startTimes set.");

console.log(movingTextElements[0]);

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

