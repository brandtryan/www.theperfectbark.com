import { wordsArray } from "./elements.js"
import { createAndPlayAnimation } from "./createAndPlayAnimation.js"

export let wordAnimations = [];

document.addEventListener('DOMContentLoaded', () => {
  // Create animations for all words
  wordAnimations = wordsArray
    .filter((word) => word.dataset.enable === 'true')
    .map((word) => {
      const wordAnimation = createAndPlayAnimation(word);
      return wordAnimation;
    });
  console.log(`All word animations created and loaded.`);
});
