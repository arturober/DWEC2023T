class Empleado {
  static #sueldoMinimo = 15000;

  constructor(nombre, sueldo) {
    this.nombre = nombre;
    this.sueldo = sueldo;
  }

  static creaBecario(nombre) {
    return new Empleado(nombre, Empleado.#sueldoMinimo);
  }

  toString() {
    return `${this.nombre} (${this.sueldo.toFixed(2)}€)`;
  }

  valueOf() {
    return this.nombre;
  }
}

let e = Empleado.creaBecario("Elena");
console.log(e); // Empleado {nombre: 'Elena', sueldo: '15000'}
console.log("Empleado: " + e);

const empleados = [
  e,
  new Empleado("Juan", 25000),
  new Empleado("Zacarías", 43000),
  new Empleado("Ana", 53000),
  new Empleado("Tomás", 39000),
];
console.log(empleados[0] > empleados[2]); // true (valueOf)

console.log(empleados.toSorted()); // Por defecto ordena por string -> toString()
console.log(empleados.toSorted((e1, e2) => e1.nombre.localeCompare(e2.nombre))); // Ordena por nombre
console.log(empleados.toSorted((e1, e2) => e1.sueldo - e2.sueldo)); // Ordena por nombre
