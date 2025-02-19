import { createAndPlayAnimation } from "./modules/helpers/createAndPlayAnimation.mjs";
import { playChildAnimations } from "./modules/helpers/playChildAnimations.mjs";
import { sections, lines, words } from "./modules/elements.mjs";

document.addEventListener('DOMContentLoaded', () => {
  //HTML has loaded
  console.log('Main.js and the DOM are loaded');
});

const lineChildAnimations = [];
const lineWordCounts = lines.map((line) => line.childElementCount);
console.log(lineWordCounts);



// Create animations for all words
const wordAnimations = words.map((word, index) => {
  const wordAnimation = createAndPlayAnimation(word);
  return wordAnimation;
});


// Pause all word animations
wordAnimations.forEach(animation => animation?.pause());

// Play all word animations
// wordAnimations.forEach(animation => animation?.play());


// Create animations for all lines
const lineAnimations = lines.map((line, index) => {
  const lineAnimation = createAndPlayAnimation(line);
  return lineAnimation;
});

// Get a specific animation
// const firstLineAnimation = s00LineAnimations[0];

// Pause all animations
lineAnimations.forEach(animation => animation?.pause());

// Play all animations
// lineAnimations.forEach(animation => animation?.play());


// Create animations for all sections
const sectionAnimations = sections.map((section, index) => {
  const sectionAnimation = createAndPlayAnimation(section);
  return sectionAnimation;
});

// Get a specific section animation
// const firstSectionAnimation = sectionAnimations[0];

// Pause all sectionanimations
sectionAnimations.forEach(animation => animation?.pause());

// Play all section animations
// sectionAnimations.forEach(animation => animation?.play());



for (let line of lines) {
  // let lineChildAnimationsArray = Array.from(line.children).flatMap((child) => child.getAnimations());
  // lineChildAnimationsArray.forEach((lineChildAnimation) => lineChildAnimation.pause());
  // lineChildAnimationsArray.map((item) => lineChildAnimations.push(item));
  playChildAnimations(line);
}

console.log(lineChildAnimations);
