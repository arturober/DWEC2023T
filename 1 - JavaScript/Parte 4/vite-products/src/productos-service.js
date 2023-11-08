import { Http } from "./http.js";
import { SERVER } from "./constants.js";

export class ProductosService {
  #http = new Http();

  async getProductos() {
    const resp = await this.#http.get(`${SERVER}/products`);
    return resp.products;
  }

  async add(producto) {
    const resp = await this.#http.post(`${SERVER}/products`, producto);
    return resp.product;
  }

  async update(producto) {
    const resp = await this.#http.put(`${SERVER}/products/${producto.id}`, producto);
    return resp.product;
  }

  async delete(id) {
    await this.#http.delete(`${SERVER}/products/${id}`);
  }
}