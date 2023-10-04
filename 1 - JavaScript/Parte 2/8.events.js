"use strict";

const div1 = document.getElementById("div1");
const input1 = document.getElementById("input1");
const span = input1.nextElementSibling;

div1.addEventListener("mousemove", e => {
    div1.innerText = `${e.clientX - div1.offsetLeft}, ${e.clientY - div1.offsetTop}`;
});

div1.addEventListener("click", e => {
    if(e.ctrlKey) { // Ctrl + click
        div1.classList.toggle("selected");
    }    
    console.log(`${e.type} con el botón ${e.button}`);
});

input1.addEventListener("input", e => {
    input1.value = input1.value.toLocaleUpperCase();
});

input1.addEventListener("select", e => {
    span.innerText = input1.value.slice(input1.selectionStart, input1.selectionEnd);
});