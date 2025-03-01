let wrds = document.getElementsByClassName("words");
let wordsArray = [];

let str = "Tourettic Text"

// Create array of words
wordsArray = str.split(/(\s+)/);

// Create a container element to hold the divs
const container = document.createElement('div');
container.id = "container";

// Loop through the array
for (let i = 0; i < 2; i++) {
  // Create a div element for each element in the array
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = [i];
  // Give each new div element the words class
  div.className = "words";
  // Set the text content of the div to the current element
  div.textContent = wordsArray[i];

  // Append the div to the container
  container.appendChild(div);
}
// Now you can append the container to the desired location in your HTML document
document.body.appendChild(container);

const firstWord = document.getElementById("0");
// const secondWord = document.getElementById("1");

// const tremor = container.animate(
//   [
//     { transform: "translateX(-0.32px)" },
//     { transform: "translateX(0.32px)" },
//   ],
//   {
//     id: "baseTremor",
//     duration: 100,
//     iterations: Infinity,
//     easing: "linear",
//     direction: "alternate"
//   },
// );

// {"tag":"wght","minValue":47,"defaultValue":200,"maxValue":900,"name":{}}
// {"tag":"wdth","minValue":60,"defaultValue":60,"maxValue":140,"name":{}}
// {"tag":"ital","minValue":0,"defaultValue":0,"maxValue":12,"name":{}}
// {"tag":"cont","minValue":0,"defaultValue":100,"maxValue":100,"name":{}}

// wght Range: 200 - 900
const weight = firstWord.animate(
  [
    { fontVariationSettings: `"wght" 47, "wdth" 100, "ital" 0, "cont" 0` },
    { fontVariationSettings: `"wght" 900, "wdth" 100, "ital" 0, "cont" 0` }
  ],
  {
    id: "animaWeight",
    delay: 0,
    direction: "alternate",
    duration: 1250,
    easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
    endDelay: 0,
    fill: "none",
    iterationStart: 0.0,
    iterations: Infinity,
    composite: "replace",
    iterationComposite: "replace"
  }
);
// wdth Range: 60 - 140
const wid = firstWord.animate(
  [
    { fontVariationSettings: `"wght" 47, "wdth" 60, "ital" 0, "cont" 0` },
    { fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 0, "cont" 0` }
  ],
  {
    id: "animaWidth",
    delay: 0,
    direction: "alternate",
    duration: 2500,
    easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
    endDelay: 300,
    fill: "none",
    iterationStart: 0.0,
    iterations: Infinity,
    composite: "add",
    iterationComposite: "replace",
  }
);
// ital Range: 0 - 12
const italics = firstWord.animate(
  [
    { fontVariationSettings: `"wght" 47, "wdth" 60, "ital" 12, "cont" 0` },
    { fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 0, "cont" 0` }
  ],
  {
    id: "animaItalics",
    delay: 0,
    direction: "alternate",
    duration: 1250,
    easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
    endDelay: 300,
    fill: "none",
    iterationStart: 0.0,
    iterations: Infinity,
    composite: "add",
    iterationComposite: "replace"
  }
);
// cont Range: 0 - 100
const contrast = firstWord.animate(
  [
    { fontVariationSettings: `"wght" 47, "wdth" 60, "ital" 12, "cont" 500` },
    { fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 0, "cont" 0` }
  ],
  {
    id: "animaContrast",
    delay: 0,
    direction: "alternate",
    duration: 1250,
    easing: "cubic-bezier(0.83, 0, 0.17, 1)",
    endDelay: 300,
    fill: "none",
    iterationStart: 0.0,
    iterations: Infinity,
    composite: "add",
    iterationComposite: "replace"
  }
);

weight.playbackRate = 2;
wid.playbackRate = 0.5;
italics.playbackRate = 4;
contrast.playbackRate = 2;

document.getAnimations().forEach((Animation) => {
  Animation.updatePlaybackRate(Animation.playbackRate * 0.75);
});
