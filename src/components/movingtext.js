//This file will be the web component
//It only needs to run, not be imported by main.js
const template = document.createElement('template');
template.innerHTML = `
  <style>
  :host {
    display: block;
    padding: 0;
  }
  .root {
    border: 1px solid red;
    place-content: center;
    place-self: center;
    width: 49ch;
    height: 100vh;
    content-visibility: auto;
    contain-intrinsic-width: 49ch;
    contain-intrinsic-height: 100vh;
    font-size: clamp(1.4rem, 0.75vw + 1.24rem, 2.2rem);
    white-space: nowrap;
    overflow: visible;
    scroll-snap-stop: always;
  }
  ::slotted(p) {
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: .3
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
    return ['timeline', 'id', 'pausePlay', 'keyframes', 'delay', 'direction',
      'duration', 'easing', 'endDelay', 'iterationStart', 'iterations', 'playbackRate',
      'currentTime', 'startTime'];
  }
  //
  //create properties to sync with attributes
  get id() {
    return this.getAttribute('id');
  }
  get timeline() {
    return this.getAttribute('timeline');
  }
  set timeline(value) {
    this.setAttribute('timeline', value)
  }
  get pausePlay() {
    return this.getAttribute('pausePlay');
  }
  set pausePlay(value) {
    this.setAttribute('pausePlay', value);
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
  get endDelay() {
    return parseFloat(this.getAttribute('endDelay')) || 0;
  }
  set endDelay(value) {
    this.setAttribute('endDelay', value);
  }
  get iterationStart() {
    return parseFloat(this.getAttribute('iterationStart')) || 0;
  }
  set iterationStart(value) {
    this.setAttribute('iterationStart', value);
  }
  get iterations() {
    return parseFloat(this.getAttribute('iterations'));
  }
  set iterations(value) {
    this.setAttribute('iterations', value);
  }
  get playbackRate() {
    return parseFloat(this.getAttribute('playbackRate'));
  }
  set playbackRate(value) {
    this.setAttribute('playbackRate', value);
  }
  get currentTime() {
    return parseFloat(this.getAttribute('currentTime'));
  }
  set currentTime(value) {
    this.setAttribute('currentTime', value);
  }
  get startTime() {
    return parseFloat(this.getAttribute('startTime'));
  }
  set startTime(value) {
    this.setAttribute('startTime', value);
  }
  //
  //handle values and changes to the attributes
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'timeline') {
      newVal = new DocumentTimeline({
        originTime: document.timeline.currentTime,
      })
      console.log(`Assigned timeline ${this.id}Timeline!
        ${this.id}Timeline currentTime: ${newVal.currentTime}`,
        newVal
      );
    }
    if (attrName === 'keyframes') {
      // get timing options object
      // 
      // create new KeyfromeEffect from joing keyframes object and options object, null target
      // create/get new timeline
      // create new animation(KeyFrameEffect, timeline)
    }
    if (attrName === 'pausePlay') {
      // animation.newVal();
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
    if (attrName === 'endDelay') {
      // add to timing object
    }
    if (attrName === 'iterationStart') {
      // add to timing object
    }
    if (attrName === 'iterations') {
      // add to timing object
    }
    if (attrName === 'playbackRate') {
      // check animation object complete
      // animation.playbackRate = 1
      // animation.play
    }
    if (attrName === 'startTime') {
      // check animation object complete
      // animation.startTime = 
    }
    if (attrName === 'currentTime') {
      // reset animations and pause them
      // animations.forEach((animation) => {
      //  animation.pause();
      //  animation.currentTime=0; // "start page over option?"
      //})
    }
  }
}

customElements.define('moving-text', MovingText);
