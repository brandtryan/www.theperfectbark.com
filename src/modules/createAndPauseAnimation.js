
export function createAndPauseAnimation(element) {
  if (!element || element.getAttribute('enable') === 'false') return null;

  const keyframes = JSON.parse(element.getAttribute('keyframes'));
  const options = {
    delay: parseFloat(element.getAttribute('delay')),
    endDelay: parseFloat(element.getAttribute('enddelay')),
    direction: element.getAttribute('direction'),
    duration: parseFloat(element.getAttribute('duration')),
    easing: element.getAttribute('easing'),
    iterationStart: parseFloat(element.getAttribute('iterationstart')),
    iterations: parseFloat(element.getAttribute('iterations')),
  };

  const effect = new KeyframeEffect(element, keyframes, options);
  const animation = new Animation(effect);

  animation.id = element.id + 'Animation';
  animation.playbackRate = parseFloat(element.getAttribute('playbackrate'));
  animation.currentTime = parseFloat(element.getAttribute('currenttime'));
  animation.startTime = parseFloat(element.getAttribute('starttime'));

  return animation;
}
