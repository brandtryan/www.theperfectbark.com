import { lines } from "../elements/elements.js";
import { lineWordCounts } from "../elements/lineWordCounts.js";

export const lineReadingTimesArray = lines.map((index) => {
  const time = lineWordCounts[index] / 225 * 60;
  return Math.round(time * 100) / 100 * 1000;
})
