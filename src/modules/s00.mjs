const s00 = document.getElementById('s00');
// const s00LinesArray = Array.from(s00.getElementsByTagName('p'));
// export const [s00Lines] = [s00LinesArray];

// const s00WordsArray = Array.from(s00.getElementsByTagName('span'));
const wordsArray = Array.from(document.getElementsByTagName('span'));

// export const [s00Words] = [s00WordsArray];

// Helper function to create and start animation
function createAndPlayAnimation(element) {
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
    //HTML has loaded
    animation.play();
  });

  return animation;
}

// Create animations for all words
// const s00WordAnimations = s00WordsArray.map((word, index) => {
const wordAnimations = wordsArray.map((word, index) => {
  const wordAnimation = createAndPlayAnimation(word);
  // console.log(`Created animation for word ${index}:`, {
  //   enabled: word.dataset.enable,
  //   duration: word.dataset.duration,
  //   delay: word.dataset.delay,
  //   easing: word.dataset.easing
  // });
  return wordAnimation;
});

// // Get a specific animation
// const firstWordAnimation = s00WordAnimations[0];

// // Pause all animations
// s00WordAnimations.forEach(animation => animation?.pause());

// // Play all animations
// s00WordAnimations.forEach(animation => animation?.play());




// // Create animations for all lines
// const lineAnimations = s00LinesArray.map((line, index) => {
// const lineAnimation = createAndPlayAnimation(line);
// console.log(`Created animation for line ${index}:`, {
//   enabled: line.dataset.enable,
//   duration: line.dataset.duration,
//   delay: line.dataset.delay,
//   easing: line.dataset.easing,
// });
// return lineAnimation;
// });
// export const s00LineAnimations = lineAnimations;

// // Get a specific animation
// const firstLineAnimation = s00LineAnimations[0];

// // Pause all animations
// s00LineAnimations.forEach(animation => animation?.pause());

// // Play all animations
// s00LineAnimations.forEach(animation => animation?.play());

