import axios from "axios";
import { getToken } from "./tokenService.js";

const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log(BASE_URL);

export class ApiError extends Error {
    constructor(message, status, errors = null) {
        super(message);
        this.status = status;
        this.errors = errors;
        this.name = "ApiError";
    }
}
export async function apiRequest(method, endpoint, data = null, options = {}) {
    const token = getToken();
    const headers = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Token ${token}` }),
        ...options.headers,
    };

    try {
        const response = await axios({
            method,
            url: `${BASE_URL}${endpoint}/`,
            data,
            headers,
            ...options,
        });

        if (!response.data.success) {
            throw new ApiError(
                typeof response.data.errors === "string"
                    ? response.data.errors
                    : "Request failed",
                response.status,
                response.data.errors
            );
        }

        return response.data.data;
    } catch (error) {
        if (error instanceof ApiError) throw error;

        if (error.response) {
            const { data, status } = error.response;
            throw new ApiError(
                typeof data.errors === "string"
                    ? data.errors
                    : "Request failed",
                status,
                data.errors || null
            );
        }

        throw new ApiError("Network error", 0);
    }
}
