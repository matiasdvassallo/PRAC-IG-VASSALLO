/*
let precio = document.querySelector("#precio");
let descuento = document.querySelector("#descuento");
let calcular = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

function dividir(precio, descuento) {
    return precio / descuento * 100;
}

let retorno = dividir(precio, descuento);

if (retorno) {
    resultado.innerText = retorno;
}* 
-MI INTENTO- */

// SUGERIDO POR LA IA
let resultado = document.querySelector("#resultado");
let boton = document.querySelector("#final");

boton.addEventListener("click", function(event) {

    let precio = Number(document.querySelector("#precio").value);
    let descuento = Number(document.querySelector("#descuento").value);

    let descuentoAplicado = (precio * descuento) / 100;
    let precioFinal = precio - descuentoAplicado;

    resultado.value = precioFinal;

});

