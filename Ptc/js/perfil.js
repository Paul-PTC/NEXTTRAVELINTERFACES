document.addEventListener('DOMContentLoaded', () => {
  const changePhotoBtn = document.getElementById('changePhotoBtn');
  const fileInput = document.getElementById('fileInput');
  const profileImage = document.querySelector('.card-image img');

  // Al hacer click en el botón, abre el selector de archivos
  changePhotoBtn.addEventListener('click', () => {
    fileInput.click();
  });

  // Cuando el usuario selecciona un archivo, actualiza la imagen
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        profileImage.src = event.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      alert('Por favor selecciona una imagen válida.');
    }
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutBtn');
  const logoutModal = document.getElementById('logoutModal');
  const confirmLogout = document.getElementById('confirmLogout');
  const cancelLogout = document.getElementById('cancelLogout');

  logoutBtn.addEventListener('click', () => {
    logoutModal.style.display = 'flex'; // Mostrar modal
  });

  cancelLogout.addEventListener('click', () => {
    logoutModal.style.display = 'none'; // Ocultar modal
  });

 confirmLogout.addEventListener('click', (e) => {
  e.preventDefault(); // previene cualquier acción por defecto (por si está en un form)
  // Limpia sesión si tienes lógica (localStorage, cookies, etc.)
  window.location.href = "loging.html";
});


  // Opcional: cerrar modal al click fuera del contenido
  window.addEventListener('click', (e) => {
    if (e.target === logoutModal) {
      logoutModal.style.display = 'none';
    }
  });
});
