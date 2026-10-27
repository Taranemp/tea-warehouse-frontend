import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { IsAuthenticated, validateToken, login as authLogin, logout as authLogout, register as authRegister } from "./authenticateServices.js";

const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(IsAuthenticated());
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function initAuth() {
            const valid = await validateToken();
            setIsAuthenticated(valid);
            setIsLoading(false);
        }
        initAuth();
    }, []);

    const login = useCallback(async (username, password) => {
        await authLogin(username, password);
        setIsAuthenticated(true);
    }, []);

    const register = useCallback(async (username, email, password) => {
        await authRegister(username, email, password);
        setIsAuthenticated(true);
    }, []);

    const logout = useCallback(() => {
        authLogout();
        setIsAuthenticated(false);
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
