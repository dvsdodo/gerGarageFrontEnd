import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000",
});

export const createSession = async (username, password) => {
    return api.post("/sessions", { username, password });
};

export const getUsers = async () => {
    return api.get("/listUsers");
};

export const createUser = async (name, phone_number, username, password) => {
    return api.post("/createUser", { name, phone_number, username, password });
};