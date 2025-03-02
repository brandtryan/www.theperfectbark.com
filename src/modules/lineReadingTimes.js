import { lines } from "./parentModule";
import { lineWordCountsArray } from "./parentModule";

export const lineReadingTimesArray = lines.map((index) => {
  const time = lineWordCountsArray[index] / 225 * 60;
  return Math.round(time * 100) / 100 * 1000;
})
