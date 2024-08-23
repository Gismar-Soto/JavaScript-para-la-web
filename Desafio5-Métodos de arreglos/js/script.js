// inicial tareas
let tareas = [
  { id: 16, descripcion: "Hacer mercado", realizada: true },
  { id: 60, descripcion: "Estudiar para la prueba", realizada: false },
  { id: 24, descripcion: "Sacar a pasear a Tobby", realizada: false },
];

// Función para generar un ID de 2 dígitos
function generarId() {
    return Math.floor(10 + Math.random() * 90);
}

// Función para renderizar las tareas en la tabla
function renderTareas() {
  const listaTareas = document.getElementById("listaTareas");
  listaTareas.innerHTML = "";
  tareas.forEach((tarea) => {
    const tr = document.createElement("tr");

    const tdId = document.createElement("td");
    tdId.textContent = tarea.id;
    tr.appendChild(tdId);

    const tdDescripcion = document.createElement("td");
    tdDescripcion.textContent = tarea.descripcion;
    if (tarea.realizada) {
      tdDescripcion.classList.add("tarea-realizada");
    }
    tr.appendChild(tdDescripcion);

    const tdCompletar = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.realizada;
    checkbox.className = "form-check-input boton-completar";
    checkbox.onclick = () => completarTarea(tarea.id);
    tdCompletar.appendChild(checkbox);
    tr.appendChild(tdCompletar);

    const tdEliminar = document.createElement("td");
    const botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = "&times;";
    botonEliminar.className = "boton-eliminar";
    botonEliminar.onclick = () => eliminarTarea(tarea.id);
    tdEliminar.appendChild(botonEliminar);
    tr.appendChild(tdEliminar);

    listaTareas.appendChild(tr);
  });

  document.getElementById("totalTareas").textContent = tareas.length;
  document.getElementById("tareasCompletadas").textContent = tareas.filter(
    (t) => t.realizada
  ).length;
}

// Función para agregar una nueva tarea
function agregarTarea() {
  const descripcion = document.getElementById("nuevaTarea").value;
  if (descripcion.trim()) {
    const nuevaTarea = {
      id: generarId(), // mi generador de ID para que sea mas corto 
      descripcion: descripcion,
      realizada: false,
    };
    tareas.push(nuevaTarea);
    renderTareas();
    document.getElementById("nuevaTarea").value = "";
  }
}

// Función para marcar una tarea como completada o no
function completarTarea(id) {
  const tarea = tareas.find((t) => t.id === id);
  if (tarea) {
    tarea.realizada = !tarea.realizada;
    renderTareas();
  }
}

// Función para eliminar una tarea
function eliminarTarea(id) {
  tareas = tareas.filter((t) => t.id !== id);
  renderTareas();
}

// Event listener para el botón de agregar tarea
document.getElementById("agregarTarea").addEventListener("click", agregarTarea);

// Inicializar la lista de tareas al cargar la página
renderTareas();
