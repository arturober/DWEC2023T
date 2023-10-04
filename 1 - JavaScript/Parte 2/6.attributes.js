"use strict";

const tds = document.querySelectorAll("#tabla td");
console.log(tds);
tds.forEach(td => td.addEventListener("click", e => {
    td.classList.toggle("green");
}));

const img = document.getElementById("img");
img.src = "img/img1.webp";
console.log(img.attributes);
// Formas equivalentes de acceder a un atributo
console.log(img.attributes.id.nodeValue);
console.log(img.id);
console.log(img.getAttribute("id"));

img.style.maxHeight = "100px";

