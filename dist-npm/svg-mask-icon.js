var a = Object.defineProperty;
var l = (e, t, i) => t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var r = (e, t, i) => l(e, typeof t != "symbol" ? t + "" : t, i);
import { LitElement as n, html as o, css as d } from "lit";
class s extends n {
  constructor() {
    super(), this.src = "", this.role = "img", this.ariaHiden = "false";
  }
  updated(t) {
    super.updated(t), t.has("src") && (this.style.maskImage = `url(${this.src})`), t.has("alt") && this.setAttribute("aria-label", this.alt), t.has("role") && this.role === "presentation" && (this.ariaHidden = "true");
  }
  render() {
    return o`
      <div
        translate="no"
        role="${this.role}"
        aria-label="${this.alt}"
        aria-hidden="${this.ariaHidden}"
      ><slot></slot></div>`;
  }
}
r(s, "properties", {
  src: { type: String },
  role: { type: String },
  alt: { type: String },
  ariaHidden: { type: String }
}), r(s, "styles", d`
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
customElements.define("svg-mask-icon", s);
class c extends s {
}
customElements.define("svg-icon", c);
export {
  c as SvgIcon,
  s as SvgMaskIcon
};
