if (typeof document.documentElement.animate === 'function') {
  var ps = [].slice.call(document.querySelectorAll('p'));
  var ball = document.getElementById('bouncer');
  var width = ball.offsetWidth / 2;
  var y = ball.querySelector('.y');
  var syllables;
  var MULTIPLIER = 433;

  var score = getScore();

  ps.forEach(function (p) {
    var split = p.innerHTML.split(' ');
    for (var i = 0, l = split.length; i < l; ++i) {
      if (split[i].indexOf('<') !== 0) {
        split[i] = '<span>' + split[i] + '</span>';
      }
    }
    p.innerHTML = split.join(' ');
  });

  playByScore();
} else {

}

function playByScore() {
  syllables = [].slice.call(document.querySelectorAll('span'));
  console.log('syllables.length', syllables.length)
  var duration = score[0].duration * MULTIPLIER;
  var starter = syllables[score[0].index].getBoundingClientRect();
  console.log(starter)
  syllables[score[0].index].classList.add('bounced');

  var latest = ball.animate([
    { transform: 'translate(' + (starter.left - width + starter.width / 2) + 'px, ' + (starter.top) + 'px) scale(0)', opacity: 1 },
    { transform: 'translate(' + (starter.left - width + starter.width / 2) + 'px, ' + (starter.top) + 'px) scale(1)', opacity: 1 }
  ], {
    duration: duration,
    fill: 'forwards',
    easing: 'ease-in-out'
  });
  console.log(latest)
  animateY(duration);

  latest.onfinish = function () {
    doNextAnimation(1, starter)
  };
}

function doNextAnimation(i, prev) {
  var beat = score[i];

  if (!beat) {
    theEnd(prev);
    return false;
  }

  var next = syllables[beat.index].getBoundingClientRect();
  bounceBall(prev, next, beat).onfinish = function () {
    doNextAnimation((i + 1), next);
  };
}

function animateY(duration, delay) {
  y.animate([
    { transform: 'translateY(-2vmin) scaleY(.8)', offset: 0 },
    { transform: 'translateY(-3vmin) scaleY(1)', offset: .2 },
    { transform: 'translateY(-7vmin) scaleY(1)', offset: 1 }
  ], {
    duration: duration / 2,
    iterations: 2,
    direction: 'alternate',
    easing: 'ease-in-out',
    fill: 'forwards',
    delay: delay || 0
  })
}

function bounceBall(prev, next, beat) {
  syllables[beat.index].classList.add('bounced');
  var duration = beat.duration * MULTIPLIER;
  animateY(duration);

  return ball.animate([
    { transform: 'translate(' + (prev.left - width + prev.width / 2) + 'px, ' + (prev.top) + 'px)' },
    { transform: 'translate(' + (next.left - width + next.width / 2) + 'px, ' + (next.top) + 'px)' }
  ], {
    duration: duration,
    fill: 'forwards',
    easing: 'ease-in-out',
    delay: 0
  });
}

function theEnd(prev) {
  ball.animate([
    { transform: 'translate(' + (prev.left - width + prev.width / 2) + 'px, ' + (prev.top) + 'px) scale(1)' },
    { transform: 'translate(' + (prev.left - width + prev.width / 2) + 'px, ' + (prev.top) + 'px) scale(0)' }
  ], {
    duration: 3500,
    easing: 'ease-in-out',
    fill: 'forwards'
  }).playbackRate = 3;

  y.animate([
    { transform: 'translateY(-2vmin) scaleY(.8)', offset: 0 },
    { transform: 'translateY(-3vmin) scaleY(1)', offset: .2 },
    { transform: 'translateY(-7vmin) scaleY(1)', offset: 1 }
  ], {
    duration: 80,
    easing: 'ease-in-out',
    fill: 'forwards'
  })
  /*
  y.animate([
    {transform: 'translate(0vw, -7vmin)'},
    {transform: 'translate(-1vw, -7vmin)'},
    {transform: 'translate(0vw, -7vmin)'},
    {transform: 'translate(1vw, -7vmin)'},
    {transform: 'translate(0vw, -7vmin)'}
  ], {
    duration: (3500 - 80) / 17,
    delay: 80,
    iterations: 17,
    //direction: 'alternate'
  });
  //*/
}

function getScore() {
  var tx = [
    { duration: 5, index: 0 },
    { duration: .5, index: 1 },
    { duration: 1, index: 2 },
    { duration: 1, index: 3 },
    { duration: 1.5, index: 4 },
    { duration: .5, index: 5 },
    { duration: 1, index: 6 },
    { duration: 1, index: 7 },
    { duration: .5, index: 8 },

    { duration: .5, index: 9 },
    { duration: .5, index: 10 },
    { duration: .5, index: 11 },
    { duration: .5, index: 12 },

    { duration: .5, index: 13 },
    { duration: .5, index: 14 },
    { duration: .5, index: 15 },
    { duration: 1.5, index: 16 },
    { duration: .5, index: 17 },
    { duration: .5, index: 18 },
    { duration: 3, index: 19 },

    { duration: .5, index: 20 },
    { duration: 1, index: 21 },
    { duration: 1, index: 22 },
    { duration: 1.5, index: 23 },
    { duration: .5, index: 24 },
    { duration: 1, index: 25 },
    { duration: 1, index: 26 },
    { duration: .5, index: 27 },

    { duration: .5, index: 28 },
    { duration: .5, index: 29 },
    { duration: .5, index: 30 },
    { duration: .5, index: 31 },

    { duration: .5, index: 32 },
    { duration: .5, index: 33 },
    { duration: .5, index: 34 },
    { duration: 1.5, index: 35 },
    { duration: .5, index: 36 },
    { duration: .5, index: 37 },
    { duration: 2, index: 37 },
  ];
  return tx;
}