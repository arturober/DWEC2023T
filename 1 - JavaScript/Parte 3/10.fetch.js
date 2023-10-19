fetch("https://api.fullstackpro.es/products-example/products")
.then(resp => resp.json())
.then(json => console.log(json));