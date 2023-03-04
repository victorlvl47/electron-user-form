var formulario = document.getElementById('form-login');
var user = document.getElementById('nombre-login');
var pass = document.getElementById('pass-login');

formulario.addEventListener('submit', function(event) {
    
    event.preventDefault();

    window.comunicacion.registroValido([user.value, pass.value])
});