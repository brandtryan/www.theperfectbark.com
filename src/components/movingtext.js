//This file will be the web component
//It only needs to run, not be imported by main.js
import {
  pages,
  lines,
  words,
  s00Words,
  s01Words,
  s02Words,
  s03Words,
  s04Words,
  s05Words,
  s06Words,
  s07Words,
  s08Words,
  s09Words,
  s10Words,
  s11Words,
  s12Words,
  s13Words,
  s14Words,
  s15Words,
  s16Words,
  s17Words,
  s18Words,
  s19Words,
  s20Words,
  s21Words,
  s22Words,
  s23Words,
  s24Words,
  s25Words,
  s26Words,
  s27Words,
  s28Words,
  s29Words,
  s30Words,
  s31Words,
  s32Words,
  s33Words,
  s34Words,
  s00Lines,
  s01Lines,
  s02Lines,
  s03Lines,
  s04Lines,
  s05Lines,
  s06Lines,
  s07Lines,
  s08Lines,
  s09Lines,
  s10Lines,
  s11Lines,
  s12Lines,
  s13Lines,
  s14Lines,
  s15Lines,
  s16Lines,
  s17Lines,
  s18Lines,
  s19Lines,
  s20Lines,
  s21Lines,
  s22Lines,
  s23Lines,
  s24Lines,
  s25Lines,
  s26Lines,
  s27Lines,
  s28Lines,
  s29Lines,
  s30Lines,
  s31Lines,
  s32Lines,
  s33Lines,
  s34Lines
} from '../modules/parentModule';
import { createAndPauseAnimation } from '../modules/parentModule';

class MovingText extends HTMLElement {
  constructor() {
    super();

  }

  connectedCallback() {
    const s00Words = words.forEach(w => w.id.includes('s00'));
    s00Words.forEach(w => createAndPauseAnimation(w));
    const s00Animas = s00Words.map(w => w.getAnimations());
    console.log(s00Animas);

  }


  disconnectedCallback() {

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
  get play() {
    return this.getAttribute('play');
  }
  set play(value) {
    this.setAttribute('play', value);
  }
  get pause() {
    return this.getAttribute('pause');
  }
  set pause(value) {
    this.setAttribute('pause', value);
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


  //define the allowed attributes
  static get observedAttributes() {
    return ['play', 'pause', 'currenttime', 'reverse', 'updateplaybackrate', 'getcomputedtiming', 'keyframes', 'delay', 'direction', 'duration', 'easing', 'enddelay', 'iterationstart', 'iterations', 'playbackrate', 'ready', 'finished', 'pending', 'playstate', 'oncancel', 'onfinish', 'onremove', 'starttime'];
  }

  //
  //handle values and changes to the attributes
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'timeline') {

    }
    if (attrName === 'keyframes') {
      // get timing options object
      // 
      // create new KeyfromeEffect from joing keyframes object and options object, null target
      // create/get new timeline
      // create new animation(KeyFrameEffect, timeline)
    }
    if (attrName === 'play') {
      // animation.newVal();
    }
    if (attrName === 'pause') {
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

// export function createAndPauseAnimation(element) {
//   if (!element) return null;

//   const timeline = new DocumentTimeline({
//     originTime: document.timeline.currentTime,
//   });

//   const keyframes = JSON.parse(element.getAttribute(keyframes));
//   const options = {
//     delay: parseFloat(element.dataset.delay),
//     direction: element.dataset.direction,
//     duration: parseFloat(element.dataset.duration),
//     easing: element.dataset.easing,
//     enddelay: parseFloat(element.dataset.enddelay),
//     fill: element.dataset.fill,
//     iterationstart: parseFloat(element.dataset.iterationstart),
//     iterations: parseFloat(element.dataset.iterations),
//     composite: element.dataset.composite,
//     iterationcomposite: element.dataset.iterationcomposite
//   };

//   const effect = new KeyframeEffect(element, keyframes, options);
//   const animation = new Animation(effect, timeline);
//   animation.id = element.id + 'Animation';

//   animation.pause();

//   return animation;
// }
