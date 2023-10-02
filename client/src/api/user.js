import axios from "axios";
import { axiosConfig } from "./utils";

const url = "http://localhost:5000/user";

export const registerUser = (data) =>
  axios.post(`${url}/register`, data, axiosConfig);
