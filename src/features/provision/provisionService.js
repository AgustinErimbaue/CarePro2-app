import axios from "axios";
const API_URL = "https://care-pro-backend.onrender.com";

const createService = async (service) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(`${API_URL}/services/`, service, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const updateService = async (_id, formData) => {
  const token = localStorage.getItem("token");
  const res = await axios.put(
    `${API_URL}/services/updateService/${_id}`,
    formData,
    {
      headers: { Authorization: token },
    }
  );
  return res.data;
};

const getUserServices = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  const res = await axios.get(`${API_URL}/services/service`, {
    headers: {
      Authorization: token,
    },
  });

  return res.data;
};

const getAllServices = async () => {
  const token = localStorage.getItem("token");

  if (!token) throw new Error("No token found");

  const res = await axios.get(`${API_URL}/services/allServices`, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const deleteService = async (_id) => {
  const token = localStorage.getItem("token");

  const res = await axios.delete(`${API_URL}/services/deleteService/${_id}`, {
    headers: {
      Authorization: token,
    },
  });
  return res.data
};

const authService = {
  createService,
  updateService,
  getUserServices,
  getAllServices,
  deleteService,
};

export default authService;
