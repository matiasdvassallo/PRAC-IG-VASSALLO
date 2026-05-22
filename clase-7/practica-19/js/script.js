alert("CLICKEA TODO!")

let titulo = document.querySelector("h1");
let sub = document.querySelector("h3");
let li = document.querySelectorAll("li span");
let img = document.querySelector("img")

titulo.addEventListener("click", function() {
	titulo.style.color = "red";
});

sub.addEventListener("click", function() {
	sub.style.color = "red";
});

//-----------------------------UTILICÉ IA PARA ESTA PARTE
li.forEach(function(item) {
	item.addEventListener("click", function() {
		item.style.backgroundColor = "red";
	});
});
//-------------------------------------------------------

img.addEventListener("click", function() {
	img.style.display = "none";
});