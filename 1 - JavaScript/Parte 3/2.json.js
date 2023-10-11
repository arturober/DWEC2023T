"use strict";

const p = {
  nombre: "Pepito",
  edad: 35,
  saluda() {
    return `Hola. Soy ${this.nombre}`;
  },
};

console.log(p);
console.log(p.saluda());

console.log(typeof p); // object

const persona = {
  nombre: "Peter",
  edad: 41,
  telefonos: [954343543, 654685438],
  trabajos: [
    // trabajos es un array de objetos JSON
    {
      descripcion: "Malabarista",
      duración: "2003-2005",
    },
    {
      descripcion: "Conductor de autobús",
      duración: "2005-2015",
    },
  ],
};
console.log(persona.trabajos[1].descripcion);
