import { apiRequest } from "./apiClient.js";

export const authApi = {
    login: (username, password) =>
        apiRequest("POST", "login", { username, password }),

    register: (username, email, password) =>
        apiRequest("POST", "register", { username, email, password }),

    getProfile: () =>
        apiRequest("GET", "profile"),
};
