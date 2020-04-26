# Component input-emails

###### tags: `Miro`

## Description

Form control that accepts text as input and converts valid email strings into pill-shaped colored text after pressing coma (,) enter or the component loses focus. It accepts any number of emails. This component will exapand horizontally to match the width of its container element. Its content can be scrolled when it overflows vertically.
If an empty string is entered, the component will ignore it.

## Api

### Methods

| Name          | Arguments          | Return      |
| ------------- |:------------------ |:------------|
| addEmail      | email {string}     |             |
| getEmails     |                    | count {int} |
| replaceAll    | ...emails {string} |             |

### Events

| Name    | Details  | Description                              |
| ------- |:--------- |:-----------------------------------------|
| replace | ...emails {string} | Dispatched when all emails are replaced  |
| remove  | email {string}    | Dispatched when a new email is entered   |
| add     | email {string}    | Dispatched when an email is removed      |

## Example

```html=
<div id="input-emails-test"></div>
```

```javascript=
import { InputEmails } from 'path/to/comopnent/source';

const container = document.querySelector('#input-emails-test');
const testPill = new InputEmails(container);
```
