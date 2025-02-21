/* Only show demo if composite is supported */
function checkSupport() {
  if (star.animate) {
    let effect = {
      transform: ['scale(1)', 'scale(1)']
    };
    let startAnimation = star.animate(effect, {
      duration: 1,
      composite: 'add'
    });

    if (startAnimation.effect && startAnimation.effect.composite === 'add') {
      document.documentElement.classList.add('supported');
      button.addEventListener('click', addAnimation);
    }
    startAnimation.cancel();
  }
}






const aside = document.querySelector('aside');
let hue = 4;

// Create the aside with each individual animation and its progress, also provide a control to pause the animation  
function createNotes(animation, duration, easing, prop) {
  let container = document.createElement('div');
  let from = document.createElement('p');
  let to = document.createElement('p');
  let progress = document.createElement('p');
  let toggle = document.createElement('input');
  let label = document.createElement('label');
  const id = 'animation' + animations.length;

  from.textContent = animation[prop][0];
  to.textContent = animation[prop][1];

  container.appendChild(toggle);
  label.appendChild(from);
  label.appendChild(to);
  label.appendChild(progress);
  container.appendChild(label);

  container.style.setProperty('--hue', hue);
  hue = hue + 10;

  let noteAnimation = progress.animate({
    transform: ['translateX(0px)', 'translateX(calc(100% - 5px))']
  }, {
    duration: duration,
    direction: 'alternate',
    iterations: Infinity,
    easing: easing
  });

  toggle.type = "checkbox";
  toggle.setAttribute('checked', 'checked');
  toggle.setAttribute('data-index', animations.length);
  toggle.addEventListener('click', changePlayState);
  toggle.id = id;
  label.setAttribute('for', id);
  aside.appendChild(container);

  return noteAnimation;
}

// When check is removed, pause the associated animations
function changePlayState(e) {
  var index = parseFloat(e.currentTarget.getAttribute('data-index'));
  var current = animations[index];
  var method = e.currentTarget.checked ? 'play' : 'pause';
  current.animation[method]();
  current.notes[method]();
}