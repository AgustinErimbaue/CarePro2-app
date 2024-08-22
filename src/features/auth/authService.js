import axios from "axios";
const API_URL = "http://localhost:8080";

const register = async (userData) => {
  const res = await axios.post(`${API_URL}/users/`, userData);
  return res.data;
};

const login = async (user) => {
  const res = await axios.post(`${API_URL}/users/login`);
  return res.data;
};

const authService = {
  register,
  login,
};

export default authService;
