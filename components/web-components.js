class DynamicContentElement extends HTMLElement {
  constructor() {
    super();
  }

  /**
   * Fetches the content from the specified URL and updates the target element with the response.
   * @param {string} url - The URL to fetch the content from.
   * @param {HTMLElement} target - The target element to update with the fetched content.
   * @param {boolean} [append=false] - Optional. Specifies whether to append the fetched content to the target element.
   */
  getContent(url, target, append = false) {
    fetch(url).
      then((response) => response.text()).
      then((text) => append ? this.#append(text, target) : target.innerHTML = text)
  }

  #append(text, target) {
    this.#textToNodes(text).forEach(node => target.appendChild(node));
  }

  #textToNodes(text) {
    return new DOMParser().parseFromString(text, 'text/html').body.childNodes;
  }
}

class AppendContent extends DynamicContentElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.querySelector('button').addEventListener('click', () => {
      this.getContent(this.dataset.src, this, 'append')
    })
  }
}

customElements.define('append-content', AppendContent)

class ReplaceContent extends DynamicContentElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const target = document.querySelector(this.dataset.target);
    this.querySelector('button').addEventListener('click', () => {
      this.getContent(this.dataset.src, target);
    })
  }
}

customElements.define('replace-content', ReplaceContent)

class SelectContent extends DynamicContentElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const target = document.querySelector(this.dataset.target);
    this.querySelector('select').addEventListener('change', (e) => {
      if (e.target.value) {
        const url = `${this.dataset.src}?${e.target.name}=${e.target.value}`
        this.getContent(url, target);
      } else {
        target.innerHTML = "";
      }
    })
  }
}

customElements.define('select-content', SelectContent)