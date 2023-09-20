"use strict";
// m = 23; // ReferenceError: m is not defined (modo estricto)

let v1 = "Hola Mundo!";
console.log(typeof v1); // Imprime -> string

v1 = 123;
console.log(typeof v1); // Imprime -> number

v1 = true;
console.log(typeof v1); // Imprime -> boolean

let v2;
console.log(typeof v2); // Imprime -> undefined

function suma(n1, n2) {
    if(typeof n1 !== "number" || typeof n2 !== "number") {
        console.error("Los valores no son numéricos");
    } else {
        console.log(`Resultado ${n1} + ${n2} = ${n1+n2}`);
    }
}

suma(3, 6);
suma("Hola", 9);
suma(true, 34);

function cambiaArray(a) {
    a[0] = 99;
}

let a = [1,2,3,4];
cambiaArray(a);
console.log(a);


