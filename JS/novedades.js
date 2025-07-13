window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('ventanaEmergente').style.display = 'none';
  document.getElementById('formularioReserva').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
});

const perfil = document.getElementById('perfilUsuario');
const ventana = document.getElementById('ventanaEmergente');
const cerrar = document.getElementById('cerrarVentana');

perfil.addEventListener('click', () => {
  ventana.style.display = 'flex'; // ✅ Se muestra cuando haces clic en el perfil
});

cerrar.addEventListener('click', () => {
  ventana.style.display = 'none';
});

const reservarBtns = document.querySelectorAll("button");
const formulario = document.getElementById("formularioReserva");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closerFormulario");

reservarBtns.forEach(btn => {
  if (btn.textContent.includes("RESERVAR")) {
    btn.addEventListener("click", () => {
      formulario.style.display = "block";
      overlay.style.display = "block";
    });
  }
});

closeBtn.addEventListener("click", () => {
  formulario.style.display = "none";
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  formulario.style.display = "none";
  overlay.style.display = "none";
});