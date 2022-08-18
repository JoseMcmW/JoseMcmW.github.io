//Variables
const btnSend = document.querySelector('#button');
const form = document.querySelector('#send-mail');
const separator = document.querySelector('#separator')

//Variables Inputs
const userName = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

eventListeners()
function eventListeners () {
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //listener inputs
    userName.addEventListener('blur', validateForm);
    lastName.addEventListener('blur', validateForm);
    email.addEventListener('blur', validateForm);
    message.addEventListener('blur', validateForm);
}

//Functions
//Disable Send Button
function iniciarApp() {
    btnSend.disabled = true;
    btnSend.classList.add('cursor-not-allowed', 'opacity-50');
}

//Validate Inputs
function validateForm (e) {
    if(e.target.value.length <= 0){
        showError('Todos los campos son obligatorios')
    } else {
        console.log('Los campos fueron llenados exitosamente')
    }
}

function showError(textError) {
    const messageError = document.createElement('p');
    messageError.textContent = textError;
    messageError.classList.add('alert', 'alert-danger', 'text-center')

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0) {
        separator.appendChild(messageError);
    }
}