import { randomNumberGenerator } from "./helpers/randomNumberGenerator.mjs";


const breathFrames = new KeyframeEffect(
  null,
  [
    { fontVariationSettings: `"wght" 70, "wdth" 60, "ital" 0, "cont" 0` },
    { fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 12, "cont" 0` },
    { fontVariationSettings: `"wght" 400, "wdth" 100, "ital" 0, "cont" 0` }
  ],
  {
    duration: 500,
    easing: 'ease-in-out',
    fill: 'none',
    iterations: 1
  }
);

const sparklingDiamonds = new KeyframeEffect(
  null,
  [
    { fontVariationSettings: `"wght" 900, "wdth" 60, "ital" 12, "cont" 100` },
    { fontVariationSettings: `"wght" 300, "wdth" 100, "ital" 0, "cont" 0` }
  ],
  {
    delay: 50,
    duration: 300,
    easing: 'ease',
    fill: 'none',
    iterations: 1
  }
);

const quiver = new KeyframeEffect(
  null,
  [
    { fontVariationSettings: `"wght" 47, "wdth" 60, "ital" 0, "cont" 0` },
    { fontVariationSettings: `"wght" 150, "wdth" 140, "ital" 12, "cont" 0` }
  ],
  {
    id: "animaItalics",
    delay: 0,
    direction: "alternate",
    duration: 50,
    // easing: "cubic-bezier(0.87, 0, 0.13, 1)",
    easing: "linear",
    endDelay: 0,
    fill: "none",
    iterationStart: 0.0,
    iterations: Infinity,
    composite: "add",
    iterationComposite: "replace"
  }
);

let randomWdth = randomNumberGenerator(100, 115);
const tremor = new KeyframeEffect(
  null,
  [
    { fontVariationSettings: `"wdth" ${randomWdth}` },
  ],
  {
    duration: 100,
    iterations: Infinity
  }
);
