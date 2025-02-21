import { createAndPlayAnimation } from "./modules/helpers/createAndPlayAnimation.mjs";
import { sections, lines, words, lineElements } from "./modules/elements.mjs";
import { lineReadingTimes } from "./modules/helpers/lineReadingTimes.mjs"

const pElements = [...lines];

document.addEventListener('DOMContentLoaded', () => {
  //HTML has loaded
  console.log('Main.js and the DOM are loaded');
});

// Create animations for all words
const wordAnimations = words.map((word) => {
  const wordAnimation = createAndPlayAnimation(word);
  return wordAnimation;
});

pElements.forEach((line) => {
  let arrayName = `${line.id}Animations`;

  window[arrayName] = [];

  wordAnimations.forEach((wordAnimation) => {
    if (wordAnimation.id.includes(`${line.id}`)) {
      window[arrayName].push(wordAnimation);
    }
  })

  // console.log(`Array ${arrayName} now contains ${window[arrayName].length} animations.`);
});
console.log(lineReadingTimes);



// Pause all word animations
wordAnimations.forEach(animation => animation?.pause());

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

