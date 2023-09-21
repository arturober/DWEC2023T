"use strict";

function getMedia(...notas) {
    console.log(notas.toString()); // Imprime [5, 7, 8.5, 6.75, 9] (está en un array)
    let total = notas.reduce((total,notas) => total + notas, 0);
    return notas.length ? total / notas.length : 0;
}

console.log(getMedia(5, 7, 8.5, 6.75, 9)); // Imprime 7.25
console.log(getMedia(5, 7)); // Imprime 6
console.log(getMedia()); // Imprime NaN

function imprimirUsuario(nombre, ...lenguajes) {
    console.log(nombre + " sabe " + lenguajes.length + " lenguajes: " + lenguajes.join(" - "));
}

// Imprime "Pedro sabe 3 lenguajes: Java - C# - Python"
imprimirUsuario("Pedro", "Java", "C#", "Python");
// Imprime "María sabe 5 lenguajes: JavaScript - Angular - PHP - HTML - CSS"
imprimirUsuario("María", "JavaScript", "Angular", "PHP", "HTML", "CSS");
// Juan sabe 0 lenguajes:
imprimirUsuario("Juan");
