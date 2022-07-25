const nameForm = document.querySelector("#form4Example1");
const lastName = document.querySelector("#form4Example2");
const mail = document.querySelector("#form4Example3");
const textArea = document.querySelector("#form4Example4");

const btnSend = document.querySelector("#button");
const formSend = document.querySelector("#send-mail")

eventListeners();

function eventListeners () {
    document.addEventListener('DOMContentLoaded', startApp);

    //Campos del formulario
    nameForm.addEventListener('blur', validarFormulario);
    lastName.addEventListener('blur', validarFormulario);
    mail.addEventListener('blur', validarFormulario);
    textArea.addEventListener('blur', validarFormulario);

    // Boton de enviar en el submit
/*     formSend.addEventListener('submit', sendMail); */
}

function startApp() {
    // deshabilitar el envio
    btnSend.disabled = true;
    btnSend.classList.add('cursor-not-allowed', 'opacity-50')
}

function validarFormulario(e) {

    if(e.target.value.length > 0 ) {
        nameForm.style.borderBottomColor = 'green';
        nameForm.classList.remove('error');
   } else {
        nameForm.target.classList.add('border', 'border-red-500');
   } 





   // Validar unicamente el email
   if(this.type === 'mail') {
        validateMail(this);
   }


   if(nameForm.value !== '' && lastName.value !== '' && mail.value !== '' && textArea.value !== '' ) {
      btnSend.disabled = false;
      btnSend.classList.remove('opacity-50');
      btnSend.classList.remove('cursor-not-allowed');
   }
}

// Resetear el formulario 
function resetFormulario(e) {
    formSend.reset();
    e.preventDefault();
}


function validateMail(mail) {
    const mensaje = mail.value;

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if( re.test(mensaje.toLowerCase()) ) {
         mail.style.borderBottomColor = 'green';
         mail.classList.remove('error');
    } else {
         mail.style.borderBottomColor = 'red';
         mail.classList.add('error');
    }
}


























/* nameForm.addEventListener("change", function setNameForm(e) {
    e.target.value;
});

lastName.addEventListener("change", function setLastName(e) {
    console.log(e.target.value)
});

mail.addEventListener("change", function setMail(e) {
    console.log(e.target.value)
});

textArea.addEventListener("change", function setTextArea(e) {
    console.log(e.target.value)
}); */

/* function validation () {
    if( newName == null || newName.length == 0 || /^\s+$/.test(newName) ) {
        alert("Name: [ERROR] Please, just letter, cant be empty")
        return false;
    } else if ( lastName == null || lastName.length == 0 || /^\s+$/.test(lastName) ) {
        alert("Last Name: [ERROR] Please, just letter, cant be empty")
        return false;
    } else if ( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(mail)) ) {
        alert("Mail: [ERROR] Please, cant be empty")
        return false;
    }else if ( textArea == null || textArea.length == 0 ) {
        alert("Message: [ERROR] Please, cant be empty")
        return false;
    }
        alert('Thanks, mail send.')
        return true;
} */


