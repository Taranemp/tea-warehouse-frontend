import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContextProvider.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

function AuthGuard() {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}

export default AuthGuard;
