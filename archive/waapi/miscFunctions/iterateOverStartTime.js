// Calculate the start time for the first animation
let startTime = 1000;

// Iterate over the array of animations
wordAnimations.forEach((animation) => {
  animation.startTime = startTime; // Set the start time for the animation
  startTime += 83.33; // Increment the start time for the next animation
});