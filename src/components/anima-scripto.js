
//This file will be the web component
//It only needs to run, not be imported by main.js

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
    }

    :host([hidden]) {
      display: none; 
    }
    
    div {
      place-content: center;
      place-self: center;
      width: 49ch;
      height: 100vh;
      content-visibility: auto;
      contain-intrinsic-width: 49ch;
      contain-intrinsic-height: 100vh;
      font-size: clamp(1.4rem, 0.75vw + 1.24rem, 2.2rem);
      margin: 0 auto;
      white-space: nowrap;
      overflow: visible;
      padding: 0;
      border: 1px solid coral;
    }
  
    p {
      margin-block-start: 0;
      margin-block-end: 0;
      padding: 0;
      border: 1px dashed lightseagreen;
    }
  </style>
  <div>
    <slot name="l00">
      <slot name="l00w00"></slot>
      <slot name="l00w01"></slot>
      <slot name="l00w02"></slot>
      <slot name="l00w03"></slot>
      <slot name="l00w04"></slot>
      <slot name="l00w05"></slot>
      <slot name="l00w06"></slot>
      <slot name="l00w07"></slot>
      <slot name="l00w08"></slot>
      <slot name="l00w09"></slot>
      <slot name="l00w10"></slot>
      <slot name="l00w11"></slot>
      <slot name="l00w12"></slot>
    </slot>
    <slot name="l01">
      <slot name="l01w00"></slot>
      <slot name="l01w01"></slot>
      <slot name="l01w02"></slot>
      <slot name="l01w03"></slot>
      <slot name="l01w04"></slot>
      <slot name="l01w05"></slot>
      <slot name="l01w06"></slot>
      <slot name="l01w07"></slot>
      <slot name="l01w08"></slot>
      <slot name="l01w09"></slot>
      <slot name="l01w10"></slot>
      <slot name="l01w11"></slot>
      <slot name="l01w12"></slot>
    </slot>
    <slot name="l02">
      <slot name="l02w00"></slot>
      <slot name="l02w01"></slot>
      <slot name="l02w02"></slot>
      <slot name="l02w03"></slot>
      <slot name="l02w04"></slot>
      <slot name="l02w05"></slot>
      <slot name="l02w06"></slot>
      <slot name="l02w07"></slot>
      <slot name="l02w08"></slot>
      <slot name="l02w09"></slot>
      <slot name="l02w10"></slot>
      <slot name="l02w11"></slot>
      <slot name="l02w12"></slot>
    </slot>
    <slot name="l03">
      <slot name="l03w00"></slot>
      <slot name="l03w01"></slot>
      <slot name="l03w02"></slot>
      <slot name="l03w03"></slot>
      <slot name="l03w04"></slot>
      <slot name="l03w05"></slot>
      <slot name="l03w06"></slot>
      <slot name="l03w07"></slot>
      <slot name="l03w08"></slot>
      <slot name="l03w09"></slot>
      <slot name="l03w10"></slot>
      <slot name="l03w11"></slot>
      <slot name="l03w12"></slot>
    </slot>
    <slot name="l04">
      <slot name="l04w00"></slot>
      <slot name="l04w01"></slot>
      <slot name="l04w02"></slot>
      <slot name="l04w03"></slot>
      <slot name="l04w04"></slot>
      <slot name="l04w05"></slot>
      <slot name="l04w06"></slot>
      <slot name="l04w07"></slot>
      <slot name="l04w08"></slot>
      <slot name="l04w09"></slot>
      <slot name="l04w10"></slot>
      <slot name="l04w11"></slot>
      <slot name="l04w12"></slot>
    </slot>
    <slot name="l05">
      <slot name="l05w00"></slot>
      <slot name="l05w01"></slot>
      <slot name="l05w02"></slot>
      <slot name="l05w03"></slot>
      <slot name="l05w04"></slot>
      <slot name="l05w05"></slot>
      <slot name="l05w06"></slot>
      <slot name="l05w07"></slot>
      <slot name="l05w08"></slot>
      <slot name="l05w09"></slot>
      <slot name="l05w10"></slot>
      <slot name="l05w11"></slot>
      <slot name="l05w12"></slot>
    </slot>
    <slot name="l06">
      <slot name="l06w00"></slot>
      <slot name="l06w01"></slot>
      <slot name="l06w02"></slot>
      <slot name="l06w03"></slot>
      <slot name="l06w04"></slot>
      <slot name="l06w05"></slot>
      <slot name="l06w06"></slot>
      <slot name="l06w07"></slot>
      <slot name="l06w08"></slot>
      <slot name="l06w09"></slot>
      <slot name="l06w10"></slot>
      <slot name="l06w11"></slot>
      <slot name="l06w12"></slot>
    </slot>
    <slot name="l07">
      <slot name="l07w00"></slot>
      <slot name="l07w01"></slot>
      <slot name="l07w02"></slot>
      <slot name="l07w03"></slot>
      <slot name="l07w04"></slot>
      <slot name="l07w05"></slot>
      <slot name="l07w06"></slot>
      <slot name="l07w07"></slot>
      <slot name="l07w08"></slot>
      <slot name="l07w09"></slot>
      <slot name="l07w10"></slot>
      <slot name="l07w11"></slot>
      <slot name="l07w12"></slot>
    </slot>
    <slot name="l08">
      <slot name="l08w00"></slot>
      <slot name="l08w01"></slot>
      <slot name="l08w02"></slot>
      <slot name="l08w03"></slot>
      <slot name="l08w04"></slot>
      <slot name="l08w05"></slot>
      <slot name="l08w06"></slot>
      <slot name="l08w07"></slot>
      <slot name="l08w08"></slot>
      <slot name="l08w09"></slot>
      <slot name="l08w10"></slot>
      <slot name="l08w11"></slot>
      <slot name="l08w12"></slot>
    </slot>
    <slot name="l09">
      <slot name="l09w00"></slot>
      <slot name="l09w01"></slot>
      <slot name="l09w02"></slot>
      <slot name="l09w03"></slot>
      <slot name="l09w04"></slot>
      <slot name="l09w05"></slot>
      <slot name="l09w06"></slot>
      <slot name="l09w07"></slot>
      <slot name="l09w08"></slot>
      <slot name="l09w09"></slot>
      <slot name="l09w10"></slot>
      <slot name="l09w11"></slot>
      <slot name="l09w12"></slot>
    </slot>
    <slot name="l10">
      <slot name="l10w00"></slot>
      <slot name="l10w01"></slot>
      <slot name="l10w02"></slot>
      <slot name="l10w03"></slot>
      <slot name="l10w04"></slot>
      <slot name="l10w05"></slot>
      <slot name="l10w06"></slot>
      <slot name="l10w07"></slot>
      <slot name="l10w08"></slot>
      <slot name="l10w09"></slot>
      <slot name="l10w10"></slot>
      <slot name="l10w11"></slot>
      <slot name="l10w12"></slot>
    </slot>
    <slot name="l11">
      <slot name="l11w00"></slot>
      <slot name="l11w01"></slot>
      <slot name="l11w02"></slot>
      <slot name="l11w03"></slot>
      <slot name="l11w04"></slot>
      <slot name="l11w05"></slot>
      <slot name="l11w06"></slot>
      <slot name="l11w07"></slot>
      <slot name="l11w08"></slot>
      <slot name="l11w09"></slot>
      <slot name="l11w10"></slot>
      <slot name="l11w11"></slot>
      <slot name="l11w12"></slot>
    </slot>
    <slot name="l12">
      <slot name="l12w00"></slot>
      <slot name="l12w01"></slot>
      <slot name="l12w02"></slot>
      <slot name="l12w03"></slot>
      <slot name="l12w04"></slot>
      <slot name="l12w05"></slot>
      <slot name="l12w06"></slot>
      <slot name="l12w07"></slot>
      <slot name="l12w08"></slot>
      <slot name="l12w09"></slot>
      <slot name="l12w10"></slot>
      <slot name="l12w11"></slot>
      <slot name="l12w12"></slot>
    </slot>
    <slot name="l13">
      <slot name="l10w00"></slot>
      <slot name="l13w01"></slot>
      <slot name="l13w02"></slot>
      <slot name="l13w03"></slot>
      <slot name="l13w04"></slot>
      <slot name="l13w05"></slot>
      <slot name="l13w06"></slot>
      <slot name="l13w07"></slot>
      <slot name="l13w08"></slot>
      <slot name="l13w09"></slot>
      <slot name="l13w10"></slot>
      <slot name="l13w11"></slot>
      <slot name="l13w12"></slot>
    </slot>
    <slot name="l14">
      <slot name="l14w00"></slot>
      <slot name="l14w01"></slot>
      <slot name="l14w02"></slot>
      <slot name="l14w03"></slot>
      <slot name="l14w04"></slot>
      <slot name="l14w05"></slot>
      <slot name="l14w06"></slot>
      <slot name="l14w07"></slot>
      <slot name="l14w08"></slot>
      <slot name="l14w09"></slot>
      <slot name="l14w10"></slot>
      <slot name="l14w11"></slot>
      <slot name="l14w12"></slot>
    </slot>
    <slot name="l15">
      <slot name="l15w00"></slot>
      <slot name="l15w01"></slot>
      <slot name="l15w02"></slot>
      <slot name="l15w03"></slot>
      <slot name="l15w04"></slot>
      <slot name="l15w05"></slot>
      <slot name="l15w06"></slot>
      <slot name="l15w07"></slot>
      <slot name="l15w08"></slot>
      <slot name="l15w09"></slot>
      <slot name="l15w10"></slot>
      <slot name="l15w11"></slot>
      <slot name="l15w12"></slot>
    </slot>
    <slot name="l16">
      <slot name="l16w00"></slot>
      <slot name="l16w01"></slot>
      <slot name="l16w02"></slot>
      <slot name="l16w03"></slot>
      <slot name="l16w04"></slot>
      <slot name="l16w05"></slot>
      <slot name="l16w06"></slot>
      <slot name="l16w07"></slot>
      <slot name="l16w08"></slot>
      <slot name="l16w09"></slot>
      <slot name="l16w10"></slot>
      <slot name="l16w11"></slot>
      <slot name="l16w12"></slot>
    </slot>
    <slot name="l17">
      <slot name="l17w00"></slot>
      <slot name="l17w01"></slot>
      <slot name="l17w02"></slot>
      <slot name="l17w03"></slot>
      <slot name="l17w04"></slot>
      <slot name="l17w05"></slot>
      <slot name="l17w06"></slot>
      <slot name="l17w07"></slot>
      <slot name="l17w08"></slot>
      <slot name="l17w09"></slot>
      <slot name="l17w10"></slot>
      <slot name="l17w11"></slot>
      <slot name="l17w12"></slot>
    </slot>
  </div>
