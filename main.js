document.addEventListener('DOMContentLoaded', function() {
  const formularioDeRegistro = document.getElementById('formularioDeRegistro');
  const registroBtn = document.getElementById('registroBtn');

  registroBtn.addEventListener('click', function() {
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const email = document.getElementById('email').value;
      const celular = document.getElementById('celular').value;

      if (!validarNombreApellido(nombre)) {
          alert('El nombre debe contener solo letras.');
          return;
      }

      if (!validarNombreApellido(apellido)) {
          alert('El apellido debe contener solo letras.');
          return;
      }

      if (!validarEmail(email)) {
          alert('El email debe ser válido (contener @ y .com).');
          return;
      }

      if (!validarCelular(celular)) {
          alert('El número de celular debe contener solo números.');
          return;
      }

      const usuario = { nombre, apellido, email, celular };
      console.log('click', usuario);

      // Guardar en localStorage
      const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
      usuariosRegistrados.push(usuario);
      localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

      alert('Registro exitoso. ¡Gracias por registrarte!');
      resetearFormulario();
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
