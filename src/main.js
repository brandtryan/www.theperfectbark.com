import { wordsArray } from "./modules/elements.mjs";
import { lineWordCountsArray } from "./modules/lineWordCountsArray.mjs";
import { wordAnimations } from "./modules/wordAnimations.mjs";
import "./modules/createAndPlayAnimation.mjs";
import "./modules/lineAnimationsArrays.mjs";
import { s00Animations } from "./modules/setStartTimes.mjs";

document.addEventListener('DOMContentLoaded', () => {
  //HTML has loaded
  console.log('Main.js and the DOM are loaded');
});

[...wordsArray]
  .filter((_, index) => index % 2 === 0)
  .map(element => element.setAttribute('data-enable', 'false'));


// for (let i = 0; i < wordElements.length; i++) {
//   if (i % 2 === 0) {
//     wordElements[i].setAttribute('data-enable', 'false');
//   }
// }

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

