// let fvss = "";
// let x = 0;

// let fvar = [
//   { "tag": "wght", "minValue": 200, "defaultValue": 200, "maxValue": 900, "name": { "en": "wght" } },
//   { "tag": "wdth", "minValue": 60, "defaultValue": 60, "maxValue": 140, "name": { "en": "wdth" } },
//   { "tag": "ital", "minValue": 0, "defaultValue": 0, "maxValue": 12, "name": { "en": "ital" } },
//   { "tag": "cont", "minValue": 0, "defaultValue": 100, "maxValue": 100, "name": { "en": "cont" } }
// ]

const wrds = document.getElementsByClassName("word");
let wordsArray = [];

let str = `My teachers look at me funny when I make weird noises, but my friends, they
usually just laugh. It's funny to them, and they are pretty cool about it — they
don't make fun of me really, but only get a kick out of it — like when we are in
the middle of a test or something, and then out of nowhere I let out a bark, I mean
a loud bark, where everyone turns around to me and smiles, and then someone starts
laughing, and then everyone else gets going. To tell you the truth, it doesn't
bother me at all, and I laugh right along with them most of the time.`

// Create array of words
wordsArray = str.split(/(\s+)/);

// Create a container element to hold the divs
const container = document.createElement('div');
container.className = "container";

// Loop through the array
for (let i = 0; i < wordsArray.length; i++) {
  // Create a div element for each element in the array
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordsArray[i];

  // Append the div to the container
  container.appendChild(div);
}
// Now you can append the container to the desired location in your HTML document
document.body.appendChild(container);

const firstWord = document.getElementById("0");

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const wdth = firstWord.animate(
  [
    // { fontVariationSettings: `"wght" 47, "wdth" 60, "ital" 0, "cont" 0` },
    // { fontVariationSettings: `"wght" 150, "wdth" 140, "ital" 12, "cont" 0` }
    { fontVariationSettings: `"wdth" ${randomNum(60, 100)}` },
    { fontVariationSettings: `"wdth" ${randomNum(101, 140)}` }
  ],
  {
    id: "animaWidth",
    delay: 0,
    direction: "alternate",
    duration: 500,
    easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
    endDelay: 0,
    fill: "none",
    iterationStart: 0.0,
    iterations: Infinity,
    composite: "add",
    iterationComposite: "replace"
  }
);

wdth.pause();