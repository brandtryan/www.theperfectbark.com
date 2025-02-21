// Create PLAYER RACK
function animationsPlayer(animations) {
  return Object.freeze({
    play: function () {
      animations.forEach((animation) => animation.play());
    },
    pause: function () {
      animations.forEach((animation) => animation.pause());
    },
    reverse: function () {
      animations.forEach((animation) => animation.reverse());
    },
    currentTime: function (time = 0) {
      animations.forEach(function (animation) {
        if (typeof animation.currentTime === "function") {
          animation.currentTime(time);
        } else {
          animation.currentTime = time;
        }
      });
    },
  });
}