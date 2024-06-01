import { BASE_URL } from "./api";

export async function getBrand(brandId) {
  const endpoint = `${BASE_URL}/brands/${brandId}`;
  const response = await fetch(endpoint);
  const data = await response.json();

  console.log(data);
}

export async function getBrands() {
  const endpoint = `${BASE_URL}/brands`;
  const response = await fetch(endpoint);
  const data = await response.json();

  console.log(data);
}
