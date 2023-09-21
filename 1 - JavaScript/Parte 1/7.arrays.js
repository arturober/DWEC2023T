"use strict";

let a = [3, 21, 15, 61, 9, 54];
console.log(a.every((num) => num < 100)); // Imprime true
console.log(a.every((num) => num % 2 == 0)); // Imprime false

console.log(a.some((num) => num % 2 == 0)); // Imprime true

let a2 = [4, 21, 33, 12, 9, 54];
console.log(a2.map((num) => num * 2)); // Imprime [8, 42, 66, 24, 18, 108]

let a3 = [4, 21, 33, 12, 9, 54];
console.log(a3.filter((num) => num % 2 == 0)); // Imprime [4, 12, 54]

let a4 = [4, 21, 33, 12, 9, 54];
console.log(a4.reduce((total, num) => total + num, 0)); // Suma todos los elementos del array. Imprime 133
console.log(a4.reduce((max, num) => Math.max(max, num), 0)); // Número máximo del array. Imprime 54

console.log(a4.reduceRight((total, num) => total - num)); // Imprime -25 (Toma la última posición como valor inicial al no proporcionarlo)

let numbers = [2, 4, 6, 9, 14, 16];
console.log(numbers.find(num => num >= 10)); // Imprime 14 (primer valor encontrado >= 10)
console.log(numbers.findIndex(num => num >= 10)); // Imprime 4 (numbers[4] -> 14)
console.log(numbers.findLast(num => num >= 10)); // Imprime 16 (último valor encontrado >= 10)
console.log(numbers.findLastIndex(num => num >= 10)); // Imprime 5 (numbers[5] -> 16)

let words = ["house", "tree", "dog"];
console.log(words.map(w => Array.from(w))); // [["h", "o", "u", "s", "e"], ["t", "r", "e", "e"], ["d", "o", "g"]]
console.log(words.flatMap(w => Array.from(w))); // ["h", "o", "u", "s", "e", "t", "r", "e", "e", "d", "o", "g"]
