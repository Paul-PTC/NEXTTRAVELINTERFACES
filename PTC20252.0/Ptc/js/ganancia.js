const btnToggleOpciones = document.getElementById('btnToggleOpciones');
  const fabOpciones = document.getElementById('fabOpciones');

  btnToggleOpciones.addEventListener('click', () => {
    fabOpciones.style.display = fabOpciones.style.display === 'flex' ? 'none' : 'flex';
  });

  // Luego aquí agregarías la funcionalidad real:
  document.getElementById('btnAgregarGanancia').addEventListener('click', () => {
    alert('Abrir formulario para agregar ganancia (luego se hará)');
  });

  document.getElementById('btnVerHistorial').addEventListener('click', () => {
    alert('Mostrar historial de ganancias (próximo paso)');
  });