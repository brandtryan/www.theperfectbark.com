const canvas = document.getElementById("canvas");
const scale = document.getElementById("scale");
const preview = document.getElementById("preview");
const controls = document.getElementById("controls");
const playback = document.getElementById("playback");
const marker = document.getElementById("playback-marker");
const result = document.querySelector("#result span");

const canvas_width = parseInt(getComputedStyle(canvas).width, 10);
const half_canvas_width = canvas_width / 2;

const timing_options = {
  duration: 1000,
  fill: "forwards"
};

const channels = {
  jumping: [
    { transform: "translateY(0)", easing: "ease-out" },
    { transform: "translateY(-500%)", easing: "ease-in" },
    { transform: "translateY(0)" }
  ],
  position: {
    transform: [
      `translateX(-${half_canvas_width}px)`,
      `translateX(${half_canvas_width}px)`
    ]
  }
};

// calculates animation complete duration
function overall_duration(animation) {
  const timing = animation.effect.getTiming();
  return (
    timing.delay +
    timing.iterations * timing.duration +
    timing.endDelay
  );
}

// Controller for a group of animations
function animations_player(animations) {
  const call_on_all = function (callback) {
    return function () {
      animations.forEach(function (element) {
        callback(element);
      });
    };
  };

  function set_timing_option(key) {
    return function (value) {
      call_on_all(function (animation) {
        const timing = animation.effect.getTiming();
        timing[key] = value;
        animation.effect.updateTiming(timing);
      })();
    };
  }

  return Object.freeze({
    play: call_on_all((animation) => animation.play()),
    pause: call_on_all((animation) => animation.pause()),
    current_time: (time = 0) => call_on_all(function (animation) {
      animation.currentTime = time;
    })(),
    stop: call_on_all(function (animation) {
      animation.pause();
      animation.currentTime = 0;
    }),
    iterations: set_timing_option("iterations"),
    duration: set_timing_option("duration"),
    delay: set_timing_option("delay"),
    endDelay: set_timing_option("endDelay")
  });
}

// Initialize ghosts

const number_of_ghosts = Number(canvas.dataset.ghostsNumber);
canvas.append(...new Array(number_of_ghosts).fill(true).map(function () {
  return canvas.firstElementChild.cloneNode(true);
}));

// Start animations and store them

let all_animations = Object.create(null);
Object.keys(channels).forEach(function (name) {
  all_animations[name] = Array.from(
    document.querySelectorAll(`[data-channel="${name}"]`)
  ).map(function (element) {
    return element.animate(channels[name], timing_options);
  });
});
const main_animation = all_animations.jumping.find(function (animation) {
  return animation.effect.target.isSameNode(preview.firstElementChild);
});
const marker_animation = all_animations.position.find(function (animation) {
  return animation.effect.target.isSameNode(marker);
});
const main_player = animations_player([main_animation, marker_animation]);
const jumping_player = animations_player(all_animations.jumping);
const position_player = animations_player(all_animations.position);

// Spread ghosts

Array.from(
  canvas.querySelectorAll(".ghost")
).forEach(function (ghost, index) {
  const ghost_animations = ghost.getAnimations().concat(Array.from(
    ghost.querySelectorAll("[data-channel]")
  ).map(
    (element) => element.getAnimations()
  )).reduce(
    (result, array) => result.concat(array),
    []
  );

  const player = animations_player(ghost_animations);
  player.pause();
  player.current_time(index * 16);
});

// Inject controls

function update_scale(key, value) {
  const duration = overall_duration(main_animation);
  const timing = main_animation.effect.getTiming();

  const value_label = scale.querySelector(`[data-key="${key}"]`);
  value_label.textContent = value;

  Array.from(scale.children).forEach(function (element) {
    if (element.dataset.key !== undefined) {
      element.style.width = String(
        Number(timing[element.dataset.key]) / duration * canvas_width
      ) + "px";
    } else {
      element.style.width = String(
        (timing.iterations * timing.duration) / duration * canvas_width
      ) + "px";
    }
  });
}

function update_overall_duration(player) {
  const duration = overall_duration(main_animation);
  player.duration(duration);
  result.textContent = duration;
}

function set_timing_option(name, first, second) {
  return function (value) {
    first[name](value);
    update_overall_duration(second);
    update_scale(name, value);
  };
}

// changes currentTime for main animation
function set_time(value = 0) {
  return function () {
    main_player.current_time(
      value < 0
        ? timing_options.duration + value
        : value
    );
  };
}

function create(name) {
  return document.createElement(name);
}

function wrap(name, ...children) {
  const element = create(name);
  element.append(...children);
  return element;
}

function div(...children) {
  return wrap("div", ...children);
}

function span(...children) {
  return wrap("span", ...children);
}

function toggle_playback(playing) {
  if (playing) {
    main_player.play();
  } else {
    main_player.pause();
  }
}

function radio_button(callback, name, value) {
  const button = create("button");
  button.setAttribute("type", "button");
  button.textContent = value;
  button.addEventListener(
    "click",
    function (event) {
      event.target.previousSibling.click();
    }
  );

  const input = create("input");
  input.setAttribute("type", "radio");
  input.setAttribute("name", name);
  input.setAttribute("value", value);
  input.addEventListener("click", function (event) {
    callback(event.target.name, event.target.value);
  });

  const label = wrap("label", input, button);
  label.classList.add("toggle");

  return label;
}

function range(
  callback,
  label = "range",
  min = 0,
  max = 1000,
  step = 10,
  initial = 0
) {
  const input = create("input");
  input.setAttribute("type", "range");
  input.min = min;
  input.max = max;
  input.step = step;
  input.value = initial;

  const value = span(initial);

  input.addEventListener("input", function (event) {
    event.target.nextElementSibling.textContent = event.target.value;
    callback(Number(event.target.value));
  });
  return wrap("label", span(label), input, value);
}

function radio(callback, name, values) {
  return wrap(
    "label",
    ...values.map((value) => radio_button(callback, name, value))
  );
}

function button(callback, label) {
  const btn = create("button");
  btn.type = "button";
  btn.append(label);

  btn.addEventListener("click", callback);

  return btn;
}

// toggle button with a label
function toggle(callback, labels = ["off", "on"], default_state = false) {
  let state = default_state;

  const btn = create("button");
  btn.type = "button";
  btn.append(...labels.map(function (label) {
    return span(label);
  }));

  function apply_state() {
    Array.from(btn.children).forEach(function (label, index) {
      if (state === Boolean(index)) {
        label.removeAttribute("hidden");
      } else {
        label.setAttribute("hidden", "hidden");
      }
    });
  }

  btn.addEventListener("click", function () {
    state = !state;
    apply_state();
    callback(state);
  });
  apply_state();
  return btn;
}

controls.append(
  div(range(
    set_timing_option("duration", jumping_player, position_player),
    "duration",
    0,
    1000,
    10,
    timing_options.duration
  )),
  div(range(
    set_timing_option("iterations", jumping_player, position_player),
    "iterations",
    1,
    5,
    1,
    1
  )),
  div(range(
    set_timing_option("delay", jumping_player, position_player),
    "delay"
  )),
  div(range(
    set_timing_option("endDelay", jumping_player, position_player),
    "endDelay"
  ))
);
playback.append(
  button(() => main_player.play(), "►")
);

main_animation.addEventListener("finish", function () {
  main_player.stop();
});
