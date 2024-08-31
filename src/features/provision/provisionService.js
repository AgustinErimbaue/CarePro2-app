import axios from "axios";
const API_URL = "http://localhost:8080";

const createService = async (service) =>{
    const res = await axios.post(`${API_URL}/services/`, service)
    return res.data
}

const authService = {
    createService
};

export default authService;
