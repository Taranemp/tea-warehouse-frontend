import { Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";

// General Routes that do not need authorization.
export default function PublicRoutes() {
    return (
        <>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </>
    );
}
