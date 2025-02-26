//This file will be the web component
//It only needs to run, not be imported by main.js

const template = document.createElement('template');
template.innerHTML = `
  <div>
    <slot name="line00"></slot>
    <slot name="line01"></slot>
    <slot name="line02"></slot>
    <slot name="line03"></slot>
    <slot name="line04"></slot>
    <slot name="line05"></slot>
    <slot name="line06"></slot>
    <slot name="line07"></slot>
    <slot name="line08"></slot>
    <slot name="line09">Default Text</slot>
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
    // A slot:
    // in template create slot: <slot name="line00"></slot>
    // in index.html add an element that includes slot="line00"
    // whatever content is put in index slot replaces any content
    // in the template above
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define('moving-text', MovingText);

