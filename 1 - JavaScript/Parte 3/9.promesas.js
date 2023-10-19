function sumPromise(n1, n2) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(n1 + n2); // Promesa resuelta!.
    }, 3000);
  });
}

function cuadradoPromise(n) {
  if (n < 0) return Promise.reject("Numero negativo no se puede operar");

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(n ** 2), 2000);
  });
}

// Se pueden concatenar llamadas a promesas con then
function promesasThen() {
  sumPromise(3, -5)
    .then((result) => cuadradoPromise(result))
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

async function promesasAwait() {
  try {
    let result = await sumPromise(3, -5);
    result = await cuadradoPromise(result);
    console.log(result);
  } catch(e) {
    console.error(e);
  }
}

// promesasThen();
promesasAwait();
console.log("El programa sigue");
