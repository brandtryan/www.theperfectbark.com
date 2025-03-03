//This file will be the web component
//It only needs to run, not be imported by main.js
import { wordAnimations, createAndPauseAnimation } from "../modules/parentModule";
import '../assets/css/component.css'

class AnimaScript extends HTMLElement {
  constructor() {
    super();
    let template = document.getElementById('anima-page');
    let templateContent = template.content;
    const root = this.attachShadow({ mode: 'open' });
    root.appendChild(templateContent.cloneNode(true));

    createAndPauseAnimation(wordAnimations);
    console.log(document.getAnimations());

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
  // content-visibility: auto;
  // contain-intrinsic-width: 49ch;
  // contain-intrinsic-height: 100vh;
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
    wordAnimations
      .map(span => span.getAnimations()[0])
      .filter(a => a);
    if (control === 'play') {
      wordAnimations.forEach(animation => animation.play());
    } else if (control === 'pause') {
      wordAnimations.forEach(animation => animation.pause());
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

customElements.define('anima-script', AnimaScript);

