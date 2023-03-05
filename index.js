var formulario = document.getElementById('form-login');
var user = document.getElementById('nombre-login');
var pass = document.getElementById('pass-login');
var emailInput = document.getElementById('email-login');
var emailError = document.getElementById('email-error');
var nombreError = document.getElementById('nombre-error');


window.comunicacion.invalidEmail(function(event, args) {
    emailInput.classList.add('error');
    emailError.textContent = "Por favor, introduce una direccion de correo electronico valida";
});

window.comunicacion.invalidUsername(function(event, args) {
    user.classList.add('error');
    nombreError.textContent = "El nombre de usuario tiene que ser mayor a 6 caracteres";
});



formulario.addEventListener('submit', function(event) {
    
    event.preventDefault();

    // Cleanup error messages
    emailInput.classList.remove('error');
    emailError.textContent = '';
    user.classList.remove('error');
    nombreError.textContent = '';

    window.comunicacion.registroValido([user.value, pass.value, emailInput.value])
});