var frames = [
  { transform: 'scale(1) rotate(-2deg)', offset: 0, opacity: 1 },
  { transform: 'scale(.3) rotate(5deg)', opacity: .2, offset: .333333 },
  { transform: 'scale(.567) rotate(-3deg)', opacity: .567, offset: .666667 },
  { transform: 'scale(.5) rotate(2deg)', opacity: .4, offset: 1 }
];
var timings = {
  duration: 700,
  iterations: Infinity,
  direction: 'alternate',
  fill: 'forwards',
  delay: 0,
  easing: 'ease-in-out'
};
var player, player2;
player = document.getElementById('toAnimate').animate(frames, timings);

player2 = document.getElementById('toAnimate2').animate(frames, timings);
player2.currentTime = 500; //get out of sync

document.querySelector('input').addEventListener('click', function (e) {
  var target = e.currentTarget;
  if (target.classList.contains('synced')) {
    player2.currentTime = player.currentTime - (Math.random() * 700);
    target.classList.remove('synced');
    target.value = "Sync";
  } else {
    player2.currentTime = player.currentTime;
    target.classList.add('synced');
    target.value = "Randomize";
  }
});