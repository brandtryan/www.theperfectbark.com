
export function createAndPauseAnimation(element) {
  if (!element) return null;

  const keyframes = JSON.parse(element.getAttribute('keyframes'));
  const timing = JSON.parse(element.getAttribute('timing'));
  const effect = new KeyframeEffect(element, keyframes, timing);
  const animation = new Animation(effect);

  return animation;
}
