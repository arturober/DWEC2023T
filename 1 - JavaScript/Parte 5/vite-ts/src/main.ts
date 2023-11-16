let nombre: string;
nombre = "juan";

console.log(nombre);

const a: number[] = [];
a.push(23);

function suma(n1: number, n2: number): number {
    if (n1 > 0) return n1 + n2;
    return 0;
}

type operarFn = (n1: number, n2: number) => number;

function operar(n1: number, n2: number, f: operarFn): number {
    return f(n1, n2);
}

console.log(operar(4, 7, suma));
console.log(operar(4, 7, (n1, n2) => n1 - n2));

type Punto = [number, number];
const punto: Punto = [23, 12];

// interface Persona {
//     nombre: string;
//     edad: number;
// }

// Array de personas
// const personas: Persona[] = [
//     {
//         nombre: "Ana",
//         edad: 34,
//     },
//     {
//         nombre: "Juan",
//         edad: 35,
//     },
// ];
// console.log(personas);
// console.log(Math.max(...personas.map((p) => p.edad)));

// class Persona {
//     constructor(
//         public nombre: string,
//         public edad: number,
//         private rol: string
//     ) {
//     }
// }

// const p = new Persona("Juan", 42, "admin");
// console.log(p.#rol); // Property 'rol' is private and only accessible within class 'Persona'
// Object.entries(p).forEach(([k, v]) => console.log(`${k} => ${v}`)); // No marca error
/*
nombre => Juan
edad => 42
rol => admin -> Estamos accediendo a una propiedad "private". En JavaScript se elimina el modificador
*/

class Persona {
    constructor(public nombre: string, public edad: number) { }

    saluda(): void {
        console.log("Soy una persona");
    }
}

class Usuario extends Persona {
    constructor(nombre: string, edad: number, public email: string, public password: string) {
        super(nombre, edad);
    }

    saluda(): void {
        console.log("Soy un usuario");
    }
}

class Cliente extends Persona {
    constructor(nombre: string, edad: number, public vip: boolean) {
        super(nombre, edad);
    }

    saluda(): void {
        console.log("Soy un cliente");
    }
}

const p: Persona = new Usuario("Juan", 35, "juan@email.com", "1234");
const p2: Persona = new Cliente("Pepe", 64, true);

p2.saluda();
const personas: Persona[] = [p, p2];
personas.forEach(p => {
    if(p instanceof Usuario) {
        console.log(p.email);
    } else  {
        console.log((p as Cliente).vip);
    }
});

const palabras = ["perro", "casa", "árbol", "mesa", "coche"];
const palabra = palabras.find((p) => p.startsWith("z")); // Devuelve string | undefined

// console.log(palabra.toLocaleUpperCase()); // ERROR: 'palabra' is possibly 'undefined'
console.log(palabra?.toLocaleUpperCase()); // Si palabra es undefined, devuelve undefined sin acceder al método