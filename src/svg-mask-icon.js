import { LitElement, html, css } from 'lit';

export class SvgMaskIcon extends LitElement {
  static properties = {
    src: { type: String },
    role: { type: String },
  };

  constructor() {
    super();

    this.src = '';
    this.role = 'img';
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('src')) {
      this.style.maskImage = `url(${this.src})`;
    }
  }

  render() {
    return html`
      <div
        translate="no"
        role="${this.role}"
      ><slot></slot></div>`;
  }

  static styles = css`
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
  `;
}

customElements.define('svg-mask-icon', SvgMaskIcon);
