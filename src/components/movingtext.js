const mobileFirstTemplate = document.createElement('template');
mobileFirstTemplate.innerHTML = `
  <style>
    :host {
      display: block;
      border: 1px solid cornflowerblue;
      width: 52ch;
      height: 100vh;
      content-visibility: auto;
      contain-intrinsic-inline-size: 52ch;
      contain-intrinsic-block-size: 100vh;
      place-self: center;
      place-content: center;
      font-size: clamp(1.4rem, 0.75vw + 1.24rem, 2.2rem);
      white-space: nowrap;
      overflow: visible;
      padding: 0;
      scroll-snap-stop: always;
    }

    ::slotted(p) {
      border: 1px dashed lightcoral;
      margin-block-start: 0;
      margin-block-end: 0;
      padding-left: 2.5rem;
      line-height: 1.5;
    }
  </style>
  <slot></slot>
`;

class MovingText extends HTMLElement {
  constructor() {
    super();
    this.animationDuration = 1000;
    this.staggerDelay = 200;
    // const kitchenSink = document.createElement('slot');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    let clone = mobileFirstTemplate.content.cloneNode(true);
    shadowRoot.append(clone);

    //handle slots

    //handle events

  }

  connectedCallback() {
    // const s00Words = words.forEach(w => w.id.includes('s00'));
    // s00Words.forEach(w => createAndPauseAnimation(w));
    // const s00Animas = s00Words.map(w => w.getAnimations());
    // console.log(s00Animas);

    this.animateText();
  }

  //define the allowed attributes
  static get observedAttributes() {
    return [
      'wordid',
      'play',
      'pause',
      'currenttime',
      'reverse',
      'cancel',
      'finish',
      'remove',
      'updateplaybackrate',
      'getcomputedtiming',
      'keyframes',
      'timing',
      'target',
      'playbackrate',
      'ready',
      'finished',
      'pending',
      'playstate',
      'oncancel',
      'onfinish',
      'onremove',
      'animationid',
      'starttime',
      'timeline'
    ];
  }

  // create properties to sync with attributes
  get wordid() {                        //custom id for each word
    return this.getAttribute('wordid');
  }
  get play() {                          //Animation Interface - method
    return this.getAttribute('play');
  }
  set play(value) { //Boolean           //Animation Interface - method 
    this.setAttribute('play', value);
  }
  get pause() {                         //Animation Interface - method 
    return this.getAttribute('pause');
  }
  set pause(value) { //Boolean         //Animation Interface - method 
    this.setAttribute('pause', value);
  }
  get currenttime() { //milliseconds   //Animation Interface - property
    return parseFloat(this.getAttribute('currenttime'));
  }
  set currenttime(value) {//milliseconds   //Animation Interface - property 
    this.setAttribute('currenttime', value);
  }
  set reverse(value) {//Boolean         //Animation Interface - method  
    this.setAttribute('reverse', value);
  }
  set cancel(value) { //Boolean         //Animation Interface - method
    this.setAttribute('cancel', value);
  }
  set finish(value) { //Boolean         //Animation Interface - method
    this.setAttribute('finish', value);
  }
  set remove(value) { //Boolean         //Animation Interface - method  
    this.setAttribute('remove', value);
  }
  set updateplaybackrate(value) { //Float     //Animation Interface - method
    this.setAttribute('updateplaybackrate', value);
  }
  get getcomputedtiming() {           // AnimationEffect Interface - method
    return this.getAttribute('getcomputedtiming');
  }
  get keyframes() {
    return this.getAttribute('keyframes');
  }
  set keyframes(value) {            // KeyframEffect Interface - method  
    this.setAttribute('keyframes', value);
  }
  get timing() {
    return this.getAttribute('timing');
  }
  set timing(value) {              // AnimationEffect Interface - method 
    this.setAttribute('timing', value);
  }
  get target() {
    return this.getAttribute('target');
  }
  set target(value) {            // KeyframEffect Interface - method  
    this.setAttribute('target', value);
  }
  get playbackrate() {
    return this.getAttribute('playbackrate');
  }
  set playbackrate(value) {       // Animation Interface - property
    this.setAttribute('playbackrate', value);
  }
  get ready() {  //Boolean       // Animation Interface - promise 
    return this.getAttribute('ready');
  }
  get finished() {//Boolean       // Animation Interface - promise  
    return this.getAttribute('finished');
  }
  get pending() {//Boolean       // Animation Interface - property
    return this.getAttribute('pending');
  }
  get playstate() {             // Animation Interface - property
    return this.getAttribute('playstate');
  }
  get oncancel() {
    return this.getAttribute('oncancel');
  }
  set oncancel(value) {     // Animation Interface - event handler 
    this.setAttribute('oncancel', value);
  }
  get onfinish() {
    return this.getAttribute('onfinish');
  }
  set onfinish(value) {     // Animation Interface - event handler 
    this.setAttribute('onfinish', value);
  }
  get onremove() {
    return this.getAttribute('onremove');
  }
  set onremove(value) {      // Animation Interface - event handler 
    this.setAttribute('onremove', value);
  }
  get animationid() {
    return this.getAttribute('animationid');
  }
  set animationid(value) {    // Animation Interface - property 
    this.setAttribute('animationid', value);
  }
  get starttime() {
    return parseFloat(this.getAttribute('starttime'));
  }
  set starttime(value) {        //Animation Interface 
    this.setAttribute('starttime', value);
  }
  get timeline() {
    return this.getAttribute('timeline');
  }
  set timeline(value) {        //Animation Interface 
    this.setAttribute('timeline', value);
  }

