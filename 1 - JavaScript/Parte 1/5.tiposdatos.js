"use strict";

console.log(Number.isInteger(6)); // true
console.log(Number.isInteger(6.56)); // false

const n = 34.4567654;
console.log(n.toFixed(2));

console.log(Number.MAX_VALUE * 2); // Infinity
console.log(Number("Hola")); // NaN

const frase = "Hola, mi casa es grande";
console.log(frase.indexOf("a")); // 3
console.log(frase.indexOf("a", 4)); // 10
console.log(frase.indexOf("a", 11)); // 12
console.log(frase.indexOf("a", 13)); // 19
console.log(frase.indexOf("a", 20)); // -1 (no encontrado)

console.log(frase.match(/[aeiou]/gi).length); // 8 vocales 

const dni = "54385484G";
console.log(dni.substring(0, dni.length - 1)); // 54385484
console.log(dni.slice(0, -1)); // 54385484

function saluda(nombre) {
    if(!nombre) {
        console.error("El nombre no es válido");
    } else {
        console.log(`Hola ${nombre}`);
    }
}

saluda("Pepito");
saluda("");
saluda();

let v = 23;
console.log(!!v); // true
v = 0;
console.log(!!v); // false
