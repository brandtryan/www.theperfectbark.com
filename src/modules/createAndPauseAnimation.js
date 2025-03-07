
export function createAndPauseAnimation(element) {
  if (!element) return null;

  const timeline = new DocumentTimeline({
    originTime: document.timeline.currentTime,
  });

  const keyframes = JSON.parse(element.getAttribute(keyframes));
  const options = {
    delay: parseFloat(element.dataset.delay),
    direction: element.dataset.direction,
    duration: parseFloat(element.dataset.duration),
    easing: element.dataset.easing,
    enddelay: parseFloat(element.dataset.enddelay),
    fill: element.dataset.fill,
    iterationstart: parseFloat(element.dataset.iterationstart),
    iterations: parseFloat(element.dataset.iterations),
    composite: element.dataset.composite,
    iterationcomposite: element.dataset.iterationcomposite
  };

  const effect = new KeyframeEffect(element, keyframes, options);
  const animation = new Animation(effect, timeline);
  animation.id = element.id + 'Animation';

  animation.pause();

  return animation;
}
