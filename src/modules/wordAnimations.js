import { words } from "./elements.mjs"
import { createAndPlayAnimation } from "./createAndPlayAnimation.mjs"

export let wordAnimations;

document.addEventListener('DOMContentLoaded', () => {
  // Create animations for all words
  wordAnimations = words
    .filter((word) => word.dataset.enable === 'true')
    .map((word) => {
      const wordAnimation = createAndPlayAnimation(word);
      return wordAnimation;
    });
  console.log(`All word animations created and loaded.
    Sample: ${s00l00Animations}`);

});

