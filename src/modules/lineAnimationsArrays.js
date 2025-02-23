import { linesArray } from "./elements.js";
import { wordAnimations } from "./wordAnimations.js";

const lineElements = [...linesArray];

lineElements.forEach((line) => {
  let arrayName = `${line.id}Animations`;

  window[arrayName] = [];

  wordAnimations.forEach((wordAnimation) => {
    if (wordAnimation.id.includes(`${line.id}`)) {
      window[arrayName].push(wordAnimation);
    }
  })

  console.log(`Array ${arrayName} now contains ${window[arrayName].length} animations.`);
});
