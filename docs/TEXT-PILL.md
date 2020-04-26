# Component text-pill

###### tags: `Miro`

## Description

 Styles a string with pill shape. When a pattern is provided the text pill has two possible states, valid and invalid depending on whether the provided text text matches or not the pattern. Styles are applied according to the state.

## Api

### Attributes

| Name          | Type         | Default   | Required |
| ------------- |:------------ |:----------|:---------|
| pattern       | regex        | undefined | false    |
| text          | string       | undefined | false    |

### Properties

| Name          | Type         | Read only |
| ------------- |:------------ |:----------|
| valid         | boolean      | true      |

### Events

| Name             | Details             | Description                                 |
| ---------------- |:------------------- |:--------------------------------------------|
| text-pill-remove | textPill {TextPill} | Dispatched when the cross button is clicked. In the event detail a reference to the TextPill instance is provided. |

## Example

```html=
<div id="text-pill"></div>
```

```javascript=
import { TextPill } from 'path/to/comopnent/source';

const container = document.querySelector('#text-pill');
const testPill = new TextPill(container, 'test@gmail.com');
```
