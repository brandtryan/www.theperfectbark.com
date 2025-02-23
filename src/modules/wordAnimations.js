import { words } from "./elements.js";
import { createAndPlayAnimation } from "./createAndPlayAnimation.js"
import { iterateOverStartTime } from "./iterateOverStartTime.js";

// export let wordAnimations; // Declare and export at top level
export const wordAnimations = []; // Declare and export at top level

// document.addEventListener('DOMContentLoaded', () => {

// Assign to the exported variable
words
  .filter((word) => word.dataset.enable === 'true')
  .map((word) => {
    const wordAnimation = createAndPlayAnimation(word);
    wordAnimations.push(wordAnimation);
  });
console.log(`All word animations created and loaded.`);

// set startTimes
iterateOverStartTime(wordAnimations);

console.log(`StartTimes set.`);
// });
