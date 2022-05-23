import { throttle } from "lodash";
import { mainModule } from "process";

const refs = {
    form: document.querySelector('.feedback-form'),
    inputEmail: document.querySelector('input'),
    inputMessage: document.querySelector('textarea'),
};
populateForm(); //повернення значень в поля

const formData = {};

refs.form.addEventListener('submit', onFormSubmit)
function onFormSubmit(e) { 
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
    console.log(formData);
}

refs.form.addEventListener('input', throttle(onInput, 500))
function onInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    
}

function populateForm() {
    let savedMessage = JSON.parse(localStorage.getItem("feedback-form-state"));
    
    if (savedMessage) { //перевірка на пусте значення
        refs.inputMessage.value = savedMessage.message;
        refs.inputEmail.value = savedMessage.email;
    }
}
