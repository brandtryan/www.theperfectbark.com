//This file will be the web component
//It only needs to run, not be imported by main.js
import { words } from "../modules/elements";
import { createAndPauseAnimation } from "../modules/createAndPauseAnimation";

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
    return ['timeline', 'id', 'pauseplay', 'keyframes', 'delay', 'direction',
      'duration', 'easing', 'enddelay', 'iterationstart', 'iterations', 'playbackrate',
      'currenttime', 'starttime'];
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
  get pauseplay() {
    return this.getAttribute('pauseplay');
  }
  set pauseplay(value) {
    this.setAttribute('pauseplay', value);
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

  connectedCallback() {
    const wordAnimations = [];

    for (let word of words) {
      wordAnimations.push(createAndPauseAnimation(word));
    }

  }

  disconnectedCallback() {

  }
  //
  //handle values and changes to the attributes
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'timeline') {
      newVal = new DocumentTimeline({
        originTime: document.timeline.currenttime,
      })
      console.log(`Assigned timeline ${this.id}Timeline!
        ${this.id}Timeline currenttime: ${newVal.currenttime}`,
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
    if (attrName === 'pauseplay') {
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
}

customElements.define('moving-text', MovingText);
