"use strict";

let array = [150, 400, 780, 1500, 200];
let [v1, v2, v3] = array; // Asigna los tres primeros elementos del array
console.log(v3); // Imprime 780

let rectangulo = [6, 10]; // [ancho, alto]

function calculaArea([ancho, alto]) {
    console.log(`Área: ${ancho * alto}`);
}

calculaArea(rectangulo);
