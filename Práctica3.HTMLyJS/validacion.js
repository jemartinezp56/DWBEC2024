document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const mensajeError = document.getElementById("mensajeError");

    formulario.addEventListener("submit", function(e) {
        mensajeError.textContent = ''; 

        const dni = document.getElementById("dni").value;
        if (!dni) {
            mensajeError.textContent = "Completa el campo DNI.";
            e.preventDefault();
            return;
        }

        if (isNaN(dni)) {
            mensajeError.textContent = "Teclea un DNI (solo números).";
            e.preventDefault();
            return;
        }

        if (!validarLetraDNI(dni)) {
            mensajeError.textContent = "La letra del NIF es incorrecta.";
            e.preventDefault();
            return;
        }

        const email = document.getElementById("email").value;
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!emailPattern.test(email)) {
            mensajeError.textContent = "El correo electrónico no es válido.";
            e.preventDefault();
            return;
        }
    });

    function validarLetraDNI(dni) {
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const numero = parseInt(dni, 10);
        const letraCorrecta = letras[numero % 23];
        return dni.endsWith(letraCorrecta);
    }
});