  //handle values and changes to the attributes
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'wordid') {

    }
    if (attrName === 'play') {
      // animation.newVal();
    }
    if (attrName === 'pause') {
      // animation.newVal();
    }
    if (attrName === 'currenttime') {
      // reset animations and pause them
      // animations.forEach((animation) => {
      //  animation.pause();
      //  animation.currenttime=0; // "start page over option?"
      //})
    }
    if (attrName === 'reverse') {

    }
    if (attrName === 'cancel') {

    }
    if (attrName === 'finish') {

    }
    if (attrName === 'remove') {

    }
    if (attrName === 'updateplaybackrate') {

    }
    if (attrName === 'getcomputedtiming') {

    }
    if (attrName === 'keyframes') {
      // get timing options object
      //
      // create new KeyfromeEffect from joing keyframes object and options object, null target
      // create/get new timeline
      // create new animation(KeyFrameEffect, timeline)
    }
    if (attrName === 'options') {

    }
    if (attrName === 'target') {

    }
    if (attrName === 'playbackrate') {
      // check animation object complete
      // animation.playbackrate = 1
      // animation.play
    }
    if (attrName === 'ready') {

    }
    if (attrName === 'finished') {

    }
    if (attrName === 'pending') {

    }
    if (attrName === 'playstate') {

    }
    if (attrName === 'oncancel') {

    }
    if (attrName === 'onfinish') {

    }
    if (attrName === 'onremove') {

    }
    if (attrName === 'animationid') {

    }
    if (attrName === 'starttime') {
      // check animation object complete
      // animation.starttime =
    }
    if (attrName === 'timeline') {

    }
  }


  animateText() {
    const words = this.querySelectorAll('[wordid]');

    words.forEach((word, index) => {
      setTimeout(() => {
        this.animateWord(word);
      }, index * this.staggerDelay);
    });
  }

  animateWord(word) {
    const event = new CustomEvent('animate-word', {
      detail: {
        wordid: word.getAttribute('wordid'),
        animationParams: {
          keyframes: JSON.parse(word.getAttribute('keyframes')),
          options: JSON.parse(word.getAttribute('options')),
        },
      },
      bubbles: true,
      composed: true,
    });
    if (word.getAttribute('play') === 'false' && word.getAttribute('pause') === 'true') {
      word.dispatchEvent(event);
    }
  }
}

customElements.define('moving-text', MovingText);

document.addEventListener('animate-word', (event) => {
  const { wordid, animationParams } = event.detail;
  const targetWord = document.querySelector(`[wordid="${wordid}"]`);

  if (targetWord) {
    try {
      targetWord.animate(animationParams.keyframes, animationParams.options);
    } catch (error) {
      console.error(`Animation failed for word ${wordid}:`, error);
    }
  };
});


