let aula001 = document.querySelector("#aula001")
let aula101 = document.querySelector("#aula101")
let aula201 = document.querySelector("#aula201")
let aula301 = document.querySelector("#aula301")
let aula501 = document.querySelector("#aula501")
let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")
let aulaMayor = 0
let aulaMenor = 0
let resultadoMayor = 0
let resultadoMenor = 0
let boton = document.querySelector("#boton")
let faltan001 = 0
let faltan101 = 0
let faltan201 = 0
let faltan301 = 0
let faltan501 = 0

boton.addEventListener("click", function(event) {

    let valor001 = Number(aula001.value);
    let valor101 = Number(aula101.value);
    let valor201 = Number(aula201.value);
    let valor301 = Number(aula301.value);
    let valor501 = Number(aula501.value);

    resultadoMayor = Math.max(
    valor001,
    valor101,
    valor201,
    valor301,
    valor501)

    resultadoMenor = Math.min(
    valor001,
    valor101,
    valor201,
    valor301,
    valor501)

    if (resultadoMayor == valor001) {
        aulaMayor = "Aula 001"
    } else if (resultadoMayor == valor101) {
        aulaMayor = "Aula 101"
    } else if (resultadoMayor == valor201) {
        aulaMayor = "Aula 201"
    } else if (resultadoMayor == valor301) {
        aulaMayor = "Aula 301"
    } else if (resultadoMayor == valor501) {
        aulaMayor = "Aula 501"
    }

    if (resultadoMenor == valor001) {
        aulaMenor = "Aula 001"
    } else if (resultadoMenor == valor101) {
        aulaMenor = "Aula 101"
    } else if (resultadoMenor == valor201) {
        aulaMenor = "Aula 201"
    } else if (resultadoMenor == valor301) {
        aulaMenor = "Aula 301"
    } else if (resultadoMenor == valor501) {
        aulaMenor = "Aula 501"
    }

    if (valor001 >= 80) {
    faltan001 = 0;
} else {
    faltan001 = 80 - valor001;
}
    if (valor101 >= 80) {
    faltan101 = 0;
} else {
    faltan101 = 80 - valor101;
}
    if (valor201 >= 80) {
    faltan201 = 0;
} else {
    faltan201 = 80 - valor201;
}
    if (valor301 >= 80) {
    faltan301 = 0;
} else {
    faltan301 = 80 - valor301;
}
    if (valor501 >= 80) {
    faltan501 = 0;
} else {
    faltan501 = 80 - valor501;
}

let total = faltan001 + faltan101 + faltan201 + faltan301 + faltan501;

    p1.innerHTML = "El aula con mayor cantidad de pupitres es: " + aulaMayor + " con " + resultadoMayor + " pupitres";

    p2.innerHTML = "El aula con menor cantidad de pupitres es: " + aulaMenor + " con " + resultadoMenor + " pupitres";

    p3.innerHTML = "El total de pupitres faltantes para completar 80 en cada aula es: " + total;
});
