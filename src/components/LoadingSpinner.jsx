import Spinner from "react-bootstrap/Spinner";

export default function LoadingSpinner({ size = "md", text = "Loading..." }) {
    return (
        <div className="d-flex justify-content-center align-items-center h-100 w-100 py-5">
            <Spinner animation="border" role="status" size={size}>
                <span className="visually-hidden">{text}</span>
            </Spinner>
            <span className="ms-2">{text}</span>
        </div>
    );
}
