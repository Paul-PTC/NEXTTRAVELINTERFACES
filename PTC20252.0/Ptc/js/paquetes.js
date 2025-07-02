// Mostrar el modal cuando se hace clic en el botón flotante
document.getElementById("btnAgregarLugar").addEventListener("click", () => {
  document.getElementById("modalLugar").style.display = "flex";
});

// Ocultar el modal cuando se hace clic en "Cancelar"
document.getElementById("btnCerrarModal").addEventListener("click", () => {
  document.getElementById("modalLugar").style.display = "none";
});
