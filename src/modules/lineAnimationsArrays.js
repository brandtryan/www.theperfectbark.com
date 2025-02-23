import { lines as lineElements } from "../elements/elements.mjs";
import { wordAnimations } from "../../wordAnimations.mjs";

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
