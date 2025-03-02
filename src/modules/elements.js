
const pageElements = document.querySelectorAll('moving-text');
const lineElements = document.querySelectorAll('p');
const wordElements = document.querySelectorAll('span');

const pagesArray = Array.from(pageElements);
const linesArray = Array.from(lineElements);
const wordsArray = Array.from(wordElements);

export const [pages] = [pagesArray];
export const [lines] = [linesArray];
export const [words] = [wordsArray];
