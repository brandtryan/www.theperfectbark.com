// let fvss = "";

// let fvar = [
//   { "tag": "wght", "minValue": 200, "defaultValue": 200, "maxValue": 900, "name": { "en": "wght" } },
//   { "tag": "wdth", "minValue": 60, "defaultValue": 60, "maxValue": 140, "name": { "en": "wdth" } },
//   { "tag": "ital", "minValue": 0, "defaultValue": 0, "maxValue": 12, "name": { "en": "ital" } },
//   { "tag": "cont", "minValue": 0, "defaultValue": 100, "maxValue": 100, "name": { "en": "cont" } }
// ]
let ln = [];
let animations = [];
let isPlaying = true;
const DURATION = 1000;
let scrub = document.getElementById("scrub");

// Create array of words per line from strings
const wordArray0 = `My teachers look at me funny when I make weird noises,`.split(/(\s+)/);
const wordArray1 = `but my friends, they usually just laugh. It's funny to them,`.split(/(\s+)/);
const wordArray2 = `and they are pretty cool about it – they don't make fun of`.split(/(\s+)/);
const wordArray3 = `me really, but only get a kick out of it – like when we are in`.split(/(\s+)/);
const wordArray4 = `the middle of a test or something and then out of nowhere`.split(/(\s+)/);
const wordArray5 = `I let out a bark – I mean a loud bark – where everyone turns`.split(/(\s+)/);
const wordArray6 = `around to me and smiles, and then someone starts laughing`.split(/(\s+)/);
const wordArray7 = `and then everyone else gets going. To tell you the truth it`.split(/(\s+)/);
const wordArray8 = `doesn't bother me at all and I laugh right along with them`.split(/(\s+)/);
const wordArray9 = `most of the time.`.split(/(\s+)/);

// Create a container element to hold the LINE divs and attach to body
const masterContainer = document.createElement('div');
masterContainer.className = "master-container";
document.body.appendChild(masterContainer);

// Create LINE divs and append to master container
for (let i = 0; i < 11; i++) {
  // Create a div element for each line
  const div = document.createElement('div');
  // Give each new LINE div a unique id
  div.id = "ln" + [i];
  // Give each new LINE div the line-container class
  div.className = "line-container";
  // Append the LINE divs to the master container
  masterContainer.appendChild(div);
  // Create variables for each line
  ln[i] = document.getElementById("ln" + i);
};

// Create WORD divs(with text content) and append to line-container for Line 0
for (let i = 0; i < wordArray0.length; i++) {
  // Create a div element for each element in Line 2
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln0w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray0[i];
  // Append the div to the container
  ln0.appendChild(div);
};
// Create WORD divs(with text content) and append to line-container for Line 1
for (let i = 0; i < wordArray1.length; i++) {
  // Create a div element in the array
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln1w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray1[i];
  // Append the div to the container
  ln1.appendChild(div);
};
// Create WORD divs(with text content) and append to line-container for Line 2
for (let i = 0; i < wordArray2.length; i++) {
  // Create a div element for each element in Line 2
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln2w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray2[i];
  // Append the div to the container
  ln2.appendChild(div);
};
// Create WORD divs(with text content) and append to line-container for Line 3
for (let i = 0; i < wordArray3.length; i++) {
  // Create a div element for each element in Line 2
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln3w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray3[i];
  // Append the div to the container
  ln3.appendChild(div);
};
// Create WORD divs(with text content) and append to line-container for Line 4
for (let i = 0; i < wordArray4.length; i++) {
  // Create a div element for each element in Line 2
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln4w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray4[i];
  // Append the div to the container
  ln4.appendChild(div);
};
// Create WORD divs(with text content) and append to line-container for Line 5
for (let i = 0; i < wordArray5.length; i++) {
  // Create a div element for each element in Line 2
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln5w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray5[i];
  // Append the div to the container
  ln5.appendChild(div);
};
// Create WORD divs(with text content) and append to line-container for Line 6
for (let i = 0; i < wordArray6.length; i++) {
  // Create a div element for each element in Line 2
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln6w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray6[i];
  // Append the div to the container
  ln6.appendChild(div);
};
// Create WORD divs(with text content) and append to line-container for Line 7
for (let i = 0; i < wordArray7.length; i++) {
  // Create a div element for each element in Line 2
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln7w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray7[i];
  // Append the div to the container
  ln7.appendChild(div);
};
// Create WORD divs(with text content) and append to line-container for Line 8
for (let i = 0; i < wordArray8.length; i++) {
  // Create a div element for each element in Line 2
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln8w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray8[i];
  // Append the div to the container
  ln8.appendChild(div);
};
// Create WORD divs(with text content) and append to line-container for Line 9
for (let i = 0; i < wordArray9.length; i++) {
  // Create a div element for each element in Line 2
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln9w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray9[i];
  // Append the div to the container
  ln9.appendChild(div);
};

