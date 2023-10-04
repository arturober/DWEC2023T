"use strict";

const img = document.getElementById("img");

img.addEventListener("mouseenter", () => {
    img.src = "img/img2.webp";
});

img.addEventListener("mouseleave", () => {
    img.src = "img/img1.webp";
});

function selectTd(e) {
    e.target.classList.toggle("green"); // También this.classList...
    console.log(e.type); // "click"
}

const tds = document.querySelectorAll("#tabla td");
tds.forEach(td => td.addEventListener("click", selectTd));



