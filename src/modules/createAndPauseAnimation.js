import { sections, sectionTimelines } from './parentModule.js';

export function createAndPauseAnimation(element) {
  if (!element || element.dataset.enable === 'false') return null;

  const frames = JSON.parse(element.dataset.frames);
  const options = {
    delay: parseFloat(element.dataset.delay),
    endDelay: parseFloat(element.dataset.endDelay),
    direction: element.dataset.direction,
    duration: parseFloat(element.dataset.duration),
    easing: element.dataset.easing,
    iterationStart: parseFloat(element.dataset.iterationStart),
    composite: element.dataset.composite,
    iterationComposite: element.dataset.iterationComposite,
    iterations: parseFloat(element.dataset.iterations),
  };

  const effect = new KeyframeEffect(element, frames, options);
  const animation = new Animation(effect);
  animation.id = element.id + 'Animation';

  for (let i = 0; i < 35; i++) {
    sectionTimelines.push({ name: `s${i.toString().padStart(2, '0')}Timeline` });
  }

  sections.forEach(section => {
    const timelineName = section.dataset.timeline;
    const timeline = sectionTimelines.find(tl => tl.name === timelineName);

    if (timeline) {
      const animation = { timeline: null };
      animation.timeline = timeline.name;
      console.log(`Assigned timeline ${timeline.name} to section with data-timeline ${timelineName}`);
    } else {
      console.error(`No matching timeline found for data-timeline: ${timelineName}`);
    }
  });

  // Example of how to access the timelines later if needed:
  const timelineLookup = {};
  sectionTimelines.forEach(timeline => {
    timelineLookup[timeline.name] = timeline;
  });

  animation.play();
  animation.pause();

  Animation.playbackRate = parseFloat(element.dataset.playbackRate);
  Animation.currentTime = parseFloat(element.dataset.currentTime);
  Animation.startTime = parseFloat(element.dataset.startTime);

  return animation;
}
