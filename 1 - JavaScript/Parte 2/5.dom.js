"use strict";

const list = document.getElementById("list");
const descInput = document.getElementById("description");
const posInput = document.getElementById("position");
const lastBtn = document.getElementById("addLast");
const firstBtn = document.getElementById("addFirst");
const afterBtn = document.getElementById("addAfter");
const clearBtn = document.getElementById("clear");

firstBtn.addEventListener("click", e => {
    const li = document.createElement("li");
    li.append(descInput.value);
    list.prepend(li);
});

lastBtn.addEventListener("click", e => {
    const li = document.createElement("li");
    li.append(descInput.value);
    list.append(li);
});

afterBtn.addEventListener("click", e => {
    const li = document.createElement("li");
    li.append(descInput.value);
    list.children[posInput.value]?.after(li);
});

clearBtn.addEventListener("click", e => {
    list.replaceChildren();
});
