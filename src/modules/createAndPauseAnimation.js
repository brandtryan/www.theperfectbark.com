
export function createAndPauseAnimation(element) {
  // if (!element || element.dataset.enable === 'false') return null;
  if (!element) return null;

  const keyframes = element.dataset.keyframes;
  const options = {
    enable: element.dataset.enable,
    delay: element.dataset.delay,
    endDelay: element.dataset.endDelay,
    direction: element.dataset.direction,
    duration: element.dataset.duration,
    easing: element.dataset.easing,
    iterationStart: element.dataset.iterationStart,
    iterations: element.dataset.iterationsf,
  };

  const effect = new KeyframeEffect(element, keyframes, options);
  const animation = new Animation(effect);
  animation.id = element.id + 'Animation';

  Animation.playbackRate = parseFloat(element.dataset.playbackRate);
  Animation.currentTime = parseFloat(element.dataset.currentTime);
  Animation.startTime = parseFloat(element.dataset.startTime);

  return animation;
}
