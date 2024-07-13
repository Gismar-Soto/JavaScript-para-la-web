//variables timadas
const precio = 400000;
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");

let cantidad = 0;
precioSpan.innerHTML = precio.toLocaleString('es-ES');

// total a pagar
const actualizarTotal = () => {
    const total = cantidad * precio;
    valorTotalSpan.innerHTML = total.toLocaleString('es-ES');
}

// incrementar -cantidad
const incrementar = () => {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
}

// disminuir -cantidad
const disminuir = () => {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        actualizarTotal();
    }
}
