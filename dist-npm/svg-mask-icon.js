var o = Object.defineProperty;
var n = (t, e, s) => e in t ? o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var r = (t, e, s) => n(t, typeof e != "symbol" ? e + "" : e, s);
import { LitElement as l, html as c, css as a } from "lit";
class i extends l {
  constructor() {
    super(), this.src = "", this.role = "img";
  }
  updated(e) {
    super.updated(e), e.has("src") && (this.style.maskImage = `url(${this.src})`);
  }
  render() {
    return c`
      <div
        translate="no"
        role="${this.role}"
      ><slot></slot></div>`;
  }
}
r(i, "properties", {
  src: { type: String },
  role: { type: String }
}), r(i, "styles", a`
    :host {
      display: inline-block;
      width: 1em;
      overflow: hidden;
      aspect-ratio: 1;
      mask-size: cover;
      background: currentColor;
      vertical-align: -0.2em;
    }
    div {
      text-indent: 200%;
      white-space: nowrap;
      font-size: 1em;
    }
  `);
customElements.define("svg-mask-icon", i);
class d extends i {
}
customElements.define("svg-icon", d);
export {
  d as SvgIcon,
  i as SvgMaskIcon
};
