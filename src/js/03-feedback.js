import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');

feedbackFormRef.addEventListener('submit', onfeedbackForm);
feedbackFormRef.addEventListener('input', throttle(onTextareaEmail, 500));
const dataObj = {};

if (localStorage.getItem('feedback-form-state')) {
  feedbackFormRef.elements.email.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
  feedbackFormRef.elements.message.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
}

function onTextareaEmail(e) {
  dataObj[e.target.name] = e.target.value;
  refreshLocalStorage();
}
function refreshLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(dataObj));
}

function onfeedbackForm(e) {
  e.preventDefault();

  localStorage.removeItem('feedback-form-state');
  feedbackFormRef.reset();
}
