var o = Object.defineProperty;
var l = (e, t, s) => t in e ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var r = (e, t, s) => l(e, typeof t != "symbol" ? t + "" : t, s);
import { LitElement as n, html as a, css as c } from "lit";
class i extends n {
  constructor() {
    super(), this.src = "", this.role = "img";
  }
  updated(t) {
    super.updated(t), t.has("src") && (this.style.maskImage = `url(${this.src})`);
  }
  render() {
    return a`
      <div
        translate="no"
        role="${this.role}"
      ><slot></slot></div>`;
  }
}
r(i, "properties", {
  src: { type: String },
  role: { type: String }
}), r(i, "styles", c`
    :host {
      display: inline-block;
      width: 24px;
      overflow: hidden;
      aspect-ratio: 1;
      mask-size: cover;
      background: currentColor;
    }
    div {
      text-indent: 200%;
      white-space: nowrap;
      font-size: 24px;
    }
  `);
customElements.define("svg-mask-icon", i);
export {
  i as SvgMaskIcon
};
