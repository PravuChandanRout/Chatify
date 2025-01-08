import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatify-backend-60ft.onrender.com",
  withCredentials: true,
});