// Set duration of line animations based on average reading time
const lineDuration0 = lineReadingTime(wordArray0);
const lineDuration1 = lineReadingTime(wordArray1);
const lineDuration2 = lineReadingTime(wordArray2);
const lineDuration3 = lineReadingTime(wordArray3);
const lineDuration4 = lineReadingTime(wordArray4);
const lineDuration5 = lineReadingTime(wordArray5);
const lineDuration6 = lineReadingTime(wordArray6);
const lineDuration7 = lineReadingTime(wordArray7);
const lineDuration8 = lineReadingTime(wordArray8);
const lineDuration9 = lineReadingTime(wordArray9);

// ANIMATIONS
const vanishFrames = [
  { opacity: 1 },
  { opacity: 0, transform: `translate(0, -5vh)` },
];

const vanishTiming = {
  id: "vanish",
  delay: 0,
  direction: "normal",
  duration: 1000,
  endDelay: 0,
  fill: "forwards",
  easing: "cubic-bezier(0.45, 0, 0.55, 1)",
  iterationStart: 0.0,
  iterations: 1,
  composite: "replace",
  iterationComposite: "replace",
};

const breathFrames = [
  { fontVariationSettings: `"wght" 295, "wdth" 100, "ital" 0, "cont" 0` },
  { fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 12, "cont" 100` },
  { fontVariationSettings: `"wght" 295, "wdth" 100, "ital" 0, "cont" 0` },
];

const breathTiming0 = {
  id: "breath",
  delay: 0,
  direction: "normal",
  duration: DURATION,
  endDelay: DURATION,
  fill: "none",
  easing: "cubic-bezier(0.45, 0, 0.55, 1)",
  iterationStart: 0.0,
  iterations: "1",
  composite: "replace",
  iterationComposite: "replace"
}

const breathTiming1 = {
  id: "breath",
  delay: DURATION / 1.5,
  direction: "normal",
  duration: DURATION,
  endDelay: DURATION - (DURATION / 1.5),
  fill: "none",
  easing: "cubic-bezier(0.45, 0, 0.55, 1)",
  iterationStart: 0.0,
  iterations: "1",
  composite: "replace",
  iterationComposite: "replace"
}

// Create LINE 0 WORD animations and store the Animation objects in an array
animations = [
  ln0w10.animate(breathFrames, breathTiming0),
  ln0w18.animate(breathFrames, breathTiming1),
];

// Also start moving the "scrubber" control
adjustScrubber();

// Stop moving the "scrubber" when the animations finish
animations[0].onfinish = function () {
  isPlaying = false;
  console.log('finished');
}

// When the input range ("scrubber") is adjusted, pause the animations and change the `currentTime` property
scrub.addEventListener('input', e => {
  //console.log('input', e.currentTarget.value);
  var time = e.currentTarget.value;
  animations.forEach(animation => {
    animation.currentTime = time;
  });
  pauseAll();
});

// When the user finalizes the value for input range ("scrubber")... such as by letting go with the pointer, start playing the animations again. Unless the range is at the end (so the animation should finish). This set up does not work well with Right/Left arrows because of how often it fires the "change" event compared to with a mouse/touch. Plan to investigate a better approach to support keyboard and other inputs.

scrub.addEventListener('change', e => {
  console.log('change', e.currentTarget.value);
  if (animations[0].currentTime >= e.currentTarget.getAttribute('max')) {
    finishAll();
    return false;
  }
  requestAnimationFrame(adjustScrubber);
  playAll();
});

function adjustScrubber() {
  if (isPlaying) {
    scrub.value = animations[0].currentTime;
    requestAnimationFrame(adjustScrubber);
  }
}

function pauseAll() {
  isPlaying = false;
  animations.forEach(animation => {
    animation.pause();
  });
}
function finishAll() {
  isPlaying = false;
  animations.forEach(animation => {
    animation.finish();
  });
}
function playAll() {
  isPlaying = true;
  animations.forEach(animation => {
    animation.play();
  });
}

// MISC FUNCTIONS

// Calculates start_time for WORD ANIMATIONS
function start_time(animation, linedurationX, wordarrayXlength, wordnumber) {
  const totalMilliseconds = (linedurationX / wordarrayXlength) * wordnumber;
  // console.log("Total Milliseconds = " + totalMilliseconds);
  animation.startTime = performance.now() + totalMilliseconds;
}

// //calculates start_time for LINE ANIMATIONS
// function setLineAnimaStartTime(animation, linedurationX, animationDurations) {
//   const totalMilliseconds = animationDurations + (linedurationX * 1.2);
//   animation.startTime = performance.now() + totalMilliseconds;
// }

// calculates animation complete duration
function overall_duration(animation) {
  const timing = animation.effect.getTiming();
  return (
    timing.delay +
    timing.iterations * timing.duration +
    timing.endDelay
  );
}

//Create function to calculate reading time
function lineReadingTime(wordarray) {
  const words = wordarray.length / 2;
  const time = words / 225 * 60;
  return Math.round(time * 100) / 100 * 1000;
}

// Create random number generator
function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log("ln0w10 duration = " + animations[0].effect.getTiming().duration);
console.log("ln0w18 duration = " + animations[1].effect.getTiming().duration);
console.log("ln0w10 startTime = " + animations[0].startTime);
console.log("ln0w18 startTime = " + animations[1].startTime);
console.log("ln0w10 WHOLE duration = " + overall_duration(animations[0]))
console.log("ln0w18 WHOLE duration = " + overall_duration(animations[1]))
console.log("Line Reading Time = " + lineDuration0);

// Create WIND animation - LINE 1 WORD animations and store the Animation objects in an array
// const line1WordAnimations = [
//   document.getElementById("ln1w0").animate(windFrames, windTiming),
//   document.getElementById("ln1w2").animate(windFrames, windTiming),
//   document.getElementById("ln1w4").animate(windFrames, windTiming),
//   document.getElementById("ln1w6").animate(windFrames, windTiming),
//   document.getElementById("ln1w8").animate(windFrames, windTiming),
//   document.getElementById("ln1w10").animate(windFrames, windTiming),
//   document.getElementById("ln1w12").animate(windFrames, windTiming),
//   document.getElementById("ln1w14").animate(windFrames, windTiming),
//   document.getElementById("ln1w16").animate(windFrames, windTiming),
//   document.getElementById("ln1w18").animate(windFrames, windTiming),
//   document.getElementById("ln1w20").animate(windFrames, windTiming),
// ];

// Create PLAYER RACK
// function animationsPlayer(animations) {
//   return Object.freeze({
//     cancel: function () {
//       animations.forEach((animation) => animation.cancel());
//     },
//     finish: function () {
//       animations.forEach((animation) => animation.finish());
//     },
//     pause: function () {
//       animations.forEach((animation) => animation.pause());
//     },
//     persist: function () {
//       animations.forEach((animation) => animation.persist());
//     },
//     play: function () {
//       animations.forEach((animation) => animation.play());
//     },
//     reverse: function () {
//       animations.forEach((animation) => animation.reverse());
//     },
//     updatePlaybackRate: function () {
//       animations.forEach((animation) => animation.updatePlaybackRate());
//     },
//     // currentTime: function (time = 0) {
//     //   animations.forEach((animation) => animation.currentTime = time);
//     // },
//     currentTime: function (time = 0) {
//       animations.forEach(function (animation) {
//         if (typeof animation.currentTime === "function") {
//           animation.currentTime(time);
//         } else {
//           animation.currentTime = time;
//         }
//       });
//     },
//   });
// }

// const animation = sampleElements.map(Element => Element.animate(keyframes, timing));