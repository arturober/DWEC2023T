"use strict";

const lista = document.getElementById("lista");
Array.from(lista.children).forEach((n) => console.log(n.textContent));

let li = lista.firstElementChild;

while (li) {
  console.log(li.innerText);
  li = li.nextElementSibling;
}

document
  .querySelectorAll("#lista li:nth-child(2n)")
  .forEach((li) => (li.style.color = "red"));
