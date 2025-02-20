import { createAndPlayAnimation } from "./modules/helpers/createAndPlayAnimation.mjs";
import { sections, lines, words } from "./modules/elements.mjs";
import { lineChildrenArrays } from "./modules/helpers/lineChildren.mjs";

document.addEventListener('DOMContentLoaded', () => {
  //HTML has loaded
  console.log('Main.js and the DOM are loaded');
});


// Create animations for all words
const wordAnimations = words.map((word, index) => {
  const wordAnimation = createAndPlayAnimation(word);
  return wordAnimation;
});
console.log(wordAnimations[0].id);
console.log(lineChildrenArrays[0]);

const s00l00Animations = [];

for (let wordAnimation of wordAnimations) {
  if (wordAnimation.id.includes('s00l00')) {
    s00l00Animations.push(wordAnimation);
  }
}
console.log(s00l00Animations);





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

