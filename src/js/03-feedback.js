import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');


const KEY = 'feedback-form-state';
let formData = {};

form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(formInput, 500));

restoreFormData();
function restoreFormData() {
    const saveData = localStorage.getItem(KEY);
    if (saveData) {
    const parsedData = JSON.parse(saveData)
    const elements = form.querySelectorAll(`[name]`)

    for (const element of elements) {
        if (Object.keys(parsedData).includes(element.name)) {
            element.value = parsedData[element.name];
            formData[element.name] = parsedData[element.name];
        }
        }
    }
        return;
}


function formSubmit(event) {
    const saveData = JSON.parse(localStorage.getItem(KEY));
    event.preventDefault();
    console.log(saveData);
    event.target.reset();
    localStorage.removeItem(KEY);
    formData = {};
}

function formInput(event) {
    formData[event.target.name] = event.target.value;

localStorage.setItem(KEY, JSON.stringify(formData));
}


