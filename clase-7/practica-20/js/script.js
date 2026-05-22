let titulo = document.querySelector("h1");

titulo.addEventListener("click", function() {

	titulo.style.color = "cyan";

});

let img = document.querySelector("img");

img.addEventListener("mouseover", function() {

	img.style.border = "5px solid cyan";

});

img.addEventListener("mouseout", function() {

	img.style.border = "3px solid white";

});

let body = document.querySelector("body");

body.addEventListener("click", function() {

	body.style.backgroundColor = "white";

});