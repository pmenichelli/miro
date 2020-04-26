import { TextPill } from '../text-pill/text-pill';

export class InputEmails {
  constructor(hostElement) {
    // bind class methods
    this._onTextPillRemove = this._onTextPillRemove.bind(this);
    this._onInputChange = this._onInputPaste.bind(this);
    this._onInputKeydown = this._onInputKeydown.bind(this);
    this._onInputBlur = this._onInputBlur.bind(this);
    this._onInputPaste = this._onInputPaste.bind(this);
    this._onContainerClick = this._onContainerClick.bind(this);

    // create markup
    const markup = new DOMParser().parseFromString(
      `
      <div class="input-emails">
        <div class="input-emails__container">
          <input class="input-emails__input" type="text" placeholder="add more people..." />
        </div>
      </div>
    `,
      'text/html',
    ).body.children[0];
    this.hostElement = hostElement;
    this.hostElement.appendChild(markup);

    // save element references
    this.containerElement = this.hostElement.querySelector('.input-emails__container');
    this.inputElement = this.hostElement.querySelector('.input-emails__input');

    // register event listeners
    this.containerElement.addEventListener('text-pill-remove', this._onTextPillRemove);
    this.containerElement.addEventListener('click', this._onContainerClick);
    this.inputElement.addEventListener('paste', this._onInputPaste);
    this.inputElement.addEventListener('keydown', this._onInputKeydown);
    this.inputElement.addEventListener('blur', this._onInputBlur);

    // initialize internal props
    this.regex = /^(([^<>()\[\]\.,;:\s@\']+(\.[^<>()\[\]\.,;:\s@\']+)*)|(\'.+\'))@(([^<>()[\]\.,;:\s@\']+\.)+[^<>()[\]\.,;:\s@\']{2,})$/i;
    this.textPills = [];
  }

  addEmail(emailStr) {
    if (!emailStr) {
      return;
    }
    const emailPill = this._createTextPill(emailStr.trim());
    this.containerElement.insertBefore(emailPill.hostElement, this.inputElement);
    this._dispatchCUstomEvent(this.hostElement, 'add', emailStr);
  }

  getEmails() {
    return this.textPills.filter((pill) => {
      return pill.valid;
    }).length;
  }

  replaceAll(...emails) {
    const pills = Array.prototype.slice.call(this.containerElement.getElementsByClassName('email-pill'));
    pills.map((pill) => this.containerElement.removeChild(pill));
    this.textPills = [];

    emails.map((email) => {
      if (email) {
        this.addEmail(email);
      }
    });
    this._dispatchCUstomEvent(this.hostElement, 'replace', emails);
  }

  _createTextPill(emailStr) {
    const hostElement = document.createElement('div');
    hostElement.classList.add('email-pill');
    const textPill = new TextPill(hostElement, emailStr, this.regex);
    this.textPills.push(textPill);
    return textPill;
  }

  _removeTextPill(textPill) {
    this.containerElement.removeChild(textPill.hostElement);
    this.textPills = this.textPills.filter((pill) => pill !== textPill);
    this._dispatchCUstomEvent(this.hostElement, 'remove', textPill.text);
  }

  _dispatchCUstomEvent(dipatcherElement, eventName, detail) {
    let event;
    if (typeof CustomEvent === 'function') {
      event = new CustomEvent(eventName, { bubbles: true, composed: true, detail: detail });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(eventName, true, true, detail);
    }
    dipatcherElement.dispatchEvent(event);
  }

  _isComaOrEnter(keyboardEvent) {
    const { code, keyCode } = keyboardEvent;
    if (code !== undefined) {
      return code == 'Comma' || code === 'Enter';
    }
    return keyCode === 188 || keyCode === 13;
  }

  _onTextPillRemove(event) {
    const textPill = event.detail;
    this._removeTextPill(textPill);
  }

  _onInputBlur() {
    if (!this.inputElement.value.trim()) {
      this.inputElement.value = '';
      return;
    }
    this.addEmail(this.inputElement.value);
    this.inputElement.value = '';
  }

  _onInputPaste(event) {
    event.preventDefault();
    const emails = event.clipboardData
      .getData('text')
      .split(',')
      .map((email) => email.trim());

    emails.forEach((email) => {
      this.addEmail(email);
    });
  }

  _onInputKeydown(keyboardEvent) {
    if (!this._isComaOrEnter(keyboardEvent)) {
      return;
    }
    keyboardEvent.preventDefault();
    if (!this.inputElement.value.trim()) {
      this.inputElement.value = '';
      return;
    }
    this.addEmail(this.inputElement.value.trim());
    this.inputElement.value = '';
  }

  _onContainerClick() {
    this.inputElement.focus();
  }
}
