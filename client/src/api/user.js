import axios from "axios";

const url = "http://localhost:5000/user";

export const registerUser = (data) => axios.post(`${url}/register`, data);

export const hello = () => axios.get(`${url}/hi`);
