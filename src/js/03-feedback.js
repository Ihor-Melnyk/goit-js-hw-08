import { throttle } from "lodash";

const KEY = 'feedback-form-state';
const refs = {
    form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', throttle(onInput, 500))
refs.form.addEventListener('submit', onFormSubmit)
 //повернення значень в поля
checksLocalStorage();

function onInput(e) {
    const formData = localStorage.getItem(KEY)
        ? JSON.parse(localStorage.getItem(KEY))
        : {};
    formData[e.target.name] = e.target.value;
    localStorage.setItem(KEY, JSON.stringify(formData));  
}

function onFormSubmit(e) { 
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(KEY);
}

function checksLocalStorage() {
    const savedMessage = JSON.parse(localStorage.getItem(KEY));
    if (savedMessage) {
        refs.form.elements.email.value = savedMessage.email || '';
        refs.form.elements.message.value = savedMessage.message || '';
    }
}
