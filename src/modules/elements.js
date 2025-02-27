
const sectionElements = document.querySelectorAll('section');
const lineElements = document.querySelectorAll('p');
const wordElements = document.querySelectorAll('span');

export const sectionsArray = Array.from(sectionElements);
export const linesArray = Array.from(lineElements);
export const wordsArray = Array.from(wordElements);

export const [sections] = [sectionsArray];
export const [lines] = [linesArray];
export const [words] = [wordsArray];
