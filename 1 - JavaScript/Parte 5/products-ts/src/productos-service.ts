import { Http } from "./http.js";
import { SERVER } from "./constants.js";
import { Product } from "./interfaces/product.js";
import { ProductsResponse, SingleProductResponse } from "./interfaces/responses.js";

export class ProductosService {
    #http = new Http();

    async getProductos(): Promise<Product[]> {
        const resp = await this.#http.get<ProductsResponse>(`${SERVER}/products`);
        return resp.products;
    }

    async add(producto: Product): Promise<Product> {
        const resp = await this.#http.post<SingleProductResponse, Product>(`${SERVER}/products`, producto);
        return resp.product;
    }

    async delete(id: number): Promise<void> {
        await this.#http.delete<void>(`${SERVER}/products/${id}`);
    }
}