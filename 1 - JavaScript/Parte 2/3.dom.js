"use strict";

const tabla = document.getElementById("tabla");
const celdas = tabla.getElementsByTagName("td");
Array.from(celdas).forEach((td, i) => td.innerText = i + 1);