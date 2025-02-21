var animations = {};
animations.leftFoot = document.querySelector('.foot.left').animate([
  { transform: 'scale(1)' },
  { transform: 'scale(.6)' }
], {
  duration: 700,
  iterations: Infinity,
  direction: 'alternate',
  delay: 0//100 * i
});
animations.rightFoot = document.querySelector('.foot.right').animate([
  { transform: 'scale(.6)' },
  { transform: 'scale(1)' }
], {
  duration: 700,
  iterations: Infinity,
  direction: 'alternate',
  delay: 0
});
animations.rightHand = document.querySelector('.hand.right').animate([
  { transform: 'scale(1)' },
  { transform: 'scale(.6)' }
], {
  duration: 700,
  iterations: Infinity,
  direction: 'alternate',
  delay: 0//100 * i
});
animations.leftHand = document.querySelector('.hand.left').animate([
  { transform: 'scale(.6)' },
  { transform: 'scale(1)' }
], {
  duration: 700,
  iterations: Infinity,
  direction: 'alternate',
  delay: 0
});
animations.body = document.querySelector('.body').animate([
  { transform: 'translateY(0)' },
  { transform: 'translateY(1rem)' }
], {
  duration: 350,
  iterations: Infinity,
  direction: 'alternate',
  delay: 15
});
animations.head = document.querySelector('.head').animate([
  { transform: 'translateY(0)' },
  { transform: 'translateY(1rem)' }
], {
  duration: 350,
  iterations: Infinity,
  direction: 'alternate',
  delay: 105
});

var ranges = document.querySelectorAll('input[type="range"]');
for (let i = 0, len = ranges.length; i < len; i++) {
  var range = ranges[i];
  range.disabled = true;
  range.value = 0;
  range.addEventListener('change', rangeHandler);
}
var pauses = document.querySelectorAll('.pause');
for (let i = 0, len = pauses.length; i < len; i++) {
  pauses[i].addEventListener('click', pauseHandler);
}

var rates = document.querySelectorAll('.rate-2x');
for (let i = 0, len = rates.length; i < len; i++) {
  rates[i].addEventListener('click', rateHandler);
}

var duration = 1400;

function rangeHandler(e) {
  console.log('Enter rangeHandler');
  var target = e.currentTarget;
  var percent = parseInt(target.value, 10) / 100;
  var player = animations[target.parentNode.getAttribute('data-mapping')];

  player.currentTime = percent * duration;

}
function rateHandler(e) {
  console.log('Enter rateHandler');
  var target = e.currentTarget;

  var player = animations[target.parentNode.getAttribute('data-mapping')];

  var wasActive = target.classList.contains('active');
  target.classList[wasActive ? 'remove' : 'add']('active');
  player.playbackRate = wasActive ? 1 : 2;
}

function pauseHandler(e) {
  console.log('Enter pauseHandler');
  var target = e.currentTarget;
  var mapping = target.parentNode.getAttribute('data-mapping');
  var player = animations[mapping];

  if (player.playState === 'paused') {
    player.play();
    console.log(player.playbackRate);
    target.classList.remove('active');
    document.querySelector('[data-mapping="' + mapping + '"] input').disabled = true;
  } else {
    let currentRange = document.querySelector('[data-mapping="' + mapping + '"] input');
    currentRange.disabled = false;
    currentRange.value = (player.currentTime % duration) / duration * 100;

    player.pause();
    target.classList.add('active');
  }
}

animations.leftHand.onfinish = function (e) {
  console.log(e);
}

/* currentTime DOES take playbackRate into account... nice.
setInterval(function() {
  console.log(animations.head.currentTime,animations.body.currentTime);
}, 1000);
//*/