"use strict";

const input = document.getElementById("nombre");
const crearBtn = document.getElementById("crearTime");
const cancelarBtn = document.getElementById("cancelarTime");
let timeout;

crearBtn.addEventListener("click", e => {
    crearBtn.disabled = true;
    timeout = setTimeout(() => {
        alert(`Hola ${input.value}`);
        crearBtn.disabled = false;
    }, 5000);
});

cancelarBtn.addEventListener("click", e => {
    clearTimeout(timeout);
    crearBtn.disabled = false;
});

let num = 1;
let idInterval = setInterval(() => {
    console.log(num++);
    if(num > 10) { // Cuando imprimimos 10, paramos el timer para que no se repita más
        clearInterval(idInterval);
    }
}, 1000);