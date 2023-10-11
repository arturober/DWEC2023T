"use strict";

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saluda() {
        return `Hola. Soy ${this.nombre}`;
    }
}

const p = new Persona("Pepe", 23);
console.log(p);
console.log(p.saluda());