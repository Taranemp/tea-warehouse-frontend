import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './scss/custom-bootstrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { BrowserRouter  as Router, Route, Routes} from "react-router-dom";
import PrivateLayout from "./layout/PrivateLayout.jsx";
import { AuthContextProvider } from "./auth/AuthContextProvider.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import PublicRoutes from "./routes/PublicRoutes.jsx";
import { ThemeProvider } from "./layout/ThemeProvider.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import PublicLayout from "./layout/PublicLayout.jsx";
import { ToastProvider } from "./components/ToastNotification.jsx";


function App() {
    const userRoutes = PrivateRoutes();
    const publicRoutes = PublicRoutes();

    return (
        <ThemeProvider>
            <AuthContextProvider>
                <ToastProvider>
                    <Router>
                        <Routes>
                            <Route element={<PublicLayout />}>
                                {publicRoutes}
                            </Route>
                            <Route element={<PrivateLayout />}>
                                {userRoutes}
                            </Route>
                            <Route path={'*'} element={<NotFoundPage />} />
                        </Routes>
                    </Router>
                </ToastProvider>
            </AuthContextProvider>
        </ThemeProvider>
    );
}

export default App;
