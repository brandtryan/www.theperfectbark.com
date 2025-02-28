//This file will be the web component
//It only needs to run, not be imported by main.js

const template = document.createElement('template');
template.innerHTML = `
  <style>
  @import url("normalize.css");
  @import url("styles.css");
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
      <slot name="l00w13"></slot> 
      <slot name="l00w14"></slot> 
      <slot name="l00w15"></slot> 
      <slot name="l00w16"></slot> 
      <slot name="l00w17"></slot> 
      <slot name="l00w18"></slot> 
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
      <slot name="l01w13"></slot> 
      <slot name="l01w14"></slot> 
      <slot name="l01w15"></slot> 
      <slot name="l01w16"></slot> 
      <slot name="l01w17"></slot> 
      <slot name="l01w18"></slot> 
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
      <slot name="l02w13"></slot> 
      <slot name="l02w14"></slot> 
      <slot name="l02w15"></slot> 
      <slot name="l02w16"></slot> 
      <slot name="l02w17"></slot> 
      <slot name="l02w18"></slot> 
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
      <slot name="l03w13"></slot> 
      <slot name="l03w14"></slot> 
      <slot name="l03w15"></slot> 
      <slot name="l03w16"></slot> 
      <slot name="l03w17"></slot> 
      <slot name="l03w18"></slot> 
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
      <slot name="l04w13"></slot> 
      <slot name="l04w14"></slot> 
      <slot name="l04w15"></slot> 
      <slot name="l04w16"></slot> 
      <slot name="l04w17"></slot> 
      <slot name="l04w18"></slot> 
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
      <slot name="l05w13"></slot> 
      <slot name="l05w14"></slot> 
      <slot name="l05w15"></slot> 
      <slot name="l05w16"></slot> 
      <slot name="l05w17"></slot> 
      <slot name="l05w18"></slot> 
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
      <slot name="l06w13"></slot> 
      <slot name="l06w14"></slot> 
      <slot name="l06w15"></slot> 
      <slot name="l06w16"></slot> 
      <slot name="l06w17"></slot> 
      <slot name="l06w18"></slot> 
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
      <slot name="l07w13"></slot> 
      <slot name="l07w14"></slot> 
      <slot name="l07w15"></slot> 
      <slot name="l07w16"></slot> 
      <slot name="l07w17"></slot> 
      <slot name="l07w18"></slot> 
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
      <slot name="l08w13"></slot> 
      <slot name="l08w14"></slot> 
      <slot name="l08w15"></slot> 
      <slot name="l08w16"></slot> 
      <slot name="l08w17"></slot> 
      <slot name="l08w18"></slot> 
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
      <slot name="l09w13"></slot> 
      <slot name="l09w14"></slot> 
      <slot name="l09w15"></slot> 
      <slot name="l09w16"></slot> 
      <slot name="l09w17"></slot> 
      <slot name="l09w18"></slot> 
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
      <slot name="l10w13"></slot> 
      <slot name="l10w14"></slot> 
      <slot name="l10w15"></slot> 
      <slot name="l10w16"></slot> 
      <slot name="l10w17"></slot> 
      <slot name="l10w18"></slot> 
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
      <slot name="l11w13"></slot> 
      <slot name="l11w14"></slot> 
      <slot name="l11w15"></slot> 
      <slot name="l11w16"></slot> 
      <slot name="l11w17"></slot> 
      <slot name="l11w18"></slot> 
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
      <slot name="l12w13"></slot> 
      <slot name="l12w14"></slot> 
      <slot name="l12w15"></slot> 
      <slot name="l12w16"></slot> 
      <slot name="l12w17"></slot> 
      <slot name="l12w18"></slot> 
    </slot>
    <slot name="l13">
      <slot name="l13w00"></slot> 
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
      <slot name="l13w13"></slot> 
      <slot name="l13w14"></slot> 
      <slot name="l13w15"></slot> 
      <slot name="l13w16"></slot> 
      <slot name="l13w17"></slot> 
      <slot name="l13w18"></slot> 
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

