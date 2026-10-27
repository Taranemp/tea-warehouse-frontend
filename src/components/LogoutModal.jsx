import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useAuth } from "../auth/AuthContextProvider.jsx";
import { useToast } from "./ToastNotification.jsx";

export default function LogoutModal({ show, onHide }) {
    const { logout } = useAuth();
    const { addToast } = useToast();

    const handleLogout = () => {
        logout();
        addToast("Logged out successfully", "success");
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Logout</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to log out?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="warning" onClick={handleLogout}>
                    Logout
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
