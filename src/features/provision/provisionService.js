import axios from "axios";
const API_URL = "http://localhost:8080";

const createService = async (service) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(`${API_URL}/services/`, service, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const authService = {
  createService,
};

export default authService;
