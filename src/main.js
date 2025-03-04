import { wordAnimations } from "./modules/wordAnimations";

document.addEventListener('DOMContentLoaded', () => {
  // HTML has loaded
  console.log('Main.js and the DOM are loaded');
});

window.executeFunction = (functionName, element) => {
  if (typeof window[functionName] === 'function') {
    window[functionName](element);
  } else {
    console.error(`Function ${functionName} not found.`);
  }
};
