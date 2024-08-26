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
          Authorization: `Bearer ${token}`,
      },
  });

  return response.data; 
};



const authService = {
  register,
  login,
  getLoggedUser,
};

export default authService;