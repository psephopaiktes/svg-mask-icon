import { LitElement, type PropertyValues, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("svg-mask-icon")
export class SvgMaskIcon extends LitElement {
  @property({ type: String }) src = "";
  @property({ type: String }) role: "img" | "presentation" = "img";
  @property({ type: String }) alt = "";
  @property({ type: String, attribute: "aria-hidden" }) ariaHidden:
    | "true"
    | "false" = "false";

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    if (!this.alt && !this.textContent?.trim()) {
      this.role = "presentation";
      this.ariaHidden = "true";
    }

    if (changedProperties.has("src")) {
      this.style.maskImage = `url(${this.src})`;
    }

    if (changedProperties.has("alt")) {
      this.alt
        ? this.setAttribute("aria-label", this.alt)
        : this.removeAttribute("aria-label");
    }

    if (changedProperties.has("role") && this.role === "presentation") {
      this.ariaHidden = "true";
    }
  }

  render() {
    return html`
      <div
        translate="no"
        role="${this.role}"
        aria-hidden="${this.ariaHidden}"
      ><slot></slot></div>
    `;
  }

  static styles = css`
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
  `;
}

@customElement("svg-icon")
export class SvgIcon extends SvgMaskIcon {}
