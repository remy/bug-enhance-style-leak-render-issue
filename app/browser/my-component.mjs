/* global document, customElements */
import CustomElement from "@enhance/custom-element"
import MyComponentTemplate from "../elements/my-component.mjs"

class MyComponent extends CustomElement {
  constructor() {
    super()
  }

  static get observedAttributes() {
    return ['selected']
  }

  connectedCallback() {
    this.strong = this.querySelector('strong')
    const inputList = this.querySelectorAll('input[type="radio"]')
    const els = Array.from(inputList)
    els.map(e => e.addEventListener('change', this.change))
  }

  change = (e) => {
    this.setAttribute('selected', e.target.value)
  }

  selectedChanged(value) {
    this.strong.innerText = value
  }

  render(args) {
    return MyComponentTemplate(args)
  }
}

customElements.define('my-component', MyComponent)
