//This file will be the web component
//It only needs to run, not be imported by main.js
const template = document.createElement('template');
template.innerHTML = `
  <style>
  :host {
    display: block;
  }
  div {
    border: 1px solid red;
    place-content: center;
    place-self: center;
    width: 49ch;
    height: 150vh;
    content-visibility: auto;
    contain-intrinsic-width: 48ch;
    contain-intrinsic-height: 100vh;
    font-size: clamp(1.4rem, 0.75vw + 1.24rem, 2.2rem);
    margin: 0 auto;
    white-space: nowrap;
    overflow: visible;
    margin: 0;
    padding: 0;
    background-color: black;
    scroll-snap-stop: always;
  }
  ::slotted(p) {
    margin: 0; 
    padding: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: .5
  }
  </style>
  <div>
    <p><slot name="l00">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      </slot>
    <p><slot name="l01">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l02">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l03">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l04">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l05">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l06">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l07">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></slot> 
    </slot>
    <p><slot name="l08">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></slot> 
    </slot>
    <p><slot name="l09">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l10">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l11">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l12">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
    <p><slot name="l13">
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
      <span></span> 
    </slot>
  </div>
`;

class MovingText extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }

  //define the allowed attributes
  static get observedAttributes() {
    return ['id', 'timeline', 'color']
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

  get color() {
    return this.getAttribute('color');
  }
  set color(value) {
    this.setAttribute('color', value);
  }
  //
  //handle values and changes to the attributes
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'timeline') {
      newVal = new DocumentTimeline({
        originTime: document.timeline.currentTime,
      })
      console.log(`Assigned timeline ${this.id}Timeline!
        ${this.id}Timeline currentTime = ${newVal.currentTime}`,
        newVal
      );

    }
    if (attrName === 'color') {

    }
  }
}

customElements.define('moving-text', MovingText);

