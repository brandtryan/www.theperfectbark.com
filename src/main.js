import { lines, words } from './modules/parentModule'

document.addEventListener('DOMContentLoaded', () => {
  // HTML has loaded
  console.log('Main.js and the DOM are loaded');

  //Function to estimate reading time for a word - needs adjusted!!
  function estimateWordReadingTime(word) {
    const baseTime = 200;
    const lengthFactor = word.length * 10 //fudge factor for word length
    return baseTime + lengthFactor;
  }

  //Function to set start times for words in a line
  function adjustStartTimesForLine(line) {
    let startTime = 0;
    const lineWords = line.querySelectorAll('span');
    lineWords.forEach(word => {
      word.setAttribute('starttime', startTime);
      startTime += estimateWordReadingTime(word.textContent);
    });
  }

  //Adjust start times for all lines
  const lines = document.querySelectorAll('p');
  lines.forEach((line) => adjustStartTimesForLine(line));
});

window.executeFunction = (functionName, element) => {
  if (typeof window[functionName] === 'function') {
    window[functionName](element);
  } else {
    console.error(`Function ${functionName} not found.`);
  }
};
