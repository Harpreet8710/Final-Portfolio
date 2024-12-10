
const scriptURL = 'https://script.google.com/macros/s/AKfycbwwd4XZOpV3TatHCRlRuiwycGJZwH8RnXDpsd-yJ4F1Cd-zWr8MWKJYYLw8FfOidTVI/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      alert('Success! Your message has been sent.');
      form.reset(); 
    })
    .catch(error => alert('Error! Unable to send your message.'));
});
