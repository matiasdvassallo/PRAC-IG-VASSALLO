let precio = 360;
let descuento = 36;
let descuentoAplicado = (precio * descuento) / 100;
let precioFinal = precio - descuentoAplicado;

console.log("precio sin descuento es $", precio);
console.log("el descuento es", descuento, "%");
console.log("precio con descuento es $", precioFinal);