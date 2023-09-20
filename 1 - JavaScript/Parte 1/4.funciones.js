"use strict";

function saluda(name = "Nadie") {
    console.log("Hola! soy " + name);
}

saluda(); // Hola! soy Nadie
saluda("Pepe", "Juan");  // Hola! soy Pepe (Juan se ignora)

// Prueba a cambiar let por var (sale mal)
for(let i = 1; i <= 10; i++) {
    const p = document.createElement("p");
    p.append(`Párrafo ${i}`);
    p.addEventListener('click', e => {
        console.log(`Párrafo ${i}`);
    });
    document.body.append(p); 
}
