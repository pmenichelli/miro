export class TextPill {
  constructor(hostElement, text, pattern) {
    // bind class methods
    this._onRemoveButtonClick = this._onRemoveButtonClick.bind(this);

    // create markup
    const markup = new DOMParser().parseFromString(
      `
      <div class="pill">
        <div class="pill__text"></div>
        <div class="pill__remove">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0.8L7.2 0L4 3.2L0.8 0L0 0.8L3.2 4L0 7.2L0.8 8L4 4.8L7.2 8L8 7.2L4.8 4L8 0.8Z" fill="#050038"/>
          </svg>
        </div>
      </div>
    `,
      'text/html',
    ).body.children[0];
    this.hostElement = hostElement;
    this.hostElement.style.display = 'inline-block';
    this.hostElement.style.boxSizing = 'border-box';
    this.hostElement.appendChild(markup);

    // save element references
    this.pillElement = this.hostElement.querySelector('.pill');
    this.textElement = this.hostElement.querySelector('.pill__text');
    this.removeElement = this.hostElement.querySelector('.pill__remove');

    // save properties
    this.text = text;
    this.pattern = pattern;

    // register event listeners
    this.removeElement.addEventListener('click', this._onRemoveButtonClick);
  }

  get text() {
    return this.textElement.innerHTML;
  }

  set text(value) {
    this._onTextAttributeChange(value);
  }

  get pattern() {
    return this.regex;
  }

  set pattern(value) {
    if (typeof value === 'string' && value) {
      this.regex = new RegExp(value);
    } else if (value instanceof RegExp) {
      this.regex = value;
    } else {
      this.regex = null;
    }
    this._validate();
  }

  get valid() {
    return this._validate();
  }

  _validate() {
    if (!this.regex) {
      return true;
    }

    const text = this.textElement.innerHTML;
    const valid = this.regex.test(text);
    if (!valid) {
      this.pillElement.classList.add('pill--invalid');
    } else {
      this.pillElement.classList.remove('pill--invalid');
    }
    return valid;
  }

  _capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  _camelCase(name, delim = '-') {
    const pattern = new RegExp(`${delim}([a-z])`, 'g');
    return name.replace(pattern, (match, capture) => capture.toUpperCase());
  }

  _onTextAttributeChange(newValue) {
    this.textElement.innerHTML = newValue;
    this._validate();
  }

  _onRemoveButtonClick() {
    let event;
    if (typeof CustomEvent === 'function') {
      event = new CustomEvent('text-pill-remove', { bubbles: true, composed: true, detail: this });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent('text-pill-remove', true, true, this);
    }

    this.hostElement.dispatchEvent(event);
  }
}
