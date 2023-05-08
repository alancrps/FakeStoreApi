import axios from "axios";
import { Product } from "../interfaces/product.interface";

export async function getProducts() {
	const response = await axios.get("https://fakestoreapi.com/products");
	const products: Product[] = response.data;
	return products;
}

export async function getProductById(id: number) {
	const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
	const product: Product = response.data;
	return product;
}
