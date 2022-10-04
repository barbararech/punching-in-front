import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export async function createUser(data) {
  const response = await api.post("/signup", data);
  return response.data;
}

export async function signInUser(data) {
  const response = await api.post("/signin", data);
  return response.data;
}

export async function viewUnarchivedCards(config) {
  const response = await api.get("/applications", config);
  return response.data;
}
