document.addEventListener('DOMContentLoaded', function() {
    const formularioDeRegistro = document.getElementById('formularioDeRegistro');
    const registroBtn = document.getElementById('registroBtn');
    const modal = document.getElementById('modal');
    const cerrarModal = document.getElementById('cerrarModal');

    registroBtn.addEventListener('click', function() {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const celular = document.getElementById('celular').value;

        if (!validarNombreApellido(nombre) || !validarNombreApellido(apellido) ||
            !validarEmail(email) || !validarCelular(celular)) {
            alert('Por favor, completa los campos correctamente.');
            return;
        }

        // Guardar en localStorage
        const usuario = { nombre, apellido, email, celular };
        const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuariosRegistrados.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

        // Mostrar el modal
        modal.style.display = 'block';
        resetearFormulario();
    });

    cerrarModal.addEventListener('click', function() {
        // Cerrar el modal
        modal.style.display = 'none';
    });
});

function validarNombreApellido(texto) {
    return /^[a-zA-Z]+$/.test(texto);
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarCelular(celular) {
    return /^[0-9]+$/.test(celular);
}

function resetearFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('email').value = '';
    document.getElementById('celular').value = '';
}

