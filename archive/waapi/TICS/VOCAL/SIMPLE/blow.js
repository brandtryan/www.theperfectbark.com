const windFrames = [
  {
    fontVariationSettings: `"wght" 295, "wdth" 100, "ital" 0, "cont" 0`,
    fontVariationSettings: `"wght" 295, "wdth" 100, "ital" 12, "cont" 0`,
  },
];

const windTiming = {
  id: "wind",
  delay: 0,
  direction: "normal",
  duration: 1000,
  endDelay: 0,
  fill: "none",
  easing: "cubic-bezier(0.45, 0, 0.55, 1)",
  iterationStart: 0.0,
  iterations: 1,
  composite: "replace",
  iterationComposite: "replace",
};

const windOpacityFrames = [
  {
    opacity: 1,
    opacity: 0,
  },
];

const windOpacityTiming = {
  id: "windOpacity",
  delay: 0,
  direction: "normal",
  duration: 1000,
  endDelay: 0,
  fill: "none",
  easing: "linear",
  iterationStart: 0.0,
  iterations: 1,
  composite: "replace",
  iterationComposite: "replace",
};