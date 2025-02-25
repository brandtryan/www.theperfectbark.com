//This file will be the web component
//It only needs to run, not be imported by main.js

class MovingText extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define('moving-text', MovingText);
