import axios from "axios";

const api = axios.create({
  baseURL: "https://5ff47ee516cf4f0017c20423.mockapi.io/api"
});

export default api;
