import axios from "axios";
import { getAccess } from "./auth";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000"
})

api.interceptors.request.use(async config => {
  const token = getAccess();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;