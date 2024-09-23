import axios from "axios";
const API_URL = "http://localhost:8080";

const hireService = async (service) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(`${API_URL}/contracts/hire`, service, {
    headers: { Authorization: token },
  });
  return res.data;
};

const getUserProfile = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${API_URL}/contracts/contract-info`, {
    headers: { Authorization: token },
  });
  return res.data;
};

const contractService = {
  hireService,
  getUserProfile,
};

export default contractService;
