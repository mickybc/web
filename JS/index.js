// ✅ Al iniciar, todo oculto
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







// Generar arrays dinámicamente
const dias = Array.from({ length: 31 }, (_, i) => i + 1);
const meses = Array.from({ length: 12 }, (_, i) => i + 1);
const anios = [2024, 2025, 2026, 2027, 2028, 2029, 2030];

const horas = [];
for (let h = 9; h <= 20; h++) {
  horas.push(`${h}:00`);
  if (h < 20) horas.push(`${h}:30`);
}



// Insertar opciones en los selects
function cargarOpciones(selectId, opciones) {
  const select = document.getElementById(selectId);
  select.innerHTML = `<option value="">Selecciona</option>`;
  opciones.forEach(op => {
    const option = document.createElement("option");
    option.textContent = op;
    select.appendChild(option);
  });
}

cargarOpciones("dia", dias);
cargarOpciones("mes", meses);
cargarOpciones("anio", anios);
cargarOpciones("hora", horas);
cargarOpciones("servicio", servicios);

// Validación en blur
const campos = [
  { id: "nombre", error: "error-nombre", validate: value => value.trim() !== "" },
  { id: "email", error: "error-email", validate: value => /^[^@]+@[^@]+\.[a-z]{2,}$/.test(value) },
  { id: "telefono", error: "error-telefono", validate: value => /^[0-9]{9}$/.test(value) }
];

const selectExtras = [
  { id: "hora", error: "error-hora" },
  { id: "servicio", error: "error-servicio" }
];

campos.forEach(({ id, error, validate }) => {
  const input = document.getElementById(id);
  const errorDiv = document.getElementById(error);
  input.addEventListener("blur", () => {
    errorDiv.style.display = validate(input.value) ? "none" : "block";
  });
});

["dia", "mes", "anio"].forEach(id => {
  document.getElementById(id).addEventListener("blur", validarFecha);
});

function validarFecha() {
  const dia = document.getElementById("dia").value;
  const mes = document.getElementById("mes").value;
  const anio = document.getElementById("anio").value;
  const errorFecha = document.getElementById("error-fecha");
  errorFecha.style.display = (dia && mes && anio) ? "none" : "block";
}

selectExtras.forEach(({ id, error }) => {
  const sel = document.getElementById(id);
  const err = document.getElementById(error);
  sel.addEventListener("blur", () => {
    err.style.display = sel.value ? "none" : "block";
  });
});

// Al enviar
document.getElementById("formulario").addEventListener("submit", e => {
  e.preventDefault();
  alert("Formulario enviado correctamente");
});









 
