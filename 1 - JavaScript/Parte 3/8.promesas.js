function getPromise() {
  return new Promise((resolve, reject) => {
    console.log("Promesa llamada...");
    setTimeout(function () {
      console.log("Resolviendo la promesa...");
      resolve(); // Promesa resuelta!.
    }, 3000); // Esperamos 3 segundos y acabamos la promesa
  });
}


// Imprimirá el mensaje pasados 3 segundos (la promesa termina)
getPromise().then(() => console.log("La promesa ha acabado!"));

console.log(
  "El programa continúa. No espera que termine la promesa (operación asíncrona)"
);
