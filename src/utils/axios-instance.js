import axios from "axios";
import { getJwt } from "./storege";


const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

axiosInstance.interceptors.request.use(
  config => {
    const token = getJwt();

    if (token) {
      config.headers["x-access-token"] = token;
    } else {
      delete axiosInstance.defaults.headers.common["x-access-token"];
    }
    return config;
  },

  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Request made and server responded
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }

    return Promise.reject(new Error(error?.response?.data?.message));
  }
);

export default axiosInstance;
