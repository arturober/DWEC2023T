"use strict";

let date = new Date("2022-04-25");

console.log(new Intl.DateTimeFormat("es-ES").format(date)); // 25/4/2022 (por defecto)

console.log(
  new Intl.DateTimeFormat("es-ES", {
    dateStyle: "short",
  }).format(date)
); // 25/4/22

console.log(
  new Intl.DateTimeFormat("es-ES", {
    dateStyle: "full",
  }).format(date)
); // lunes, 25 de abril de 2022

console.log(
  new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date)
); // 25/04/2022

console.log(
  new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h12",
    dayPeriod: "long",
  }).format(date)
); // 25 de abril de 2022 2:00 de la madrugada
