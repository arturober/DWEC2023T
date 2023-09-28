"use strict";

const tds = document.querySelectorAll("#tabla td");
console.log(tds);
tds.forEach(td => td.addEventListener("click", e => {
    td.classList.toggle("green");
}));