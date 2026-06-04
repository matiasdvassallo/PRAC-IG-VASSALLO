let titulo = document.querySelector("h1");
let fondo = document.querySelector("body");


let respuesta = confirm("Bienvenida, ¿desea recibir un mensaje personalizado?");

if (respuesta) {
    let nombre = prompt("Ingrese su nombre po weona:");
    let titulo = document.querySelector("h1");
    titulo.textContent = "BIENVENIDA " + nombre;
}

else {
    titulo.textContent = "BIENVENIDA DESCONOCIDA";
}

let dark = confirm("Quere ser emo po?");

if (dark) {
    fondo.style.backgroundColor = "rgb(41, 30, 2)";
    titulo.style.color = "rgb(101, 80, 46)";
}

