
//This file will be the web component
//It only needs to run, not be imported by main.js

class WordAnima extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

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
    const docTime = this.ownerDocument.timeline.currentTime;

    // Internal State references and values required to manage animation:
    //Text Node to be animated
    const string = this.text;
    const word = new Text(string);

    this.shadowRoot.append(word);

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
};

customElements.define('word-anima', WordAnima);
