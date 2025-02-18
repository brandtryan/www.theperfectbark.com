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