`;

class AnimaScripto extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
    // Event listeners?
  }

  //
  //define the OBSERVED attributes
  static get observedAttributes() {
    return [
      'keyframes',          // (set) array (of objects)
      'timing',             // (set) object
      'text',               // (get) string
      'anima',              // (set) object
      'getcomputedtiming',  // (get) object
      'cancel',             // (set) boolean
      'finish',             // (set) boolean
      'remove',             // (set) boolean
      'play',               // (set) boolean
      'pause',              // (set) boolean
      'seek',               // (set) number
      'reverse',            // (set) boolean
      'currenttime',        // (get/set) number
      'playbackrate',       // (get/set) number
      'updateplaybackrate', // (set) string
      'ready',              // (get) object
      'finished',           // (get) object
      'pending',            // (get) object
      'playstate',          // (get) string
      'starttime',          // (get/set) number
      'oncancel',           // (get/set) string
      'onfinish',           // (get/set) string
      'onremove',           // (get/set) string
      'animationid',        // (get/set) string
    ];
  }

  //
  //create properties to sync with OBSERVED attributes (REFLECT)
  set keyframes(value) {
    let parsedValue = JSON.parse(value);
    this.setAttribute('keyframes', parsedValue);
  };

  set timing(value) {
    let parsedValue = JSON.parse(value);
    this.setAttribute('timing', parsedValue);
  };

  get text() { return this.getAttribute('text') };

  // set anima(value) { this.setAttribute('play', value) };

  get play() { return this.getAttribute('play') };
  set play(value) { this.setAttribute('play', value) };

  get pause() { return this.getAttribute('pause') };
  set pause(value) { this.setAttribute('pause', value) };

  get seek() { return this.getAttribute('seek') };
  set seek(value) { this.setAttribute('seek', value) };

  get reverse() { return this.getAttribute('reverse') };
  set reverse(value) { this.setAttribute('reverse', value) };

  get cancel() { return this.getAttribute('cancel') };
  set cancel(value) { this.setAttribute('cancel', value) };

  get finish() { return this.getAttribute('finish') };
  set finish(value) { this.setAttribute('finish', value) };

  get remove() { return this.getAttribute('remove') };
  set remove(value) { this.setAttribute('remove', value) };

  get getcomputedtiming() { return this.getAttribute('getcomputedtiming') };

  get starttime() { return this.getAttribute('starttime') };
  set starttime(value) { this.setAttribute('starttime', value) };

  get currenttime() { return this.getAttribute('currenttime') };
  set currenttime(value) { this.setAttribute('currenttime', value) };

  get playbackrate() { return this.getAttribute('playbackrate') };
  set playbackrate(value) { this.setAttribute('playbackrate', value) };
  set updateplaybackrate(value) { this.setAttribute('updateplaybackrate', value) };

  get ready() { return this.getAttribute('ready') };

  get finished() { return this.getAttribute('finished') };

  get pending() { return this.getAttribute('pending') };

  get playstate() { return this.getAttribute('playstate') };

  set oncancel(value) { this.setAttribute('oncancel', value) };

  set onfinish(value) { this.setAttribute('onfinish', value) };

  set onremove(value) { this.setAttribute('onremove', value) };

  get animationid() { return this.getAttribute('animationid') };
  // set animationid(value) {
  //   value = `${this.id}Anima`;
  //   this.setAttribute('animationid', value)

  //
  //handle values and changes to the attributes
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'keyframes') {

    }
    if (attrName === 'timing') {

    }
    if (attrName === 'anima') {

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

    }
    if (attrName === 'playbackrate') {

    }
  }

  connectedCallback() {
    const docTime = this.ownerDocument.timel.currentTime;

    // Internal State references and values required to manage animation:
    //Text Node to be animated
    const l00ws = Array.from(this.getElementsByTagName('span'));
    for (let l00w in l00ws) {
      l00w = this.text;
      const string = new Text(l00w);
      this.shadowRoot.append(string);
    }

    const keyframes = this.keyframes;
    console.log(keyframes);

    const timing = this.timing;
    console.log(timing);


    const effect = new KeyframeEffect(this, keyframes, timing);
    const anima = new Animation(effect);
    anima.ready.then(console.log(`Animation is ready!`));
    anima.pause();
  }

  // //Handle play/pause
  // _handleControl(control) {
  //   l00wAnimations
  //     .map(span => span.getAnimations()[0])
  //     .filter(a => a);
  //   if (control === 'play') {
  //     l00wAnimations.forEach(animation => animation.play());
  //   } else if (control === 'pause') {
  //     l00wAnimations.forEach(animation => animation.pause());
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
};

customElements.define('anima-scripto', AnimaScripto);
