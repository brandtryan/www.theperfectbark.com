
export function createAndPauseAnimation(element) {
  if (!element) return null;

  const keyframes = JSON.parse(element.getAttribute(keyframes));
  const options = JSON.parse(element.getAttribute(options));

  const effect = new KeyframeEffect(element, keyframes, options);
  const animation = new Animation(effect);
  animation.id = element.id + 'Animation';

  animation.pause();

  return animation;
}
