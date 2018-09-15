import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";

import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-icons/iron-icons.js";

/**
 * `helsinki-js-fav`
 * Web component demo for the Helsinki JS Meetup
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class HelsinkiJsFav extends PolymerElement {

  static get template() {
    return html`
      <style>
        :host {
          display: flex;
          align-items : center;
          cursor: pointer;
          user-select: none;
        }

        .title {
          font-size: 1.5em;
          margin-right: 0.125em;
        }

        .icon {
          fill: rgba(0,0,0,0);
          stroke: currentcolor;
          transition: fill .6s ease-in-out;
          --iron-icon-height: 32px;
          --iron-icon-width: 32px;
        }

        :host([faved]) .icon {
          fill: rgba(231,76,60, 1.0);
        }
      </style>

      <span class="title">Helsinki JS!</span>
      <iron-icon class="icon" icon="favorite"></iron-icon>
    `;
  }

  static get properties() {
    return {
      faved: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    };
  }

  constructor() {
    super();
    this.addEventListener("click", this.toggle.bind(this));
  }

  toggle() {
    this.faved = !this.faved;
  }
}

window.customElements.define("helsinki-js-fav", HelsinkiJsFav);
