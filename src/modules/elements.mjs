
const sectionElements = document.getElementsByTagName('section');
const lineElements = document.getElementsByTagName('p');
const wordElements = document.getElementsByTagName('span');

const sectionsArray = Array.from(sectionElements);
const linesArray = Array.from(lineElements);
const wordsArray = Array.from(wordElements);

export const [sections] = [sectionsArray];
export const [lines] = [linesArray];
export const [words] = [wordsArray];
