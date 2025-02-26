//This file will be the web component
//It only needs to run, not be imported by main.js

const template = document.createElement('template');
template.innerHTML = `
  <div>
    <h2>H2 from template</h2>
  </div>
`;

class MovingText extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    // let div = document.createElement('div');
    // div.textContent = 'Persistent div from constructor function';
    // shadowRoot.append(div);

    // how do you get content into the element a different way?
    // A Template (see above)
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define('moving-text', MovingText);
// <moving-text> - every time you add one to the page, the constructor
// is run.

// (pre-slot) anything put in between our opening and  closing tags is meaningless
