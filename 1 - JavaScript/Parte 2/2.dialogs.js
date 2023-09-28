"use strict";

document.getElementById("alert").addEventListener("click", e => {
    alert("Hola mundo!");
});

document.getElementById("confirm").addEventListener("click", e => {
    const resp = confirm("¿Te gusta JavaScript?");
    document.getElementById("respConfirm").innerText = resp ? "👍" : "🖕";
});

document.getElementById("prompt").addEventListener("click", e => {
    const resp = prompt("¿Cómo te llamas?");
    document.getElementById("respPrompt").innerText = resp ? resp : "🖕";
});