import axios from "axios";

const url = "http://localhost:5000/user";

export const axiosConfig = {
  validateStatus: function (status) {
    return status;
  },
};

export const registerUser = (data) =>
  axios.post(`${url}/register`, data, axiosConfig);
export const loginUser = (data) =>
  axios.post(`${url}/login`, data, axiosConfig);
export const logout = () => axios.delete(`${url}/logout`, axiosConfig);
// export const hello = () => axios.get(`${url}/hi`);
