import { InputEmails } from '../components/input-emails/input-emails';

const inputEmailsHostElement = document.getElementById('input-emails-test');

// create input emails component
const inputEmails = new InputEmails(inputEmailsHostElement);

// save elements references
const addEmailsBtn = document.querySelector('#add-emails-btn');
const getEmailsBtn = document.querySelector('#get-emails-btn');
const replaceEmailsBtn = document.querySelector('#replace-emails-btn');

// add event listeners
addEmailsBtn.addEventListener('click', addRandom);
getEmailsBtn.addEventListener('click', alertEmails);
replaceEmailsBtn.addEventListener('click', replaceEmails);
inputEmailsHostElement.addEventListener('replace', (event) => console.log(event.detail));
inputEmailsHostElement.addEventListener('add', (event) => console.log(event.detail));
inputEmailsHostElement.addEventListener('remove', (event) => console.log(event.detail));

/**
 * Repalces all the emails in the emails-input component with the ones from the input field
 */
function replaceEmails() {
	const emails = document
		.querySelector('#replace')
		.value.split(',')
		.map((email) => email.trim());

	inputEmails.replaceAll(...emails);
}

/**
 * Adds a random email to the emails-input component
 */
function addRandom() {
	const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
	let randomEmail = '';
	for (var ii = 0; ii < 10; ii++) {
		randomEmail += chars[Math.floor(Math.random() * chars.length)];
	}
	randomEmail += '@test.nl';

	inputEmails.addEmail(randomEmail);
}

/**
 * show valid emails count in an alert message
 */
function alertEmails() {
	alert(`The number of valid emails is: ${inputEmails.getEmails()}`);
}
