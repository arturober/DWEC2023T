"use strict";

let ar = new Array(4, 21, 33, 24, 8);

// for(let i in ar) {
//     console.log(`${i} - ${ar[i]}`);
// }

// for(let n of ar) { // equivale a foreach
//     console.log(n);
// }

ar.forEach((n, i) => console.log(`${i} - ${n}`));

console.log(ar.slice(2, -1)); // [33, 24]

let letras = ["a", "b", "c", "d", "e", "f"];

letras.splice(1, 1, "B");
console.log(letras.toString()); // a,B,c,d,e,f
letras.splice(2, 2);
console.log(letras.toString()); // a,B,e,f
letras.splice(2, 0, "Z", "Y");
console.log(letras.toString()); // a,B,Z,Y,e,f

// Nuevo en ES2023 (mejor!) -> No modifica array original
let letras2 = letras.toSpliced(0, 1, "H");
console.log(letras2.toString()); // H,B,Z,Y,e,f
console.log(letras.toString()); // a,B,Z,Y,e,f (original no modificado)

let a = [20, 6, 100, 51, 28, 9];
let ordenado = a.toSorted(); // Método nuevo ES2023 no modifica array
console.log(ordenado); // [100, 20, 28, 51, 6, 9]
let ordenadoBien = a.toSorted((n1, n2) => n1 - n2);

/**** Ejemplo con objetos, que veremos más adelante ****/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    // Person toString() method
    return this.name + " (" + this.age + ")";
  }
}

let persons = [
  new Person("Thomas", 24),
  new Person("Mary", 15),
  new Person("John", 51),
  new Person("Phillip", 9),
];

console.log(persons.toSorted((p1, p2) => p1.name.localeCompare(p2.name)));
console.log(persons.toSorted((p1, p2) => p1.age - p2.age));
