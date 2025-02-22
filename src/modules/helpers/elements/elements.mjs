
const sectionElements = document.getElementsByTagName('section');
const lineElements = document.getElementsByTagName('p');
const wordElements = document.getElementsByTagName('span');

export const sectionsArray = Array.from(sectionElements);
export const linesArray = Array.from(lineElements);
export const wordsArray = Array.from(wordElements);

export const [sections] = [sectionsArray];
export const [lines] = [linesArray];
export const [words] = [wordsArray];
