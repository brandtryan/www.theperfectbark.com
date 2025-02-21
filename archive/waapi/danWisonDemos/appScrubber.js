var divs = Array.from(document.querySelectorAll('div'));
var animations = [];
var isPlaying = true;
const DURATION = 8000;
var scrub = document.getElementById('scrub');

//Animate each div... for simplicity, using delays and endDelays to make all animations have same start and end times (end time will be duration + delay + endDelay)
divs.forEach((div, i) => {
  var anim = div.animate({
    transform: ['translateX(0) rotate(0deg)', 'translateX(80vw) rotate(2700deg)']
  }, {
    duration: DURATION,
    easing: 'ease-in-out',
    fill: 'both',
    delay: DURATION / 4 * i,
    endDelay: DURATION - (DURATION / 4 * i)
  });

  animations.push(anim);
});

//Also start moving the "scrubber" control
adjustScrubber();

//Stop moving the "scrubber" when the animations finish
animations[0].onfinish = function () {
  isPlaying = false;
  console.log('finished');
}

//when the input range ("scrubber") is adjusted, pause the animations and change the `currentTime` property
scrub.addEventListener('input', e => {
  //console.log('input', e.currentTarget.value);
  var time = e.currentTarget.value;
  animations.forEach(animation => {
    animation.currentTime = time;
  });
  pauseAll();
});

//When the user finalizes the value for input range ("scrubber")... such as by letting go with the pointer, start playing the animations again. Unless the range is at the end (so the animation should finish). This set up does not work well with Right/Left arrows because of how often it fires the "change" event compared to with a mouse/touch. Plan to investigate a better approach to support keyboard and other inputs.
scrub.addEventListener('change', e => {
  console.log('change', e.currentTarget.value);
  if (animations[0].currentTime >= e.currentTarget.getAttribute('max')) {
    finishAll();
    return false;
  }
  requestAnimationFrame(adjustScrubber);
  playAll();
});



function adjustScrubber() {
  if (isPlaying) {
    scrub.value = animations[0].currentTime;
    requestAnimationFrame(adjustScrubber);
  }
}

function pauseAll() {
  isPlaying = false;
  animations.forEach(animation => {
    animation.pause();
  });
}
function finishAll() {
  isPlaying = false;
  animations.forEach(animation => {
    animation.finish();
  });
}
function playAll() {
  isPlaying = true;
  animations.forEach(animation => {
    animation.play();
  });
}