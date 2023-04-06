import { INSTANCE } from "../../config/axiosInstance";
const API_URL = "/products/";
// /products/view-products
// create product
const createProduct = async (data) => {
  const response = await INSTANCE.post(`${API_URL}create-product`, data);
  return response.data;
};
//  view product
const viewProduct = async (data) => {
  const response = await INSTANCE.get(`${API_URL}view-products`);
  return response.data;
};
const productService = {
  createProduct,
  viewProduct,
};

export default productService;
