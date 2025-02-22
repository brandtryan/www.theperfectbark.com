import { lines } from "./elements.mjs";

export const lineChildrenArrays = [];

for (let line of lines) {
  lineChildrenArrays.push(Array.from(line.children));
}
