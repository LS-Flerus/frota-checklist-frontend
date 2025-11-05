import axios, { AxiosError } from "axios";

const api_url = "http://localhost:8080/"

export const axiosBackend = axios.create({
  baseURL: api_url,
  withCredentials: true,
  headers: {
    "ngrok-skip-browser-warning": "any",
    "Content-Type": "application/json",
  }
});

axiosBackend.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error?.response?.status === 401) {
      console.log(error.response.statusText);
    }
    return Promise.reject(error);
  }
);