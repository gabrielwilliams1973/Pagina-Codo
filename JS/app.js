var valorTicket = 200;

const cantidadDeEntradas = document.getElementById("inputCantidad");
const categoria = document.getElementById("inputCategoria");
const calcular = document.getElementById("btnResumen");
const totalaPagar = document.getElementById("inputTotalaPagar");

function validarCantidad() {
  const cantidad = cantidadDeEntradas.value.trim();

  if (!cantidad.match(/^\d+$/)) {
    //alert("Ingrese un número entero en la casilla de cantidad de entradas.");
    cantidadDeEntradas.value = "";
  }
}

cantidadDeEntradas.addEventListener("input", validarCantidad);

function calcularTotal() {
  let total = 0;
  const cantidad = parseInt(cantidadDeEntradas.value);

  if (isNaN(cantidad) || cantidad % 1 !== 0) {
    //alert("Ingrese un número entero en la casilla de cantidad de entradas.");
    return;
  }

  if (categoria.value === "estudiante") {
    total = cantidadDeEntradas.value * valorTicket * 0.2;
  } else if (categoria.value === "trainee") {
    total = cantidadDeEntradas.value * valorTicket * 0.5;
  } else if (categoria.value === "junior") {
    total = cantidadDeEntradas.value * valorTicket * 0.85;
  }

  totalaPagar.innerHTML = "$" + " " + total;
}

function limpiarFormulario() {
  document.getElementById("compraEntradas").reset();
  totalaPagar.innerHTML = "Total a Pagar $";
}
