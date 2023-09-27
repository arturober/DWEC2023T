"use strict";

let person1 = { name: "Peter", age: 21 };
let person2 = { name: "Mary", age: 34 };
let person3 = { name: "Louise", age: 17 };

let hobbies = new Map(); // Almacenará una persona con un array de hobbies (string)
hobbies.set(person1, ["Tennis", "Computers", "Movies"]);
hobbies.set(person2, ["Music", "Walking"]);
hobbies.set(person3, ["Boxing", "Eating", "Sleeping"]);
hobbies.set({ name: "Pepito", age: 48 }, ["Pasear", "Comer", "Viajar"]);
console.log(hobbies);

console.log(hobbies.get(person2));

// Imprimir los hobbies de Pepito
let person4 = Array.from(hobbies.keys()).find((p) => p.name === "Pepito");
console.log(hobbies.get(person4));

// Otra solución
let [, h] = Array.from(hobbies.entries()).find(([p, h]) => p.name === "Pepito");
console.log(h);

console.log("------------ For of ------------");
for(let entry of hobbies) {
    console.log(entry[0].name + ": " + entry[1].join(", "));
}

console.log("---------- For of (destructuring) --------");
for(let [p, h] of hobbies) {
    console.log(p.name + ": " + h.join(", "));
}

console.log("-------- forEach -----------");
hobbies.forEach((hobArray, person) => { // Mejor
    console.log(person.name + ": " + hobArray.join(", "));
});
