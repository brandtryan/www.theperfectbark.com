import { words, createAndPauseAnimation } from "./parentModule";

// create word animations and push to wordAnimations array
export const wordAnimations = words
  .map(w => createAndPauseAnimation(w));
