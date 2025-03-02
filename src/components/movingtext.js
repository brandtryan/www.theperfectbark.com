//This file will be the web component
//It only needs to run, not be imported by main.js

const pageElements = document.querySelectorAll('main div');
const lineElements = document.querySelectorAll('p');
const wordElements = document.querySelectorAll('span');

const pagesArray = Array.from(pageElements);
const linesArray = Array.from(lineElements);
const wordsArray = Array.from(wordElements);

const [pages] = [pagesArray];
const [lines] = [linesArray];
const [words] = [wordsArray];


const template = document.createElement('template');

template.innerHTML = `
  <style>
  :host {
    display: block;
    contain: content;
  }
  .root {
    position: relative;
    border: 1px solid red;
    place-content: center;
    place-self: center;
    width: 49ch;
    height: 150vh;
    content-visibility: auto;
    contain-intrinsic-width: 48ch;
    contain-intrinsic-height: 100vh;
    font-size: clamp(1.4rem, 0.75vw + 1.24rem, 2.2rem);
    margin: 0 auto;
    white-space: nowrap;
    overflow: visible;
    margin: 0;
    padding: 0;
    scroll-snap-stop: always;
  }
  ::slotted(p) {
    margin: 0; 
    padding: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: .5
  }
  </style>
  <div class="root">
    <p><slot name="l00">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      </slot>
    <p><slot name="l01">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l02">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l03">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l04">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l05">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l06">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l07">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></slot> 
    </slot>
    <p><slot name="l08">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></slot> 
    </slot>
    <p><slot name="l09">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l10">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l11">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l12">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l13">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
  </div>
`;

class MovingText extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    let clone = template.content.cloneNode(true);
    root.append(clone);
  }

  //define the allowed attributes
  static get observedAttributes() {
    return [
      'id',
      'enable',
      'control',
      'seek',
      'keyframes',
      'delay',
      'direction',
      'duration',
      'easing',
      'enddelay',
      'iterationstart',
      'iterations',
      'playbackrate',
      'currenttime',
      'starttime'
    ];
  }
  //
  //create properties to sync with attributes
  get id() {
    return this.getAttribute('id');
  }
  get enable() {
    return this.getAttribute('enable');
  }
  set enable(value) {
    this.setAttribute('enable', value)
  }
  get control() {
    return this.getAttribute('control');
  }
  set control(value) {
    this.setAttribute('control', value);
  }
  get seek() {
    return this.getAttribute('seek');
  }
  set seek(value) {
    this.setAttribute('seek', value);
  }
  get keyframes() {
    return this.getAttribute('keyframes');
  }
  set keyframes(value) {
    this.setAttribute('keyframes', value);
  }
  get delay() {
    return parseFloat(this.getAttribute('delay')) || 0;
  }
  set delay(value) {
    this.setAttribute('delay', value);
  }
  get direction() {
    return this.getAttribute('direction');
  }
  set direction(value) {
    this.setAttribute('direction', value);
  }
  get duration() {
    return parseFloat(this.getAttribute('duration')) || 0;
  }
  set duration(value) {
    this.setAttribute('duration', value);
  }
  get easing() {
    return this.getAttribute('easing');
  }
  set easing(value) {
    this.setAttribute('easing', value);
  }
  get enddelay() {
    return parseFloat(this.getAttribute('enddelay')) || 0;
  }
  set enddelay(value) {
    this.setAttribute('enddelay', value);
  }
  get iterationstart() {
    return parseFloat(this.getAttribute('iterationstart')) || 0;
  }
  set iterationstart(value) {
    this.setAttribute('iterationstart', value);
  }
  get iterations() {
    return parseFloat(this.getAttribute('iterations'));
  }
  set iterations(value) {
    this.setAttribute('iterations', value);
  }
  get playbackrate() {
    return parseFloat(this.getAttribute('playbackrate'));
  }
  set playbackrate(value) {
    this.setAttribute('playbackrate', value);
  }
  get currenttime() {
    return parseFloat(this.getAttribute('currenttime'));
  }
  set currenttime(value) {
    this.setAttribute('currenttime', value);
  }
  get starttime() {
    return parseFloat(this.getAttribute('starttime'));
  }
  set starttime(value) {
    this.setAttribute('starttime', value);
  }
  //
  //handle values and changes to the attributes
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'enable') {

    }
    if (attrName === 'keyframes') {
      // get timing options object
      // 
      // create new KeyfromeEffect from joing keyframes object and options object, null target
      // create/get new timeline
      // create new animation(KeyFrameEffect, timeline)
    }
    if (attrName === 'control' && newVal) {
      this._handleControl(newVal);
    }
    if (attrName === 'seek' && newVal) {
      this._handleSeek(parseFloat(newVal));
    }
    if (attrName === 'delay') {
      // add to timing object
    }
    if (attrName === 'direction') {
      // add to timing object
    }
    if (attrName === 'duration') {
      // add to timing object
    }
    if (attrName === 'easing') {
      // add to timing object
    }
    if (attrName === 'enddelay') {
      // add to timing object
    }
    if (attrName === 'iterationstart') {
      // add to timing object
    }
    if (attrName === 'iterations') {
      // add to timing object
    }
    if (attrName === 'playbackrate') {
      // check animation object complete
      // animation.playbackrate = 1
      // animation.play
    }
    if (attrName === 'starttime') {
      // check animation object complete
      // animation.starttime = 
    }
    if (attrName === 'currenttime') {
      // reset animations and pause them
      // animations.forEach((animation) => {
      //  animation.pause();
      //  animation.currenttime=0; // "start page over option?"
      //})
    }
  }

  //Handle play/pause
  _handleControl(control) {
    const animations = Array.from(this.shadowRoot.querySelectorAll('span'))
      .map(span => span.getAnimations()[0])
      .filter(a => a);
    if (control === 'play') {
      animations.forEach(animation => animation.play());
    } else if (control === 'pause') {
      animations.forEach(animation => animation.pause());
    }
  }

  //Handle seek time
  _handleSeek(time) {
    const animations = Array.from(this.shadowRoot.querySelectorAll('span'))
      .map(span => span.getAnimations()[0])
      .filter(a => a);
    animations.forEach(animation => {
      if (animation) {
        animation.currentTime = time;
      }
    });
  }
}

customElements.define('moving-text', MovingText);

// create word animations 
const wordAnimations = words
  .map(w => createAndPauseAnimation(w));

function createAndPauseAnimation(element) {
  if (!element || element.dataset.enable === 'false') return null;

  const keyframes = element.dataset.keyframes;
  const options = {
    delay: element.dataset.delay,
    endDelay: element.dataset.endDelay,
    direction: element.dataset.direction,
    duration: element.dataset.duration,
    easing: element.dataset.easing,
    iterationStart: element.dataset.iterationStart,
    iterations: element.dataset.iterations,
  };

  const effect = new KeyframeEffect(element, keyframes, options);
  const animation = new Animation(effect);
  animation.id = element.id + 'Animation';
  animation.playbackRate = parseFloat(element.dataset.playbackRate);
  animation.currentTime = parseFloat(element.dataset.currentTime);
  animation.startTime = parseFloat(element.dataset.startTime);

  return animation;
}
