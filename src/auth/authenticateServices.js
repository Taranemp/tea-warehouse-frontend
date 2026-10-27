import { authApi } from "../services/authApi.js";
import { getToken, setToken, removeToken } from "../services/tokenService.js";

export function IsAuthenticated() {
    return !!getToken();
}

export async function validateToken() {
    const token = getToken();
    if (!token) return false;

    try {
        await authApi.getProfile();
        return true;
    } catch (error) {
        if (error.status === 401) {
            removeToken();
        }
        return false;
    }
}

export async function login(username, password) {
    const data = await authApi.login(username, password);
    setToken(data.access);
}

export async function register(username, email, password) {
    const data = await authApi.register(username, email, password);
    setToken(data.access);
}

export function logout() {
    removeToken();
}
