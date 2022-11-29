class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2022
        Hernandez Hernandez Maribel.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
