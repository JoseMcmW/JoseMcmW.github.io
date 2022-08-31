//Variables
const btnSend = document.querySelector('#button');
const form = document.querySelector('#send-mail');
const separator = document.querySelector('#separator')

//Variables Inputs
const userName = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

const er =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners()
function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //listener inputs
    userName.addEventListener('blur', validateForm);
    lastName.addEventListener('blur', validateForm);
    email.addEventListener('blur', validateForm);
    message.addEventListener('blur', validateForm);

    form.addEventListener('submit', sendEmail)
}

//Functions
//Disable Send Button
function iniciarApp() {
    btnSend.disabled = true;
    btnSend.classList.add('cursor-not-allowed', 'opacity-50');
}

//Validate Inputs
function validateForm (e) {
    if(e.target.value.length > 0){
        const error = document.querySelector('p .error');
        if(error) {
            error.remove();
        }
        e.target.classList.remove('border', 'border-danger', 'bg-danger', 'bg-opacity-10');
        e.target.classList.add('border', 'border-success', 'bg-success', 'bg-opacity-10');
    } else {
        e.target.classList.remove('border', 'border-success', 'bg-success', 'bg-opacity-10');
        e.target.classList.add('border', 'border-danger', 'bg-danger', 'bg-opacity-10');
        showError('You must fill in all fields');
    }

    //Mail Validation
    if(e.target.type === 'email') {
        
        if(er.test(e.target.value)) {
            const error = document.querySelector('p.error');
            if(error) {
                error.remove();
            }
    
            e.target.classList.remove('border', 'border-danger', 'bg-danger', 'bg-opacity-10');
            e.target.classList.add('border', 'border-success', 'bg-success', 'bg-opacity-10');
        } else {
            e.target.classList.remove('border', 'border-success', 'bg-success', 'bg-opacity-10');
            e.target.classList.add('border', 'border-danger', 'bg-danger', 'bg-opacity-10');
            showError('Email invalid.');
        }
    }

    if(er.test(email.value) && userName.value !== '' && lastName.value !== '' && message.value !== '') {
        btnSend.disabled = false;
        btnSend.classList.remove('cursor-not-allowed', 'opacity-50');
    }
    
}

function showError(textError) {
    const messageError = document.createElement('p');
    messageError.textContent = textError;
    messageError.classList.add('alert', 'alert-danger', 'text-center', 'error')

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0) {
        separator.appendChild(messageError);
    }
}

function sendEmail (e) {
    e.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    setTimeout(() => {
        spinner.style.display = 'none';

        const textSend = document.createElement('p');
        textSend.textContent = 'Mail Send, thank you.';
        textSend.classList.add('text-center', 'border', 'border-success', 'bg-success', 'bg-opacity-10', 'p-2', 'my-10', 'fs-5')

        form.insertBefore(textSend, spinner);


    }, 3000);
}



