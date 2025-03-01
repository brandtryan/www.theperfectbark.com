
const movingTextElements = document.querySelectorAll('moving-text');
const lineElements = document.querySelectorAll('p');
const wordElements = document.querySelectorAll('span');

export const movingTextsArray = Array.from(movingTextElements);
export const linesArray = Array.from(lineElements);
export const wordsArray = Array.from(wordElements);

export const [movingTexts] = [movingTextsArray];
export const [lines] = [linesArray];
export const [words] = [wordsArray];
