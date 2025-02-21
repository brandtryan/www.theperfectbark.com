var anim = document.getElementById('toAnimate').animate([
  { transform: 'scale(1)' },
  { transform: 'scale(.6)' }
], {
  duration: 700, //milliseconds
  iterations: Infinity, //or a number
  direction: 'normal', //'alternate', 'reverse', ...
  fill: 'forwards', //'backwards', 'both', 'none', 'auto'
  delay: 10, //milliseconds
  easing: 'ease-in-out', //'linear', 'ease-in', ...
});
anim.pause();


var anim2 = document.getElementById('toAnimate2').animate([
  { transform: 'scale(1)', opacity: 1, offset: 0 },
  { transform: 'scale(.5)', opacity: .5, offset: .333333 },
  { transform: 'scale(.667)', opacity: .667, offset: .666667 },
  { transform: 'scale(.6)', opacity: .6, offset: 1 }
], {
  duration: 700,
  iterations: 30,
  direction: 'alternate',
  fill: 'forwards'
});