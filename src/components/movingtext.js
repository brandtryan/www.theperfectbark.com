//This file will be the web component
//It only needs to run, not be imported by main.js

const template = document.createElement('template');
template.innerHTML = `
  <style>
  @import url('www.theperfectbark.com/src/assets/css/normalize.css');
  @import url('www.theperfectbark.com/src/assets/css/style.css');
  div {
    place-self: center; 
  }
  </style>
  <div>
    <slot name="line00">
      <slot name="word00>word</slot> 
      <slot name="word01>word</slot> 
      <slot name="word02>word</slot> 
      <slot name="word03>word</slot> 
      <slot name="word04>word</slot> 
      <slot name="word05>word</slot> 
      <slot name="word06>word</slot> 
      <slot name="word07>word</slot> 
      <slot name="word08>word</slot> 
      <slot name="word09>word</slot> 
      <slot name="word10>word</slot> 
      <slot name="word11>word</slot> 
    </slot>
  </div>
`;

class MovingText extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    // let div = document.createElement('div');
    // div.textContent = 'Persistent div from constructor function';
    // shadowRoot.append(div);

    // whatever content is put in index slot replaces any content
    // in the template above
    // Order of slots is determined by TEMPLATE
    // slot"line09" in index follows line08 but it is
    // RENDERED above slot"line00"
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define('moving-text', MovingText);

