//This file will be the web component
//It only needs to run, not be imported by main.js
// import { wordAnimations, createAndPauseAnimation } from "../modules/parentModule";
// import '../assets/css/component.css'

const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url('../assets/css/component.css');
  </style>
  <div>
    <p>
      <slot name="l00w00">ShipIt!</slot>
      <slot name="l00w01">ShipIt!</slot>
      <slot name="l00w02">ShipIt!</slot>
      <slot name="l00w03">ShipIt!</slot>
      <slot name="l00w04">ShipIt!</slot>
      <slot name="l00w05">ShipIt!</slot>
      <slot name="l00w06">ShipIt!</slot>
      <slot name="l00w07">ShipIt!</slot>
      <slot name="l00w08">ShipIt!</slot>
      <slot name="l00w09">ShipIt!</slot>
      <slot name="l00w10">ShipIt!</slot>
      <slot name="l00w11">ShipIt!</slot>
      <slot name="l00w12">ShipIt!</slot>
      <slot name="l00w13">ShipIt!</slot>
      <slot name="l00w14">ShipIt!</slot>
      <slot name="l00w15">ShipIt!</slot>
      <slot name="l00w16">ShipIt!</slot>
      <slot name="l00w17">ShipIt!</slot>
    </p>
    <p>
      <slot name="l01w00">ShipIt!</slot>
      <slot name="l01w01">ShipIt!</slot>
      <slot name="l01w02">ShipIt!</slot>
      <slot name="l01w03">ShipIt!</slot>
      <slot name="l01w04">ShipIt!</slot>
      <slot name="l01w05">ShipIt!</slot>
      <slot name="l01w06">ShipIt!</slot>
      <slot name="l01w07">ShipIt!</slot>
      <slot name="l01w08">ShipIt!</slot>
      <slot name="l01w09">ShipIt!</slot>
      <slot name="l01w10">ShipIt!</slot>
      <slot name="l01w11">ShipIt!</slot>
      <slot name="l01w12">ShipIt!</slot>
      <slot name="l01w13">ShipIt!</slot>
      <slot name="l01w14">ShipIt!</slot>
      <slot name="l01w15">ShipIt!</slot>
      <slot name="l01w16">ShipIt!</slot>
      <slot name="l01w17">ShipIt!</slot>
    </p>
    <p>
      <slot name="l02w00">ShipIt!</slot>
      <slot name="l02w01">ShipIt!</slot>
      <slot name="l02w02">ShipIt!</slot>
      <slot name="l02w03">ShipIt!</slot>
      <slot name="l02w04">ShipIt!</slot>
      <slot name="l02w05">ShipIt!</slot>
      <slot name="l02w06">ShipIt!</slot>
      <slot name="l02w07">ShipIt!</slot>
      <slot name="l02w08">ShipIt!</slot>
      <slot name="l02w09">ShipIt!</slot>
      <slot name="l02w10">ShipIt!</slot>
      <slot name="l02w11">ShipIt!</slot>
      <slot name="l02w12">ShipIt!</slot>
      <slot name="l02w13">ShipIt!</slot>
      <slot name="l02w14">ShipIt!</slot>
      <slot name="l02w15">ShipIt!</slot>
      <slot name="l02w16">ShipIt!</slot>
      <slot name="l02w17">ShipIt!</slot>
    </p>
    <p>
      <slot name="l03w00">ShipIt!</slot>
      <slot name="l03w01">ShipIt!</slot>
      <slot name="l03w02">ShipIt!</slot>
      <slot name="l03w03">ShipIt!</slot>
      <slot name="l03w04">ShipIt!</slot>
      <slot name="l03w05">ShipIt!</slot>
      <slot name="l03w06">ShipIt!</slot>
      <slot name="l03w07">ShipIt!</slot>
      <slot name="l03w08">ShipIt!</slot>
      <slot name="l03w09">ShipIt!</slot>
      <slot name="l03w10">ShipIt!</slot>
      <slot name="l03w11">ShipIt!</slot>
      <slot name="l03w12">ShipIt!</slot>
      <slot name="l03w13">ShipIt!</slot>
      <slot name="l03w14">ShipIt!</slot>
      <slot name="l03w15">ShipIt!</slot>
      <slot name="l03w16">ShipIt!</slot>
      <slot name="l03w17">ShipIt!</slot>
    </p>
    <p>
      <slot name="l04w00">ShipIt!</slot>
      <slot name="l04w01">ShipIt!</slot>
      <slot name="l04w02">ShipIt!</slot>
      <slot name="l04w03">ShipIt!</slot>
      <slot name="l04w04">ShipIt!</slot>
      <slot name="l04w05">ShipIt!</slot>
      <slot name="l04w06">ShipIt!</slot>
      <slot name="l04w07">ShipIt!</slot>
      <slot name="l04w08">ShipIt!</slot>
      <slot name="l04w09">ShipIt!</slot>
      <slot name="l04w10">ShipIt!</slot>
      <slot name="l04w11">ShipIt!</slot>
      <slot name="l04w12">ShipIt!</slot>
      <slot name="l04w13">ShipIt!</slot>
      <slot name="l04w14">ShipIt!</slot>
      <slot name="l04w15">ShipIt!</slot>
      <slot name="l04w16">ShipIt!</slot>
      <slot name="l04w17">ShipIt!</slot>
    </p>
    <p>
      <slot name="l05w00">ShipIt!</slot>
      <slot name="l05w01">ShipIt!</slot>
      <slot name="l05w02">ShipIt!</slot>
      <slot name="l05w03">ShipIt!</slot>
      <slot name="l05w04">ShipIt!</slot>
      <slot name="l05w05">ShipIt!</slot>
      <slot name="l05w06">ShipIt!</slot>
      <slot name="l05w07">ShipIt!</slot>
      <slot name="l05w08">ShipIt!</slot>
      <slot name="l05w09">ShipIt!</slot>
      <slot name="l05w10">ShipIt!</slot>
      <slot name="l05w11">ShipIt!</slot>
      <slot name="l05w12">ShipIt!</slot>
      <slot name="l05w13">ShipIt!</slot>
      <slot name="l05w14">ShipIt!</slot>
      <slot name="l05w15">ShipIt!</slot>
      <slot name="l05w16">ShipIt!</slot>
      <slot name="l05w17">ShipIt!</slot>
    </p>
    <p>
      <slot name="l06w00">ShipIt!</slot>
      <slot name="l06w01">ShipIt!</slot>
      <slot name="l06w02">ShipIt!</slot>
      <slot name="l06w03">ShipIt!</slot>
      <slot name="l06w04">ShipIt!</slot>
      <slot name="l06w05">ShipIt!</slot>
      <slot name="l06w06">ShipIt!</slot>
      <slot name="l06w07">ShipIt!</slot>
      <slot name="l06w08">ShipIt!</slot>
      <slot name="l06w09">ShipIt!</slot>
      <slot name="l06w10">ShipIt!</slot>
      <slot name="l06w11">ShipIt!</slot>
      <slot name="l06w12">ShipIt!</slot>
      <slot name="l06w13">ShipIt!</slot>
      <slot name="l06w14">ShipIt!</slot>
      <slot name="l06w15">ShipIt!</slot>
      <slot name="l06w16">ShipIt!</slot>
      <slot name="l06w17">ShipIt!</slot>
    </p>
    <p>
      <slot name="l07w00">ShipIt!</slot>
      <slot name="l07w01">ShipIt!</slot>
      <slot name="l07w02">ShipIt!</slot>
      <slot name="l07w03">ShipIt!</slot>
      <slot name="l07w04">ShipIt!</slot>
      <slot name="l07w05">ShipIt!</slot>
      <slot name="l07w06">ShipIt!</slot>
      <slot name="l07w07">ShipIt!</slot>
      <slot name="l07w08">ShipIt!</slot>
      <slot name="l07w09">ShipIt!</slot>
      <slot name="l07w10">ShipIt!</slot>
      <slot name="l07w11">ShipIt!</slot>
      <slot name="l07w12">ShipIt!</slot>
      <slot name="l07w13">ShipIt!</slot>
      <slot name="l07w14">ShipIt!</slot>
      <slot name="l07w15">ShipIt!</slot>
      <slot name="l07w16">ShipIt!</slot>
      <slot name="l07w17">ShipIt!</slot>
    </p>
    <p>
      <slot name="l08w00">ShipIt!</slot>
      <slot name="l08w01">ShipIt!</slot>
      <slot name="l08w02">ShipIt!</slot>
      <slot name="l08w03">ShipIt!</slot>
      <slot name="l08w04">ShipIt!</slot>
      <slot name="l08w05">ShipIt!</slot>
      <slot name="l08w06">ShipIt!</slot>
      <slot name="l08w07">ShipIt!</slot>
      <slot name="l08w08">ShipIt!</slot>
      <slot name="l08w09">ShipIt!</slot>
      <slot name="l08w10">ShipIt!</slot>
      <slot name="l08w11">ShipIt!</slot>
      <slot name="l08w12">ShipIt!</slot>
      <slot name="l08w13">ShipIt!</slot>
      <slot name="l08w14">ShipIt!</slot>
      <slot name="l08w15">ShipIt!</slot>
      <slot name="l08w16">ShipIt!</slot>
      <slot name="l08w17">ShipIt!</slot>
    </p>
    <p>
      <slot name="l09w00">ShipIt!</slot>
      <slot name="l09w01">ShipIt!</slot>
      <slot name="l09w02">ShipIt!</slot>
      <slot name="l09w03">ShipIt!</slot>
      <slot name="l09w04">ShipIt!</slot>
      <slot name="l09w05">ShipIt!</slot>
      <slot name="l09w06">ShipIt!</slot>
      <slot name="l09w07">ShipIt!</slot>
      <slot name="l09w08">ShipIt!</slot>
      <slot name="l09w09">ShipIt!</slot>
      <slot name="l09w10">ShipIt!</slot>
      <slot name="l09w11">ShipIt!</slot>
      <slot name="l09w12">ShipIt!</slot>
      <slot name="l09w13">ShipIt!</slot>
      <slot name="l09w14">ShipIt!</slot>
      <slot name="l09w15">ShipIt!</slot>
      <slot name="l09w16">ShipIt!</slot>
      <slot name="l09w17">ShipIt!</slot>
    </p>
    <p>
      <slot name="l10w00">ShipIt!</slot>
      <slot name="l10w01">ShipIt!</slot>
      <slot name="l10w02">ShipIt!</slot>
      <slot name="l10w03">ShipIt!</slot>
      <slot name="l10w04">ShipIt!</slot>
      <slot name="l10w05">ShipIt!</slot>
      <slot name="l10w06">ShipIt!</slot>
      <slot name="l10w07">ShipIt!</slot>
      <slot name="l10w08">ShipIt!</slot>
      <slot name="l10w09">ShipIt!</slot>
      <slot name="l10w10">ShipIt!</slot>
      <slot name="l10w11">ShipIt!</slot>
      <slot name="l10w12">ShipIt!</slot>
      <slot name="l10w13">ShipIt!</slot>
      <slot name="l10w14">ShipIt!</slot>
      <slot name="l10w15">ShipIt!</slot>
      <slot name="l10w16">ShipIt!</slot>
      <slot name="l10w17">ShipIt!</slot>
    </p>
    <p>
      <slot name="l11w00">ShipIt!</slot>
      <slot name="l11w01">ShipIt!</slot>
      <slot name="l11w02">ShipIt!</slot>
      <slot name="l11w03">ShipIt!</slot>
      <slot name="l11w04">ShipIt!</slot>
      <slot name="l11w05">ShipIt!</slot>
      <slot name="l11w06">ShipIt!</slot>
      <slot name="l11w07">ShipIt!</slot>
      <slot name="l11w08">ShipIt!</slot>
      <slot name="l11w09">ShipIt!</slot>
      <slot name="l11w10">ShipIt!</slot>
      <slot name="l11w11">ShipIt!</slot>
      <slot name="l11w12">ShipIt!</slot>
      <slot name="l11w13">ShipIt!</slot>
      <slot name="l11w14">ShipIt!</slot>
      <slot name="l11w15">ShipIt!</slot>
      <slot name="l11w16">ShipIt!</slot>
      <slot name="l11w17">ShipIt!</slot>
    </p>
    <p>
      <slot name="l12w00">ShipIt!</slot>
      <slot name="l12w01">ShipIt!</slot>
      <slot name="l12w02">ShipIt!</slot>
      <slot name="l12w03">ShipIt!</slot>
      <slot name="l12w04">ShipIt!</slot>
      <slot name="l12w05">ShipIt!</slot>
      <slot name="l12w06">ShipIt!</slot>
      <slot name="l12w07">ShipIt!</slot>
      <slot name="l12w08">ShipIt!</slot>
      <slot name="l12w09">ShipIt!</slot>
      <slot name="l12w10">ShipIt!</slot>
      <slot name="l12w11">ShipIt!</slot>
      <slot name="l12w12">ShipIt!</slot>
      <slot name="l12w13">ShipIt!</slot>
      <slot name="l12w14">ShipIt!</slot>
      <slot name="l12w15">ShipIt!</slot>
      <slot name="l12w16">ShipIt!</slot>
      <slot name="l12w17">ShipIt!</slot>
    </p>
    <p>
      <slot name="l13w00">ShipIt!</slot>
      <slot name="l13w01">ShipIt!</slot>
      <slot name="l13w02">ShipIt!</slot>
      <slot name="l13w03">ShipIt!</slot>
      <slot name="l13w04">ShipIt!</slot>
      <slot name="l13w05">ShipIt!</slot>
      <slot name="l13w06">ShipIt!</slot>
      <slot name="l13w07">ShipIt!</slot>
      <slot name="l13w08">ShipIt!</slot>
      <slot name="l13w09">ShipIt!</slot>
      <slot name="l13w10">ShipIt!</slot>
      <slot name="l13w11">ShipIt!</slot>
      <slot name="l13w12">ShipIt!</slot>
      <slot name="l13w13">ShipIt!</slot>
      <slot name="l13w14">ShipIt!</slot>
      <slot name="l13w15">ShipIt!</slot>
      <slot name="l13w16">ShipIt!</slot>
      <slot name="l13w17">ShipIt!</slot>
    </p>
    <p>
      <slot name="l14w00">ShipIt!</slot>
      <slot name="l14w01">ShipIt!</slot>
      <slot name="l14w02">ShipIt!</slot>
      <slot name="l14w03">ShipIt!</slot>
      <slot name="l14w04">ShipIt!</slot>
      <slot name="l14w05">ShipIt!</slot>
      <slot name="l14w06">ShipIt!</slot>
      <slot name="l14w07">ShipIt!</slot>
      <slot name="l14w08">ShipIt!</slot>
      <slot name="l14w09">ShipIt!</slot>
      <slot name="l14w10">ShipIt!</slot>
      <slot name="l14w11">ShipIt!</slot>
      <slot name="l14w12">ShipIt!</slot>
      <slot name="l14w13">ShipIt!</slot>
      <slot name="l14w14">ShipIt!</slot>
      <slot name="l14w15">ShipIt!</slot>
      <slot name="l14w16">ShipIt!</slot>
      <slot name="l14w17">ShipIt!</slot>
    </p>
    <p>
      <slot name="l15w00">ShipIt!</slot>
      <slot name="l15w01">ShipIt!</slot>
      <slot name="l15w02">ShipIt!</slot>
      <slot name="l15w03">ShipIt!</slot>
      <slot name="l15w04">ShipIt!</slot>
      <slot name="l15w05">ShipIt!</slot>
      <slot name="l15w06">ShipIt!</slot>
      <slot name="l15w07">ShipIt!</slot>
      <slot name="l15w08">ShipIt!</slot>
      <slot name="l15w09">ShipIt!</slot>
      <slot name="l15w10">ShipIt!</slot>
      <slot name="l15w11">ShipIt!</slot>
      <slot name="l15w12">ShipIt!</slot>
      <slot name="l15w13">ShipIt!</slot>
      <slot name="l15w14">ShipIt!</slot>
      <slot name="l15w15">ShipIt!</slot>
      <slot name="l15w16">ShipIt!</slot>
      <slot name="l15w17">ShipIt!</slot>
    </p>
    <p>
      <slot name="l16w00">ShipIt!</slot>
      <slot name="l16w01">ShipIt!</slot>
      <slot name="l16w02">ShipIt!</slot>
      <slot name="l16w03">ShipIt!</slot>
      <slot name="l16w04">ShipIt!</slot>
      <slot name="l16w05">ShipIt!</slot>
      <slot name="l16w06">ShipIt!</slot>
      <slot name="l16w07">ShipIt!</slot>
      <slot name="l16w08">ShipIt!</slot>
      <slot name="l16w09">ShipIt!</slot>
      <slot name="l16w10">ShipIt!</slot>
      <slot name="l16w11">ShipIt!</slot>
      <slot name="l16w12">ShipIt!</slot>
      <slot name="l16w13">ShipIt!</slot>
      <slot name="l16w14">ShipIt!</slot>
      <slot name="l16w15">ShipIt!</slot>
      <slot name="l16w16">ShipIt!</slot>
      <slot name="l16w17">ShipIt!</slot>
    </p>
    <p>
      <slot name="l17w00">ShipIt!</slot>
      <slot name="l17w01">ShipIt!</slot>
      <slot name="l17w02">ShipIt!</slot>
      <slot name="l17w03">ShipIt!</slot>
      <slot name="l17w04">ShipIt!</slot>
      <slot name="l17w05">ShipIt!</slot>
      <slot name="l17w06">ShipIt!</slot>
      <slot name="l17w07">ShipIt!</slot>
      <slot name="l17w08">ShipIt!</slot>
      <slot name="l17w09">ShipIt!</slot>
      <slot name="l17w10">ShipIt!</slot>
      <slot name="l17w11">ShipIt!</slot>
      <slot name="l17w12">ShipIt!</slot>
      <slot name="l17w13">ShipIt!</slot>
      <slot name="l17w14">ShipIt!</slot>
      <slot name="l17w15">ShipIt!</slot>
      <slot name="l17w16">ShipIt!</slot>
      <slot name="l17w17">ShipIt!</slot>
    </p>
  </div>

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

customElements.define('word-anima', WordAnima);

