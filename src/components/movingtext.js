class MovingText extends HTMLElement {
  constructor() {
    super();
    this.animationDuration = 1000;
    this.staggerDelay = 200;
    const kitchenSink = document.createElement('slot');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(kitchenSink);

  }

  connectedCallback() {
    // const s00Words = words.forEach(w => w.id.includes('s00'));
    // s00Words.forEach(w => createAndPauseAnimation(w));
    // const s00Animas = s00Words.map(w => w.getAnimations());
    // console.log(s00Animas);
    this.animateText();
  }

  // create properties to sync with attributes
  get wordid() {
    return this.getAttribute('wordid');
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
  get currenttime() {
    return parseFloat(this.getAttribute('currenttime'));
  }
  set currenttime(value) {
    this.setAttribute('currenttime', value);
  }
  get reverse() {
    return this.getAttribute('reverse');
  }
  set reverse(value) {
    this.setAttribute('reverse', value);
  }
  get cancel() {
    return this.getAttribute('cancel');
  }
  set cancel(value) {
    this.setAttribute('cancel', value);
  }
  get finish() {
    return this.getAttribute('finish');
  }
  set finish(value) {
    this.setAttribute('finish', value);
  }
  get remove() {
    return this.getAttribute('remove');
  }
  set remove(value) {
    this.setAttribute('remove', value);
  }
  get updateplaybackrate() {
    return this.getAttribute('updateplaybackrate');
  }
  set updateplaybackrate(value) {
    this.setAttribute('updateplaybackrate', value);
  }
  get getcomputedtiming() {
    return this.getAttribute('getcomputedtiming');
  }
  get keyframes() {
    return this.getAttribute('keyframes');
  }
  set keyframes(value) {
    this.setAttribute('keyframes', value);
  }
  get options() {
    return this.getAttribute('options');
  }
  set options(value) {
    this.setAttribute('options', value);
  }
  get playbackrate() {
    return this.getAttribute('playbackrate');
  }
  set playbackrate(value) {
    this.setAttribute('playbackrate', value);
  }
  get ready() {
    return this.getAttribute('ready');
  }
  set ready(value) {
    this.setAttribute('ready', value);
  }
  get finished() {
    return this.getAttribute('finished');
  }
  set finished(value) {
    this.setAttribute('finished', value);
  }
  get pending() {
    return this.getAttribute('pending');
  }
  set pending(value) {
    this.setAttribute('pending', value);
  }
  get playstate() {
    return this.getAttribute('playstate');
  }
  set playstate(value) {
    this.setAttribute('playstate', value);
  }
  get oncancel() {
    return this.getAttribute('oncancel');
  }
  set oncancel(value) {
    this.setAttribute('oncancel', value);
  }
  get onfinish() {
    return this.getAttribute('onfinish');
  }
  set onfinish(value) {
    this.setAttribute('onfinish', value);
  }
  get onremove() {
    return this.getAttribute('onremove');
  }
  set onremove(value) {
    this.setAttribute('onremove', value);
  }
  get animationid() {
    return this.getAttribute('animationid');
  }
  set animationid(value) {
    this.setAttribute('animationid', value);
  }
  get starttime() {
    return parseFloat(this.getAttribute('starttime'));
  }
  set starttime(value) {
    this.setAttribute('starttime', value);
  }

  //define the allowed attributes
  static get observedAttributes() {
    return ['timeline', 'play', 'pause', 'currenttime', 'reverse', 'cancel', 'finish', 'remove', 'updateplaybackrate', 'keyframes', 'options', 'playbackrate', 'ready', 'finished', 'pending', 'playstate', 'oncancel', 'onfinish', 'onremove', 'starttime'];
  }

  //
  //handle values and changes to the attributes
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'timeline') {

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
    if (attrName === 'keyframes') {
      // get timing options object
      //
      // create new KeyfromeEffect from joing keyframes object and options object, null target
      // create/get new timeline
      // create new animation(KeyFrameEffect, timeline)
    }
    if (attrName === 'options') {

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
    if (attrName === 'starttime') {
      // check animation object complete
      // animation.starttime =
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

    word.dispatchEvent(event);
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

// import {
//   pages,
//   lines,
//   words,
//   s00Words,
//   s01Words,
//   s02Words,
//   s03Words,
//   s04Words,
//   s05Words,
//   s06Words,
//   s07Words,
//   s08Words,
//   s09Words,
//   s10Words,
//   s11Words,
//   s12Words,
//   s13Words,
//   s14Words,
//   s15Words,
//   s16Words,
//   s17Words,
//   s18Words,
//   s19Words,
//   s20Words,
//   s21Words,
//   s22Words,
//   s23Words,
//   s24Words,
//   s25Words,
//   s26Words,
//   s27Words,
//   s28Words,
//   s29Words,
//   s30Words,
//   s31Words,
//   s32Words,
//   s33Words,
//   s34Words,
//   s00Lines,
//   s01Lines,
//   s02Lines,
//   s03Lines,
//   s04Lines,
//   s05Lines,
//   s06Lines,
//   s07Lines,
//   s08Lines,
//   s09Lines,
//   s10Lines,
//   s11Lines,
//   s12Lines,
//   s13Lines,
//   s14Lines,
//   s15Lines,
//   s16Lines,
//   s17Lines,
//   s18Lines,
//   s19Lines,
//   s20Lines,
//   s21Lines,
//   s22Lines,
//   s23Lines,
//   s24Lines,
//   s25Lines,
//   s26Lines,
//   s27Lines,
//   s28Lines,
//   s29Lines,
//   s30Lines,
//   s31Lines,
//   s32Lines,
//   s33Lines,
//   s34Lines
// } from '../modules/parentModule';
