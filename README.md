# Miro assignment

###### tags: `Miro`

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

## Demo link

The project can be checked [here](https://master.d1p0jhs54m48cb.amplifyapp.com)

## Run locally:

#### Install dependencies:

```bash
$ npm install
```

#### Run the project:

```bash
$ npm run dev
```

## Description:

This app consist of a form that accepts multiple emails. It's composed by two components, InputEmails and TextPill.

The TextPill component accpets a text (and a pattern optionally) and styles the text with a pill shape according to design. For more info on this component refer the component's documentation [here](/docs/TEXT-PILL.md).

The InputEmails component makes use of the TextPill and has the logic to append new emails, delete, replace, etc. For more info on this component refer the component's documentation [here](/docs/INPUT-EMAILS.md).

## Notes and considerations

* I only implemented a couple of events for the input-emails component, though if I wanted to be fullly compliance to the W3 form control spec I should have implemented many more (like oninput, focus and blur events)
* I added a method to the input-emails component so it could be easily handled with javascript to enter emails programatically: `addEmail(emailStr)`. This was to easily add the random email from the outside.
* I didn't use css or sass variables due to lack of time. But that would have been a good approach to organize the style a little more and make it easier to maintain.
* Test should have been implemented but due to lack of time I skipped them. I would have liked to implement some visual diffing with Pupeteer and Pixelmatch and also some integration tests.
