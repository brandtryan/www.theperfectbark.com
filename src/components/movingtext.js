//This file will be the web component
//It only needs to run, not be imported by main.js

class MovingText extends HTMLElement {
  constructor() {
    super();
    // shadowRoot - container that holds our element in isolation
    const shadowRoot = this.attachShadow({ mode: 'open' });
    // add some persistent html
    let div = document.createElement('div');
    div.textContent = 'Persistent div from constructor function';
    // attach html to shadowRoot
    shadowRoot.append(div);
  }
}

customElements.define('moving-text', MovingText);
// <moving-text> - every time you add one to the page, the constructor
// is run.
