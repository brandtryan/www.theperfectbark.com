//This file will be the web component
//It only needs to run, not be imported by main.js

const template = document.createElement('template');
template.innerHTML = `
  <style>
    /* @import url() */

    :host {
      /* for the shadowRoot */ 
    }
  </style>
  <div>
      <slot name="l00"><p>
        <slot name="l00w00"><span>word</span></slot>
        <slot name="l00w01"><span>word</span></slot>
        <slot name="l00w02"><span>word</span></slot>
        <slot name="l00w03"><span>word</span></slot>
        <slot name="l00w04"><span>word</span></slot>
        <slot name="l00w05"><span>word</span></slot>
        <slot name="l00w06"><span>word</span></slot>
        <slot name="l00w07"><span>word</span></slot>
        <slot name="l00w08"><span>word</span></slot>
        <slot name="l00w09"><span>word</span></slot>
        <slot name="l00w10"><span>word</span></slot>
        <slot name="l00w11"><span>word</span></slot>
        <slot name="l00w12"><span>word</span></slot>
        <slot name="l00w13"><span>word</span></slot>
        <slot name="l00w14"><span>word</span></slot>
        <slot name="l00w15"><span>word</span></slot>
      </p></slot>
      <slot name="l01"><p>
        <slot name="l01w00"><span>word</span></slot>
        <slot name="l01w01"><span>word</span></slot>
        <slot name="l01w02"><span>word</span></slot>
        <slot name="l01w03"><span>word</span></slot>
        <slot name="l01w04"><span>word</span></slot>
        <slot name="l01w05"><span>word</span></slot>
        <slot name="l01w06"><span>word</span></slot>
        <slot name="l01w07"><span>word</span></slot>
        <slot name="l01w08"><span>word</span></slot>
        <slot name="l01w09"><span>word</span></slot>
        <slot name="l01w10"><span>word</span></slot>
        <slot name="l01w11"><span>word</span></slot>
        <slot name="l01w12"><span>word</span></slot>
        <slot name="l01w13"><span>word</span></slot>
        <slot name="l01w14"><span>word</span></slot>
        <slot name="l01w15"><span>word</span></slot>
      </p></slot>
      <slot name="l02"><p>
        <slot name="l02w00"><span>word</span></slot>
        <slot name="l02w01"><span>word</span></slot>
        <slot name="l02w02"><span>word</span></slot>
        <slot name="l02w03"><span>word</span></slot>
        <slot name="l02w04"><span>word</span></slot>
        <slot name="l02w05"><span>word</span></slot>
        <slot name="l02w06"><span>word</span></slot>
        <slot name="l02w07"><span>word</span></slot>
        <slot name="l02w08"><span>word</span></slot>
        <slot name="l02w09"><span>word</span></slot>
        <slot name="l02w10"><span>word</span></slot>
        <slot name="l02w11"><span>word</span></slot>
        <slot name="l02w12"><span>word</span></slot>
        <slot name="l02w13"><span>word</span></slot>
        <slot name="l02w14"><span>word</span></slot>
        <slot name="l02w15"><span>word</span></slot>
      </p></slot>
      <slot name="l03"><p>
        <slot name="l03w00"><span>word</span></slot>
        <slot name="l03w01"><span>word</span></slot>
        <slot name="l03w02"><span>word</span></slot>
        <slot name="l03w03"><span>word</span></slot>
        <slot name="l03w04"><span>word</span></slot>
        <slot name="l03w05"><span>word</span></slot>
        <slot name="l03w06"><span>word</span></slot>
        <slot name="l03w07"><span>word</span></slot>
        <slot name="l03w08"><span>word</span></slot>
        <slot name="l03w09"><span>word</span></slot>
        <slot name="l03w10"><span>word</span></slot>
        <slot name="l03w11"><span>word</span></slot>
        <slot name="l03w12"><span>word</span></slot>
        <slot name="l03w13"><span>word</span></slot>
        <slot name="l03w14"><span>word</span></slot>
        <slot name="l03w15"><span>word</span></slot>
      </p></slot>
      <slot name="l04"><p>
        <slot name="l04w00"><span>word</span></slot>
        <slot name="l04w01"><span>word</span></slot>
        <slot name="l04w02"><span>word</span></slot>
        <slot name="l04w03"><span>word</span></slot>
        <slot name="l04w04"><span>word</span></slot>
        <slot name="l04w05"><span>word</span></slot>
        <slot name="l04w06"><span>word</span></slot>
        <slot name="l04w07"><span>word</span></slot>
        <slot name="l04w08"><span>word</span></slot>
        <slot name="l04w09"><span>word</span></slot>
        <slot name="l04w10"><span>word</span></slot>
        <slot name="l04w11"><span>word</span></slot>
        <slot name="l04w12"><span>word</span></slot>
        <slot name="l04w13"><span>word</span></slot>
        <slot name="l04w14"><span>word</span></slot>
        <slot name="l04w15"><span>word</span></slot>
      </p></slot>
      <slot name="l05"><p>
        <slot name="l05w00"><span>word</span></slot>
        <slot name="l05w01"><span>word</span></slot>
        <slot name="l05w02"><span>word</span></slot>
        <slot name="l05w03"><span>word</span></slot>
        <slot name="l05w04"><span>word</span></slot>
        <slot name="l05w05"><span>word</span></slot>
        <slot name="l05w06"><span>word</span></slot>
        <slot name="l05w07"><span>word</span></slot>
        <slot name="l05w08"><span>word</span></slot>
        <slot name="l05w09"><span>word</span></slot>
        <slot name="l05w10"><span>word</span></slot>
        <slot name="l05w11"><span>word</span></slot>
        <slot name="l05w12"><span>word</span></slot>
        <slot name="l05w13"><span>word</span></slot>
        <slot name="l05w14"><span>word</span></slot>
        <slot name="l05w15"><span>word</span></slot>
      </p></slot>
      <slot name="l06"><p>
        <slot name="l06w00"><span>word</span></slot>
        <slot name="l06w01"><span>word</span></slot>
        <slot name="l06w02"><span>word</span></slot>
        <slot name="l06w03"><span>word</span></slot>
        <slot name="l06w04"><span>word</span></slot>
        <slot name="l06w05"><span>word</span></slot>
        <slot name="l06w06"><span>word</span></slot>
        <slot name="l06w07"><span>word</span></slot>
        <slot name="l06w08"><span>word</span></slot>
        <slot name="l06w09"><span>word</span></slot>
        <slot name="l06w10"><span>word</span></slot>
        <slot name="l06w11"><span>word</span></slot>
        <slot name="l06w12"><span>word</span></slot>
        <slot name="l06w13"><span>word</span></slot>
        <slot name="l06w14"><span>word</span></slot>
        <slot name="l06w15"><span>word</span></slot>
      </p></slot>
      <slot name="l07"><p>
        <slot name="l07w00"><span>word</span></slot>
        <slot name="l07w01"><span>word</span></slot>
        <slot name="l07w02"><span>word</span></slot>
        <slot name="l07w03"><span>word</span></slot>
        <slot name="l07w04"><span>word</span></slot>
        <slot name="l07w05"><span>word</span></slot>
        <slot name="l07w06"><span>word</span></slot>
        <slot name="l07w07"><span>word</span></slot>
        <slot name="l07w08"><span>word</span></slot>
        <slot name="l07w09"><span>word</span></slot>
        <slot name="l07w10"><span>word</span></slot>
        <slot name="l07w11"><span>word</span></slot>
        <slot name="l07w12"><span>word</span></slot>
        <slot name="l07w13"><span>word</span></slot>
        <slot name="l07w14"><span>word</span></slot>
        <slot name="l07w15"><span>word</span></slot>
      </p></slot>
      <slot name="l08"><p>
        <slot name="l08w00"><span>word</span></slot>
        <slot name="l08w01"><span>word</span></slot>
        <slot name="l08w02"><span>word</span></slot>
        <slot name="l08w03"><span>word</span></slot>
        <slot name="l08w04"><span>word</span></slot>
        <slot name="l08w05"><span>word</span></slot>
        <slot name="l08w06"><span>word</span></slot>
        <slot name="l08w07"><span>word</span></slot>
        <slot name="l08w08"><span>word</span></slot>
        <slot name="l08w09"><span>word</span></slot>
        <slot name="l08w10"><span>word</span></slot>
        <slot name="l08w11"><span>word</span></slot>
        <slot name="l08w12"><span>word</span></slot>
        <slot name="l08w13"><span>word</span></slot>
        <slot name="l08w14"><span>word</span></slot>
        <slot name="l08w15"><span>word</span></slot>
      </p></slot>
      <slot name="l09"><p>
        <slot name="l09w00"><span>word</span></slot>
        <slot name="l09w01"><span>word</span></slot>
        <slot name="l09w02"><span>word</span></slot>
        <slot name="l09w03"><span>word</span></slot>
        <slot name="l09w04"><span>word</span></slot>
        <slot name="l09w05"><span>word</span></slot>
        <slot name="l09w06"><span>word</span></slot>
        <slot name="l09w07"><span>word</span></slot>
        <slot name="l09w08"><span>word</span></slot>
        <slot name="l09w09"><span>word</span></slot>
        <slot name="l09w10"><span>word</span></slot>
        <slot name="l09w11"><span>word</span></slot>
        <slot name="l09w12"><span>word</span></slot>
        <slot name="l09w13"><span>word</span></slot>
        <slot name="l09w14"><span>word</span></slot>
        <slot name="l09w15"><span>word</span></slot>
      </p></slot>
      <slot name="l10"><p>
        <slot name="l10w00"><span>word</span></slot>
        <slot name="l10w01"><span>word</span></slot>
        <slot name="l10w02"><span>word</span></slot>
        <slot name="l10w03"><span>word</span></slot>
        <slot name="l10w04"><span>word</span></slot>
        <slot name="l10w05"><span>word</span></slot>
        <slot name="l10w06"><span>word</span></slot>
        <slot name="l10w07"><span>word</span></slot>
        <slot name="l10w08"><span>word</span></slot>
        <slot name="l10w09"><span>word</span></slot>
        <slot name="l10w10"><span>word</span></slot>
        <slot name="l10w11"><span>word</span></slot>
        <slot name="l10w12"><span>word</span></slot>
        <slot name="l10w13"><span>word</span></slot>
        <slot name="l10w14"><span>word</span></slot>
        <slot name="l10w15"><span>word</span></slot>
      </p></slot>
      <slot name="l11"><p>
        <slot name="l11w00"><span>word</span></slot>
        <slot name="l11w01"><span>word</span></slot>
        <slot name="l11w02"><span>word</span></slot>
        <slot name="l11w03"><span>word</span></slot>
        <slot name="l11w04"><span>word</span></slot>
        <slot name="l11w05"><span>word</span></slot>
        <slot name="l11w06"><span>word</span></slot>
        <slot name="l11w07"><span>word</span></slot>
        <slot name="l11w08"><span>word</span></slot>
        <slot name="l11w09"><span>word</span></slot>
        <slot name="l11w10"><span>word</span></slot>
        <slot name="l11w11"><span>word</span></slot>
        <slot name="l11w12"><span>word</span></slot>
        <slot name="l11w13"><span>word</span></slot>
        <slot name="l11w14"><span>word</span></slot>
        <slot name="l11w15"><span>word</span></slot>
      </p></slot>
      <slot name="l12"><p>
        <slot name="l12w00"><span>word</span></slot>
        <slot name="l12w01"><span>word</span></slot>
        <slot name="l12w02"><span>word</span></slot>
        <slot name="l12w03"><span>word</span></slot>
        <slot name="l12w04"><span>word</span></slot>
        <slot name="l12w05"><span>word</span></slot>
        <slot name="l12w06"><span>word</span></slot>
        <slot name="l12w07"><span>word</span></slot>
        <slot name="l12w08"><span>word</span></slot>
        <slot name="l12w09"><span>word</span></slot>
        <slot name="l12w10"><span>word</span></slot>
        <slot name="l12w11"><span>word</span></slot>
        <slot name="l12w12"><span>word</span></slot>
        <slot name="l12w13"><span>word</span></slot>
        <slot name="l12w14"><span>word</span></slot>
        <slot name="l12w15"><span>word</span></slot>
      </p></slot>
      <slot name="l13"><p>
        <slot name="l13w00"><span>word</span></slot>
        <slot name="l13w01"><span>word</span></slot>
        <slot name="l13w02"><span>word</span></slot>
        <slot name="l13w03"><span>word</span></slot>
        <slot name="l13w04"><span>word</span></slot>
        <slot name="l13w05"><span>word</span></slot>
        <slot name="l13w06"><span>word</span></slot>
        <slot name="l13w07"><span>word</span></slot>
        <slot name="l13w08"><span>word</span></slot>
        <slot name="l13w09"><span>word</span></slot>
        <slot name="l13w10"><span>word</span></slot>
        <slot name="l13w11"><span>word</span></slot>
        <slot name="l13w12"><span>word</span></slot>
        <slot name="l13w13"><span>word</span></slot>
        <slot name="l13w14"><span>word</span></slot>
        <slot name="l13w15"><span>word</span></slot>
      </p></slot>
      <slot name="l14"><p>
        <slot name="l14w00"><span>word</span></slot>
        <slot name="l14w01"><span>word</span></slot>
        <slot name="l14w02"><span>word</span></slot>
        <slot name="l14w03"><span>word</span></slot>
        <slot name="l14w04"><span>word</span></slot>
        <slot name="l14w05"><span>word</span></slot>
        <slot name="l14w06"><span>word</span></slot>
        <slot name="l14w07"><span>word</span></slot>
        <slot name="l14w08"><span>word</span></slot>
        <slot name="l14w09"><span>word</span></slot>
        <slot name="l14w10"><span>word</span></slot>
        <slot name="l14w11"><span>word</span></slot>
        <slot name="l14w12"><span>word</span></slot>
        <slot name="l14w13"><span>word</span></slot>
        <slot name="l14w14"><span>word</span></slot>
        <slot name="l14w15"><span>word</span></slot>
      </p></slot>
      <slot name="l15"><p>
        <slot name="l15w00"><span>word</span></slot>
        <slot name="l15w01"><span>word</span></slot>
        <slot name="l15w02"><span>word</span></slot>
        <slot name="l15w03"><span>word</span></slot>
        <slot name="l15w04"><span>word</span></slot>
        <slot name="l15w05"><span>word</span></slot>
        <slot name="l15w06"><span>word</span></slot>
        <slot name="l15w07"><span>word</span></slot>
        <slot name="l15w08"><span>word</span></slot>
        <slot name="l15w09"><span>word</span></slot>
        <slot name="l15w10"><span>word</span></slot>
        <slot name="l15w11"><span>word</span></slot>
        <slot name="l15w12"><span>word</span></slot>
        <slot name="l15w13"><span>word</span></slot>
        <slot name="l15w14"><span>word</span></slot>
        <slot name="l15w15"><span>word</span></slot>
      </p></slot>
      <slot name="l16"><p>
        <slot name="l16w00"><span>word</span></slot>
        <slot name="l16w01"><span>word</span></slot>
        <slot name="l16w02"><span>word</span></slot>
        <slot name="l16w03"><span>word</span></slot>
        <slot name="l16w04"><span>word</span></slot>
        <slot name="l16w05"><span>word</span></slot>
        <slot name="l16w06"><span>word</span></slot>
        <slot name="l16w07"><span>word</span></slot>
        <slot name="l16w08"><span>word</span></slot>
        <slot name="l16w09"><span>word</span></slot>
        <slot name="l16w10"><span>word</span></slot>
        <slot name="l16w11"><span>word</span></slot>
        <slot name="l16w12"><span>word</span></slot>
        <slot name="l16w13"><span>word</span></slot>
        <slot name="l16w14"><span>word</span></slot>
        <slot name="l16w15"><span>word</span></slot>
      </p></slot>
      <slot name="l17"><p>
        <slot name="l17w00"><span>word</span></slot>
        <slot name="l17w01"><span>word</span></slot>
        <slot name="l17w02"><span>word</span></slot>
        <slot name="l17w03"><span>word</span></slot>
        <slot name="l17w04"><span>word</span></slot>
        <slot name="l17w05"><span>word</span></slot>
        <slot name="l17w06"><span>word</span></slot>
        <slot name="l17w07"><span>word</span></slot>
        <slot name="l17w08"><span>word</span></slot>
        <slot name="l17w09"><span>word</span></slot>
        <slot name="l17w10"><span>word</span></slot>
        <slot name="l17w11"><span>word</span></slot>
        <slot name="l17w12"><span>word</span></slot>
        <slot name="l17w13"><span>word</span></slot>
        <slot name="l17w14"><span>word</span></slot>
        <slot name="l17w15"><span>word</span></slot>
      </p></slot>
      <slot name="l18"><p>
        <slot name="l18w00"><span>word</span></slot>
        <slot name="l18w01"><span>word</span></slot>
        <slot name="l18w02"><span>word</span></slot>
        <slot name="l18w03"><span>word</span></slot>
        <slot name="l18w04"><span>word</span></slot>
        <slot name="l18w05"><span>word</span></slot>
        <slot name="l18w06"><span>word</span></slot>
        <slot name="l18w07"><span>word</span></slot>
        <slot name="l18w08"><span>word</span></slot>
        <slot name="l18w09"><span>word</span></slot>
        <slot name="l18w10"><span>word</span></slot>
        <slot name="l18w11"><span>word</span></slot>
        <slot name="l18w12"><span>word</span></slot>
        <slot name="l18w13"><span>word</span></slot>
        <slot name="l18w14"><span>word</span></slot>
        <slot name="l18w15"><span>word</span></slot>
      </p></slot>
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
    // slot"l09" in index follows l08 but it is
    // RENDERED above slot"l00"
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define('moving-text', MovingText);

