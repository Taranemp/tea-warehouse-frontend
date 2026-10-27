import { Route } from "react-router-dom";
import AuthGuard from "../auth/AuthGuard.jsx";
import { getPrivateRoutesArray } from "./privateRoutes.js";

export default function PrivateRoutes() {
    const routes = getPrivateRoutesArray();

    return (
        <Route element={<AuthGuard />}>
            {routes.map(({ path, component: Component }) => (
                <Route
                    key={path}
                    path={path}
                    element={<Component />}
                />
            ))}
        </Route>
    );
}