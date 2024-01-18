const feedbackForm = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const savedDataForm = JSON.parse(localStorage.getItem(localStorageKey)) || {};
if (savedDataForm) {
  feedbackForm.elements.email.value = savedDataForm.email || '';
  feedbackForm.elements.message.value = savedDataForm.message || '';
}

feedbackForm.addEventListener('input', evt => {
  const dataObject = {
    email: feedbackForm.elements.email.value.trim(),
    message: feedbackForm.elements.message.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(dataObject));
});

feedbackForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const trimmedEmail = feedbackForm.elements.email.value.trim();
  const trimmedMessage = feedbackForm.elements.message.value.trim();

  
  if (!trimmedEmail || !trimmedMessage) {
    alert('All form fields must be filled in');
    return;
  } else {
    const resultValue = {
      email: trimmedEmail,
      message: trimmedMessage,
    };
    console.log(resultValue);
    localStorage.removeItem(localStorageKey);
    feedbackForm.reset();
  }
});
