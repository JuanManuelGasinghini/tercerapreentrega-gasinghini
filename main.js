document.addEventListener('DOMContentLoaded', function() {
    const formularioDeRegistro= document.getElementById('formularioDeRegistro');
    const registroBtn = document.getElementById('registroBtn');
    
    registroBtn.addEventListener('click', function() {
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const email = document.getElementById('email').value;
      const celular = document.getElementById('celular').value;
      
      
      const usuario = { nombre, apellido, email, celular };
      console.log('click', usuario);
      
   });
  });
  

