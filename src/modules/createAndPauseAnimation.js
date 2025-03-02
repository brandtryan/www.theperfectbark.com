
export function createAndPauseAnimation(element) {
  if (!element || element.dataset.enable === 'false') return null;

  const keyframes = element.dataset.keyframes;
  const options = {
    delay: element.dataset.delay,
    endDelay: element.dataset.endDelay,
    direction: element.dataset.direction,
    duration: element.dataset.duration,
    easing: element.dataset.easing,
    iterationStart: element.dataset.iterationStart,
    iterations: element.dataset.iterations,
  };

  const effect = new KeyframeEffect(element, keyframes, options);
  const animation = new Animation(effect);
  animation.id = element.id + 'Animation';
  animation.playbackRate = parseFloat(element.dataset.playbackRate);
  animation.currentTime = parseFloat(element.dataset.currentTime);
  animation.startTime = parseFloat(element.dataset.startTime);

  return animation;
}
