
const pageElements = document.querySelectorAll('main div');
const lineElements = document.querySelectorAll('p');
const wordElements = document.querySelectorAll('span');

export const pagesArray = Array.from(pageElements);
export const linesArray = Array.from(lineElements);
export const wordsArray = Array.from(wordElements);

export const [pages] = [pagesArray];
export const [lines] = [linesArray];
export const [words] = [wordsArray];
