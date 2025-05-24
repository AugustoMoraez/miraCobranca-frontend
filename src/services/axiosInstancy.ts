import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

 
api.interceptors.request.use((config) => {
  const user = localStorage.getItem("user");  
  if(user){
    const {token} = JSON.parse(user)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});
