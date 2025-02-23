// Helper function to create and pause animation
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
  const animation = new Animation(effect, document.timeline);
  animation.id = element.id + 'Animation';
  animation.pause();

  Animation.playbackRate = parseFloat(element.dataset.playbackRate);
  Animation.currentTime = parseFloat(element.dataset.currentTime);
  Animation.startTime = parseFloat(element.dataset.startTime);

  return animation;
}
