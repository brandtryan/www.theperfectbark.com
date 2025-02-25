export function iterateOverStartTime(arrayOfAnimations) {
  // Calculate the start time for the first animation
  let startTime = document.timeline.currentTime + 100;

  // Iterate over the array of animations
  arrayOfAnimations.forEach((animation) => {
    animation.startTime = startTime; // Set the start time for the animation
    startTime += 100; // Increment the start time for the next animation
  });

  arrayOfAnimations.forEach((animation) => {
    animation.pause();
  })

}
