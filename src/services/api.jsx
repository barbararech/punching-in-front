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

export async function viewArchivedCards(config) {
  const response = await api.get("/applications/archived", config);
  return response.data;
}

export async function archivedCard(id, itsArchived, config) {
  const response = await api.put(
    `/applications/${id}/edit`,
    { itsArchived },
    config
  );
  return response.data;
}

export async function createApplication(data, config) {
  const response = await api.post("/applications/new", data, config);
  return response.data;
}

export async function createSteps(data, config) {
  const response = await api.post("/steps/new", data, config);
  return response.data;
}
export async function createAttachments(data, config) {
  const response = await api.post("/attachments/new", data, config);
  return response.data;
}
