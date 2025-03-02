import { words, createAndPauseAnimation } from "./parentModule";

// create word animations 
export const wordAnimations = words
  .map(w => createAndPauseAnimation(w));
