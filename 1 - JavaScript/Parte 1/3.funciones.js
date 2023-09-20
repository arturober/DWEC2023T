"use strict";

function suma(n1, n2) {
    return n1 + n2;
}
const resta = function(n1, n2) {
    return n1 - n2;
};

function operar(n1, n2, f) {
    return f(n1, n2);
}

console.log(operar(5, 2, suma));
console.log(operar(5, 2, resta));
console.log(operar(5, 2, function(n1, n2) {
    return n1 * n2;
}));
console.log(operar(5, 2, (n1, n2) => n1 / n2));
