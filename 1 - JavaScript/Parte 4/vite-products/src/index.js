import { ProductosService } from "./productos-service.js";
import dayjs from "dayjs";

const productosService = new ProductosService();

async function getProducts() {
  const productos = await productosService.getProductos();
  productos.forEach((p) => showProduct(p));
}

getProducts();

const form = document.querySelector("#formProduct");
const imgPreview = document.querySelector("#imgPreview");
const tbody = document.querySelector("#tabla tbody");
const priceFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
});
// const dateFormatter = new Intl.DateTimeFormat("es-ES", {
//   day: "2-digit",
//   month: "2-digit",
//   year: "numeric",
// });

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
  tdAvail.append(dayjs(product.available).format("DD/MM/YYYY"));

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
  try {
    await productosService.delete(this.dataset.id);
    this.closest("tr").remove();
  } catch (e) {
    console.error(e);
  }
}

form.fileName.addEventListener("change", () => {
  const file = form.fileName.files[0];
  if (!file) return;

  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.addEventListener("load", () => {
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

  const productInsert = await productosService.add(product);

  showProduct(productInsert);
  form.reset();
  imgPreview.src = "";
});
