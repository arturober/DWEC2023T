"use strict";

const producto = {
    id: 35,
    nombre: "Mesa",
    precio: 99.95,
    stock: 23
};

const {nombre, precio} = producto;
console.log(`${nombre} - ${precio}€`);

const {nombre: nombreProd, precio: precioProd} = producto;
console.log(`${nombreProd} - ${precioProd}€`);

function valorTotal({precio, stock}) {
    return precio * stock;
}

console.log(`${nombre}. Valor total ${valorTotal(producto)}€`);

const o1 = {a: 1};
const o2 = {b: 2};
const o3 = {...o1, ...o2, c: 3};
console.log(o3);