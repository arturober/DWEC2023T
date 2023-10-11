"use strict";

class Persona {
    #nombre;
    #edad;

    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        if(!nombre || typeof nombre != "string") throw Error("El nombre no puede estar vacío");
        this.#nombre = nombre;
    }

    saluda() {
        return `Hola. Soy ${this.#nombre}`;
    }
}

const p = new Persona("Pepe", 23);
console.log(p);
console.log(p.saluda());
p.nombre = "Juan";
console.log(p.nombre);
//p.nombre = null; // ERROR 

// console.log(p.#nombre); // Error