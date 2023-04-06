import { INSTANCE } from "../../config/axiosInstance";
const API_URL = "/profile/";

const editProfile = async (userData) => {
  const response = await INSTANCE.post(`${API_URL}login`, userData);
  return response.data;
};
const getProfile = async () => {
  const response = await INSTANCE.post(`${API_URL}edit`, {});
  return response.data;
};

const profileService = {
  editProfile,
  getProfile,
};

export default profileService;
