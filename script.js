// Declarar variables y constantes
const precioOriginal = 100;
let descuento = 0;
let total = 0;

// Función para calcular el total después de aplicar el descuento
function calcularTotal() {
  total = precioOriginal - (precioOriginal * descuento / 100);
  console.log(`El total después de aplicar el descuento es: $${total}`);
}

// Función para pedir el descuento al usuario
function pedirDescuento() {
  descuento = prompt("Ingrese el porcentaje de descuento:");
  descuento = parseInt(descuento);
  if (isNaN(descuento)) {
    alert("Por favor, ingrese un número válido.");
    pedirDescuento();
  } else if (descuento < 0 || descuento > 100) {
    alert("Por favor, ingrese un porcentaje entre 0 y 100.");
    pedirDescuento();
  } else {
    calcularTotal();
  }
}

// Llamar a la función para pedir el descuento
pedirDescuento();


