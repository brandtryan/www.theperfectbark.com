import { words } from "./helpers/elements/elements.mjs";
import { createAndPlayAnimation } from "./helpers/animation/createAndPlayAnimation.mjs"



// Create animations for all words
export const wordAnimations = words
  .filter((word) => word.dataset.enable === 'true')
  .map((word) => {
    const wordAnimation = createAndPlayAnimation(word);
    return wordAnimation;
  });
