let roll = document.querySelector("#rollButton");
let img = document.querySelector("#imgs")
let h1 = document.querySelector("h1")

roll.addEventListener("click",(event) => {
    let randomNumber = Math.floor(Math.random(event) * 6) + 1;

if (randomNumber === 1) {
    img.innerHTML = "<img src='img/1.jfif' alt='Dado 1'>";
    h1.innerHTML = "¡1!";
} else if (randomNumber === 2) {
    img.innerHTML = "<img src='img/2.jfif' alt='Dado 2'>";
    h1.innerHTML = "¡2!";
}
else if (randomNumber === 3) {
    img.innerHTML = "<img src='img/3.jfif' alt='Dado 3'>";
    h1.innerHTML = "¡3!";
}
else if (randomNumber === 4) {
    img.innerHTML = "<img src='img/4.jfif' alt='Dado 4'>";
    h1.innerHTML = "¡4!";
}
else if (randomNumber === 5) {
    img.innerHTML = "<img src='img/5.jfif' alt='Dado 5'>";
    h1.innerHTML = "¡5!";
}
else if (randomNumber === 6) {
    img.innerHTML = "<img src='img/6.jfif' alt='Dado 6'>";
    h1.innerHTML = "¡6!";
}
});