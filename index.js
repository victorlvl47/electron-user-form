var formulario = document.getElementById('form-login');
var user = document.getElementById('nombre-login');
var pass = document.getElementById('pass-login');
var emailInput = document.getElementById('email-login');
var emailError = document.getElementById('email-error');


window.comunicacion.invalidEmail(function(event, args) {
    emailInput.classList.add('error');
    emailError.textContent = "Por favor, introduce una direccion de correo electronico valida";
});



formulario.addEventListener('submit', function(event) {
    
    event.preventDefault();

    // Cleanup error messages
    emailInput.classList.remove('error');
    emailError.textContent = '';

    window.comunicacion.registroValido([user.value, pass.value, emailInput.value])
});