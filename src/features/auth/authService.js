import axios from "axios";
const API_URL = "http://localhost:8080";

const register = async (user) => {
  try {
    const res = await axios.post(`${API_URL}/users/`, user);
    return res.data;
  } catch (error) {
    console.error("Register error:", error);
    throw error.response?.data || "Error en el registro";
  }
};

const login = async ({ email, password }) => {
  try {
    const res = await axios.post(`${API_URL}/users/login`, { email, password });
    const { user, token } = res.data;

    localStorage.setItem("token", token);
    localStorage.setItem("userId", user._id);
    localStorage.setItem("user", JSON.stringify(user));

    return { user, token };
  } catch (error) {
    console.error("Login error:", error);
    throw error.response?.data || "Error en el login";
  }
};

const getLoggedUser = async () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  if (!userId || !token) {
    throw new Error("User ID or token is missing");
  }

  try {
    const response = await axios.get(`${API_URL}/users/id/${userId}`, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Get logged user error:", error);
    throw error.response?.data || "Error obteniendo usuario";
  }
};

const logout = async () => {
  const token = localStorage.getItem("token");

  try {
    const res = await axios.delete(`${API_URL}/users/logout`, {
      headers: {
        Authorization: token,
      },
    });
    if (res.data) {
      localStorage.clear();
    }
    return res.data;
  } catch (error) {
    console.error("Logout error:", error);
    throw error.response?.data || "Error cerrando sesión";
  }
};

const uploadProfileImage = async (file) => {
  const token = localStorage.getItem("token");

  if (!file) {
    throw new Error("No file provided");
  }

  const formData = new FormData();
  formData.append("profileImage", file); 

  try {
    const res = await axios.put(`${API_URL}/users/upload-profile-image`, formData, {
      headers: {
        Authorization: token, 
      },
    });

    return res.data;
  } catch (error) {
    console.error("Upload image error:", error);
    throw error.response?.data || "Error subiendo imagen";
  }
};

const authService = {
  register,
  login,
  getLoggedUser,
  logout,
  uploadProfileImage,
};

export default authService;
