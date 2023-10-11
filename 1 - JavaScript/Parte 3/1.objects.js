"use strict";

console.log(3.436543643.toFixed(2)); // 3.44
console.log(true.valueOf()); // true

const p = new Object();
p.nombre = "Pepito";
p.edad = 34;
p.saluda = function() {
    return `Hola. Soy ${this.nombre}`
}

console.log(p);
console.log(p.saluda());

console.log(typeof p); // object


