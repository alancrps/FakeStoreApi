import { getProductById, getProducts } from "./Service/productService";

const listadoProductos = await getProducts();

console.log(listadoProductos);

const producto = await getProductById(1);

console.log(producto);
