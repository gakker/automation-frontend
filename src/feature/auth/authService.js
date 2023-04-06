import { INSTANCE } from "../../config/axiosInstance";
const API_URL = "/authentication/";
const register = async (userData) => {
  const response = await INSTANCE.post(`${API_URL}register`, userData);
  // if (response.data) {
  //   localStorage.setItem("user", JSON.stringify(response.data));
  // }
  return response.data;
};
const login = async (userData) => {
  const response = await INSTANCE.post(`${API_URL}login`, userData);
  return response.data;
};
const googleLogin = async (userData) => {
  const response = await INSTANCE.post(`${API_URL}login-google`, userData);
  return response.data;
};
const facebookLogin = async (userData) => {
  const response = await INSTANCE.post(`${API_URL}login-facebook`, userData);
  return response.data;
};
const logout = () => {
  // localStorage.removeItem("user");
  // var mode = localStorage.getItem("mode");
  localStorage.clear();
  // localStorage.setItem("mode", mode);
};

const authService = {
  facebookLogin,
  googleLogin,
  register,
  logout,
  login,
};

export default authService;
