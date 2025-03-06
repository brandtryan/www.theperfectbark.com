
const sectionElements = document.querySelectorAll('section');
const lineElements = document.querySelectorAll('p');
const wordElements = document.querySelectorAll('span');

const sectionsArray = Array.from(sectionElements);
const linesArray = Array.from(lineElements);
const wordsArray = Array.from(wordElements);

export const [sections] = [sectionsArray];
export const [lines] = [linesArray];
export const [words] = [wordsArray];
