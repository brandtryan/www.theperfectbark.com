
//This file will be the web component
//It only needs to run, not be imported by main.js
class WordAnima extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        @import url('../assets/css/component.css');
      </style>
    `;
  }

  //define the OBSERVED attributes
  static get observedAttributes() {
    return [
      'keyframes',
      'timing',
      'play',
      'pause',
      'seek',
      'reverse',
      'currenttime',
      'playbackrate'
    ];
  }
  //
  //create properties to sync with OBSERVED attributes (REFLECT)
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
    this.setAttribute('timing', value);
  }
  get play() {
    return this.getAttribute('play');
  }
  set play(value) {
    this.setAttribute('play', value)
  }
  get pause() {
    return this.getAttribute('pause');
  }
  set pause(value) {
    this.setAttribute('pause', value)
  }
  get seek() {
    return this.getAttribute('seek');
  }
  set seek(value) {
    this.setAttribute('seek', value)
  }
  get reverse() {
    return this.getAttribute('reverse');
  }
  set reverse(value) {
    this.setAttribute('reverse', value)
  }
  get currenttime() {
    return this.getAttribute('currenttime');
  }
  set currenttime(value) {
    this.setAttribute('currenttime', value)
  }
  get playbackrate() {
    return this.getAttribute('playbackrate');
  }
  set playbackrate(value) {
    this.setAttribute('playbackrate', value)
  }

  //
  //handle values and changes to the attributes
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'keyframes') {
      // get timing options object
      // const keyframes = JSON.parse(newVal);
      // create new KeyfromeEffect from joing keyframes object and options object, null target
      // create new animation(KeyFrameEffect, timeline)
    }
    if (attrName === 'timing') {
      // pass to new animation
      // const timing = JSON.parse(newVal);

    }
    if (attrName === 'play') {

    }
    if (attrName === 'pause') {

    }
    if (attrName === 'seek') {

    }
    if (attrName === 'reverse') {

    }
    if (attrName === 'currenttime') {
      // reset animations and pause them
      // animations.forEach((animation) => {
      //  animation.pause();
      //  animation.currenttime=0; // "start page over option?"
      //})
    }
    if (attrName === 'playbackrate') {
      // check animation object complete
      // animation.playbackrate = 1
      // animation.play
    }
  }

  connectedCallback() {
    const docTime = this.ownerDocument.timeline.currentTime;
    // Internal State references and values required to manage animation:
    //Text Node to be animated
    const word = new Text(this.getAttribute('text'));
    this.shadowRoot.append(word);

    const keyframes = JSON.parse(this.keyframes);
    const timing = JSON.parse(this.timing);

    const effect = new KeyframeEffect(this, keyframes, timing);
    const anima = new Animation(effect);
    // console.log(anima.ready.);
    anima.ready.then(console.log(`Animation is ready!`));



  }

  // //Handle play/pause
  // _handleControl(control) {
  //   wordAnimations
  //     .map(span => span.getAnimations()[0])
  //     .filter(a => a);
  //   if (control === 'play') {
  //     wordAnimations.forEach(animation => animation.play());
  //   } else if (control === 'pause') {
  //     wordAnimations.forEach(animation => animation.pause());
  //   }
  // }

  // //Handle seek time
  // _handleSeek(time) {
  //   const animations = Array.from(this.shadowRoot.querySelectorAll('span'))
  //     .map(span => span.getAnimations()[0])
  //     .filter(a => a);
  //   animations.forEach(animation => {
  //     if (animation) {
  //       animation.currentTime = time;
  //     }
  //   });
  // }

  // //Handle seek time
  // _handleSeek(time) {
  //   const animations = Array.from(this.shadowRoot.querySelectorAll('span'))
  //     .map(span => span.getAnimations()[0])
  //     .filter(a => a);
  //   animations.forEach(animation => {
  //     if (animation) {
  //       animation.currentTime = time;
  //     }
  //   });
  // }
}

customElements.define('word-anima', WordAnima);
