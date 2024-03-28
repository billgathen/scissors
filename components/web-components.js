class AppendContent extends HTMLElement {
  constructor() {
    super();
  }

  textToNodes(text) {
    return new DOMParser().parseFromString(text, 'text/html').body.childNodes;
  }

  handleContent(text) {
    this.textToNodes(text).forEach(node => this.appendChild(node));
  }

  connectedCallback() {
    this.querySelector('button').addEventListener('click', () => {
      fetch(this.dataset.src).
        then((response) => response.text()).
        then((text) => this.handleContent(text));
    })
  }
}

customElements.define('append-content', AppendContent)

class ReplaceContent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const target = document.querySelector(this.dataset.target);
    this.querySelector('button').addEventListener('click', () => {
      fetch(this.dataset.src).
        then((response) => response.text()).
        then((text) => target.innerHTML = text);
    })
  }
}

customElements.define('replace-content', ReplaceContent)

class SelectContent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const target = document.querySelector(this.dataset.target);
    this.querySelector('select').addEventListener('change', (e) => {
      if (e.target.value) {
        const url = `${this.dataset.src}?${e.target.name}=${e.target.value}`;
        fetch(url).
          then((response) => response.text()).
          then((text) => target.innerHTML = text);
      } else {
        target.innerHTML = "";
      }
    })
  }
}

customElements.define('select-content', SelectContent)