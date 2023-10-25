async function getProducts() {
  const resp = await fetch(
    "https://api.fullstackpro.es/products-example/products"
  );
  const json = await resp.json();
  json.products.forEach((p) => showProduct(p));
}

getProducts();

const form = document.querySelector("#formProduct");
const imgPreview = document.querySelector("#imgPreview");
const tbody = document.querySelector("#tabla tbody");
const priceFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
});
const dateFormatter = new Intl.DateTimeFormat("es-ES", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

function showProduct(product) {
  const tr = document.createElement("tr");

  const tdImage = document.createElement("td");
  const img = document.createElement("img");
  img.src = product.imageUrl;
  tdImage.append(img);

  const tdDesc = document.createElement("td");
  tdDesc.append(product.description);

  const tdPrice = document.createElement("td");
  tdPrice.append(priceFormatter.format(product.price));

  const tdAvail = document.createElement("td");
  tdAvail.append(dateFormatter.format(new Date(product.available)));

  const tdDelete = document.createElement("td");
  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn", "btn-danger");
  btnDelete.append("X");
  btnDelete.dataset.id = product.id;
  tdDelete.append(btnDelete);

  btnDelete.addEventListener("click", deleteProduct);

  tr.append(tdImage, tdDesc, tdPrice, tdAvail, tdDelete);
  tbody.append(tr);
}

async function deleteProduct() {
  const resp = await fetch(
    `https://api.fullstackpro.es/products-example/products/${this.dataset.id}`,
    {
      method: "DELETE",
    }
  );

  if (resp.ok) this.closest("tr").remove();
}

form.fileName.addEventListener("change", (e) => {
  const file = form.fileName.files[0];
  if (!file) return;

  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.addEventListener("load", (e) => {
    imgPreview.src = fileReader.result;
  });
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const product = {
    description: form.description.value,
    price: +form.price.value,
    imageUrl: imgPreview.src,
  };

  const resp = await fetch(
    "https://api.fullstackpro.es/products-example/products",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }
  );
  const json = await resp.json();

  showProduct(json.product);
  form.reset();
  imgPreview.src = "";
});
