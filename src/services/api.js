import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export async function createUser(data) {
  console.log(data)
  const response = await api.post("/signup", data);
  return response.data;
}

export async function login(data) {
  const response = await api.post("/signin", data);
  return response.data;
}
