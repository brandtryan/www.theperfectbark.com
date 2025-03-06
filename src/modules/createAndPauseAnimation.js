
export function createAndPauseAnimation(element) {
  if (!element || element.enable === 'false') return null;

  const keyframes = JSON.parse(element.keyframes);
  const options = {
    delay: parseFloat(element.delay),
    enddelay: parseFloat(element.enddelay),
    direction: element.direction,
    duration: parseFloat(element.duration),
    easing: element.easing,
    iterationstart: parseFloat(element.iterationstart),
    composite: element.composite,
    iterationcomposite: element.iterationcomposite,
    iterations: parseFloat(element.iterations),
  };

  const effect = new KeyframeEffect(element, keyframes, options);
  const animation = new Animation(effect);
  animation.id = element.id + 'Animation';

  //
  // for (let i = 0; i < 35; i++) {
  //   sectionTimelines.push({ name: `s${i.toString().padStart(2, '0')}Timeline` });
  // }

  // sections.forEach(section => {
  //   const timelineName = section.timeline;
  //   const timeline = sectionTimelines.find(tl => tl.name === timelineName);

  //   if (timeline) {
  //     const animation = { timeline: null };
  //     animation.timeline = timeline.name;
  //     console.log(`Assigned timeline ${timeline.name} to section with data-timeline ${timelineName}`);
  //   } else {
  //     console.error(`No matching timeline found for data-timeline: ${timelineName}`);
  //   }
  // });

  // // Example of how to access the timelines later if needed:
  // const timelineLookup = {};
  // sectionTimelines.forEach(timeline => {
  //   timelineLookup[timeline.name] = timeline;
  // });

  // animation.play();
  animation.pause();

  return animation;
}
