
//This file will be the web component
//It only needs to run, not be imported by main.js
// import { wordAnimations, createAndPauseAnimation } from "../modules/parentModule";
// import '../assets/css/component.css'

const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url('../assets/css/component.css');
  </style>
`;


class WordAnima extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }

  //define the allowed attributes
  static get observedAttributes() {
    return [
      'id',
      'enable',
      'keyframes',
      'timing',
      'play',
      'pause',
      'reverse',
      'currenttime',
      'playbackrate',
      'text'
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
  get keyframes() {
    return this.getAttribute('keyframes');
  }
  set keyframes(value) {
    this.setAttribute('keyframes', value);
  }
  get timing() {
    return this.getAttribute('timing');
  }
  set timing(value) {
    return JSON.parse(this.setAttribute('timing'));
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

customElements.define('word-anima', WordAnima);
