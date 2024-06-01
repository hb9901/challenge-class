import { BASE_URL, client } from "./api";

export async function getProduct(productId) {
  const endpoint = `/products/${productId}`;
  const response = await client.get(endpoint);
  const data = response.data;

  console.log(data);
}

export async function getProducts() {
  const endpoint = `${BASE_URL}/products`;
  const response = await fetch(endpoint);
  const data = await response.json();

  console.log(data);
}
