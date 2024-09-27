import axios from "axios";
const API_URL = "http://localhost:8080";

const register = async (user) => {
  const res = await axios.post(`${API_URL}/users/`, user);
  return res.data;
};

const login = async ({ email, password }) => {
  const res = await axios.post(`${API_URL}/users/login`, { email, password });

  const { user, token } = res.data;

  localStorage.setItem("token", token);
  localStorage.setItem("userId", user._id);
  localStorage.setItem("user", JSON.stringify(user));

  return { user, token };
};

const getLoggedUser = async () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  if (!userId || !token) {
    throw new Error("User ID or token is missing");
  }

  const response = await axios.get(`${API_URL}/users/id/${userId}`, {
    headers: {
      Authorization: token,
    },
  });

  return response.data;
};

const logout = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.delete(`${API_URL}/users/logout`, {
    headers: {
      Authorization: token,
    },
  });
  if (res.data) {
    localStorage.clear();
  }
  return res.data;
};

const uploadProfileImage = async (file) => {
  const token = localStorage.getItem("token");

  if (!file) {
    throw new Error("No file provided");
  }

  const formData = new FormData();
  formData.append("profileImage", file); 

  const res = await axios.put(`${API_URL}/users/uploadProfileImage`, formData, {
    headers: {
      Authorization: token, 
      "Content-Type": "multipart/form-data", 
    },
  });

  return res.data;
};

const authService = {
  register,
  login,
  getLoggedUser,
  logout,
  uploadProfileImage
};

export default authService;
