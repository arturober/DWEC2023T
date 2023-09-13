function suma(n1, n2) {
    if(typeof n1 !== "number" || typeof n2 !== "number") {
        console.error("Los valores no son numéricos");
    } else {
        console.log(`Resultado ${n1} + ${n2} = ${n1+n2}`);
    }
}

suma(3, 6);
suma("Hola", 9);
suma(true, 34);
