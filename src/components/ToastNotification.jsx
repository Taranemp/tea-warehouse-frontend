import { createContext, useContext, useState, useCallback } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, variant = "success") => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, variant }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 4000);
    }, []);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
                {toasts.map(({ id, message, variant }) => (
                    <Toast
                        key={id}
                        bg={variant}
                        onClose={() => removeToast(id)}
                        autohide
                        delay={4000}
                    >
                        <Toast.Header closeButton>
                            <strong className="me-auto">
                                {variant === "success" ? "Success" : "Error"}
                            </strong>
                        </Toast.Header>
                        <Toast.Body className={variant === "success" || variant === "danger" ? "text-white" : ""}>
                            {message}
                        </Toast.Body>
                    </Toast>
                ))}
            </ToastContainer>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}
