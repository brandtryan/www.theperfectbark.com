const star = document.getElementById('star');
const button = document.querySelector('button');
let animations = [];

checkSupport();

function addAnimation() {
  let keyframes = getKeyframes();
  let duration = getDuration();
  let easing = getEasing();

  let currentAnimation = star.animate(keyframes, {
    duration: duration,
    direction: 'alternate',
    iterations: Infinity,
    easing: easing,
    composite: 'add'
  });

  animations.push({
    animation: currentAnimation,
    notes: createNotes(keyframes, duration, easing, 'transform')
  })

  star.textContent = (animations.length);

  return currentAnimation;
}

/* Get a random duration, easing, and transformation function */
function getDuration() {
  return (1000 + (Math.random() * 5000));
}

function getEasing() {
  let key = Math.random();
  if (key < .5) {
    return 'ease-in-out';
  } else {
    return 'cubic-bezier(.3,0,.7,1)';
  }
}

function getKeyframes() {
  var rand = Math.floor(Math.random() * 16);
  var result;

  switch (rand) {
    case 0:
      result = [
        `translateX(0vmin)`,
        `translateX(${(2 + Math.random() * 18).toFixed(2)}vmin)`
      ];
      break;
    case 1:
      result = [
        `translateY(0vmin)`,
        `translateY(${(2 + Math.random() * 18).toFixed(2)}vmin)`
      ];
      break;
    case 2:
      result = [
        `scale(1)`,
        `scale(${(.5 + Math.random() * .4).toFixed(2)})`
      ];
      break;
    case 3:
      result = [
        `rotateZ(0deg)`,
        `rotateZ(${(20 + Math.random() * 300).toFixed(2)}deg)`
      ];
      break;
    case 4:
      result = [
        `rotateX(0deg)`,
        `rotateX(${(6 + Math.random() * 30).toFixed(2)}deg)`
      ];
      break;
    case 5:
      result = [
        `rotateY(0deg)`,
        `rotateY(${(6 + Math.random() * 30).toFixed(2)}deg)`
      ];
      break;
    case 6:
      result = [
        `translateZ(0vmin)`,
        `translateZ(${(2 + Math.random() * 18).toFixed(2)}vmin)`
      ];
      break;
    case 7:
      result = [
        `skewY(0deg)`,
        `skewY(${(1 + Math.random() * 4).toFixed(2)}deg)`
      ];
      break;
    case 8:
      result = [
        `translateX(0vmin)`,
        `translateX(-${(2 + Math.random() * 18).toFixed(2)}vmin)`
      ];
      break;
    case 9:
      result = [
        `translateY(0vmin)`,
        `translateY(-${(2 + Math.random() * 18).toFixed(2)}vmin)`
      ];
      break;
    case 10:
      result = [
        `scale(1)`,
        `scale(${(.8 + Math.random() * .4).toFixed(2)})`
      ];
      break;
    case 11:
      result = [
        `rotateZ(0deg)`,
        `rotateZ(-${(20 + Math.random() * 300).toFixed(2)}deg)`
      ];
      break;
    case 12:
      result = [
        `rotateX(0deg)`,
        `rotateX(-${(6 + Math.random() * 30).toFixed(2)}deg)`
      ];
      break;
    case 13:
      result = [
        `rotateY(0deg)`,
        `rotateY(-${(6 + Math.random() * 30).toFixed(2)}deg)`
      ];
      break;
    case 14:
      result = [
        `translateZ(0vmin)`,
        `translateZ(-${(2 + Math.random() * 18).toFixed(2)}vmin)`
      ];
      break;
    case 15:
      result = [
        `skewY(0deg)`,
        `skewY(-${(1 + Math.random() * 4).toFixed(2)}deg)`
      ];
      break;
  }


  return {
    transform: result
  };
}



