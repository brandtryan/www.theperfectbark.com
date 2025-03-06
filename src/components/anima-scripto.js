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
    
    .root {
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
    }
  
    ::slotted(.line) {
      margin-block-start: 0;
      margin-block-end: 0;
      padding: 0;
    }
    
    ::slotted(.word) {
      display: inline;
    }
  </style>
  <div class="root">
    ${Array.from({ length: 18 }, (_, i) =>
  `<slot name="l${i.toString().padStart(2, '0')}"></slot>`
).join('\n')}
  </div>
`;

class AnimaScripto extends HTMLElement {
  #animations = new Map();
  #observer;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['play', 'pause', 'seek', 'currenttime', 'playbackrate'];
  }

  connectedCallback() {
    this.#setupMutationObserver();
    this.#initializeAnimations();
  }

  disconnectedCallback() {
    this.#observer?.disconnect();
    this.#animations.clear();
  }

  #setupMutationObserver() {
    this.#observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.target.classList.contains('word')) {
          this.#updateWordAnimation(mutation.target);
        }
      });
    });

    this.#observer.observe(this, {
      attributes: true,
      subtree: true,
      attributeFilter: ['keyframes', 'timing', 'text']
    });
  }

  #initializeAnimations() {
    const words = this.querySelectorAll('.word');
    words.forEach(word => {
      this.#createWordAnimation(word);
      // Set text content from attribute
      const text = word.getAttribute('text');
      if (text) {
        word.textContent = text;
      }
    });
  }

  #createWordAnimation(wordElement) {
    try {
      const keyframes = JSON.parse(wordElement.getAttribute('keyframes'));
      const timing = JSON.parse(wordElement.getAttribute('timing'));

      const effect = new KeyframeEffect(wordElement, keyframes, timing);
      const animation = new Animation(effect);

      this.#animations.set(wordElement.id, animation);
      animation.pause(); // Start paused by default

      return animation;
    } catch (error) {
      console.error(`Failed to create animation for ${wordElement.id}:`, error);
      return null;
    }
  }

  #updateWordAnimation(wordElement) {
    const existingAnimation = this.#animations.get(wordElement.id);
    if (existingAnimation) {
      existingAnimation.cancel();
      this.#animations.delete(wordElement.id);
    }
    this.#createWordAnimation(wordElement);

    // Update text when the text attribute changes
    const text = wordElement.getAttribute('text');
    if (text) {
      wordElement.textContent = text;
    }
  }

  // Public API methods
  play() {
    this.#animations.forEach(animation => animation.play());
  }

  pause() {
    this.#animations.forEach(animation => animation.pause());
  }

  seek(time) {
    this.#animations.forEach(animation => {
      animation.currentTime = time;
    });
  }

  setPlaybackRate(rate) {
    this.#animations.forEach(animation => {
      animation.playbackRate = rate;
    });
  }

  getAnimations() {
    return Array.from(this.#animations.values());
  }
}

customElements.define('anima-scripto', AnimaScripto);
