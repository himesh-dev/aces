import axios from "axios";

export const API_KEY = "32eb1e8f2906cb41b46001cd8e41a073";
// export const API = `?api_key=${API_KEY}`;

const BASE_URL = "https://api.themoviedb.org/3/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getLocalStorage = (key) => {
  let value = localStorage.getItem(key);
  return value;
};
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
