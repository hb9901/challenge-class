import axios, { AxiosInstance } from "axios";
import AuthAPI from "./auth.api";
import BrandsAPI from "./brands.api";
import CartAPI from "./cart.api";
import ProductsAPI from "./products.api";

const BASE_URL = "https://api.ballang.yoojinyoung.com";

class API {
  private axios: AxiosInstance;
  auth;
  brands;
  cart;
  products;

  constructor() {
    this.#axios = axios.create({ baseURL: BASE_URL, withCredentials: true }); // witCredentials: 쿠키 때문에
    this.auth = new AuthAPI(this.#axios);
    this.brands = new BrandsAPI();
    this.cart = new CartAPI(this.#axios);
    this.products = new ProductsAPI(this.#axios);
  }

  setAccessToken(accessToken) {
    this.#axios.defaults.headers.common.authorization = this.setAccessToken
      ? `Bearer ${accessToken}`
      : "";
  }
}

const api = new API();

export default api;
