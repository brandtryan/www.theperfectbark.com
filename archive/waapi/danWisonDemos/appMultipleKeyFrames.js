var changer = document.getElementById('changeable');
var options = {
  frames: [
    [
      { transform: 'translate3d(-40vmin,0,0)' },
      { transform: 'translate3d(40vmin,0,0)' }
    ],
    [
      { transform: 'translate3d(0,0,0)' },
      { transform: 'translate3d(-20vmin,30vmin,0)' },
      { transform: 'translate3d(20vmin,60vmin,0)' },
      { transform: 'translate3d(0,80vmin,0)' }
    ]
  ],
  timing: {
    duration: 3000,
    iterations: Infinity,
    easing: 'ease-in-out',
    direction: 'alternate'
  }
}

var animation;
if (typeof changer.animate === 'function') {
  console.log('using Element.animate();');
  document.getElementById('waapi-support').classList.add('supported');
  var animation = changer.animate(
    options.frames[0],
    options.timing
  );
} else if (window.KeyframeEffect && window.Animation) {
  console.log('using KeyframeEffect + Animation constructors');
  document.getElementById('waapi-support').classList.add('supported');
  var kfe = new KeyframeEffect(
    changer,
    options.frames[0],
    options.timing
  );
  var animation = new Animation(kfe, document.timeline);
  animation.play();
}


//mix up the keyframes if setKeyframes is possible
if (animation && typeof animation.effect === 'object') {

  //Used to be called .setFrames(), so earlier editions of Firefox Nightly might use that
  if (typeof animation.effect.setKeyframes !== 'function' && typeof animation.effect.setFrames === 'function') {
    animation.effect.setKeyframes = animation.effect.setFrames
  }

  //if setKeyframes is supported, remove the support messaging, and add a button to toggle between to keyframe objects
  if (animation.effect.setKeyframes) {
    document.documentElement.classList.add('supported');
    var button = document.createElement('button');
    button.textContent = 'Change Keyframes';
    document.body.appendChild(button);
    var current;
    button.addEventListener('click', function () {
      current = current ? 0 : 1;
      console.log(current);
      document.documentElement.classList[current ? 'add' : 'remove']('vertical')

      //this is the line that really does the magic
      animation.effect.setKeyframes(options.frames[current]);
    });
  }
}