var formulario = document.getElementById('form-login');
var user = document.getElementById('nombre-login');
var pass = document.getElementById('pass-login');
var emailInput = document.getElementById('email-login');
var emailError = document.getElementById('email-error');
var nombreError = document.getElementById('nombre-error');
var passError = document.getElementById('pass-error');


window.comunicacion.invalidEmail(function(event, args) {
    emailInput.classList.add('error');
    emailError.textContent = "Por favor, introduce una direccion de correo electronico valida";
});

window.comunicacion.invalidUsername(function(event, args) {
    user.classList.add('error');
    nombreError.textContent = "El nombre de usuario tiene que ser mayor a 6 caracteres";
});

window.comunicacion.invalidPass(function(event, args) {
    pass.classList.add('error');
    passError.textContent = "La contrasena tiene que ser mayor a 8 caracteres";
});




formulario.addEventListener('submit', function(event) {
    
    event.preventDefault();

    // Cleanup error messages
    emailInput.classList.remove('error');
    emailError.textContent = '';
    user.classList.remove('error');
    nombreError.textContent = '';
    pass.classList.remove('error');
    passError.textContent = '';

    window.comunicacion.registroValido([user.value, pass.value, emailInput.value])
});