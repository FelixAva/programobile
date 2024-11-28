import axios from 'axios';

const apiManager = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  params: {
    api_key: process.env.EXPO_PUBLIC_API_KEY,
    format: "json"
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default apiManager;
