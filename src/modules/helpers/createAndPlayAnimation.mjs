
// Helper function to create and start animation
export function createAndPlayAnimation(element) {
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
  animation.pause();

  element.addEventListener('mouseenter', () => {
    animation.play();
  });

  return animation;
}
