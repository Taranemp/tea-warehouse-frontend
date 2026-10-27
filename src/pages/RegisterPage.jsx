import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Link, Navigate, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "../auth/AuthContextProvider.jsx";
import {useToast} from "../components/ToastNotification.jsx";


export  default function RegisterPage() {
    const { isAuthenticated, register } = useAuth()
    const { addToast } = useToast()
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({ username: "", email: "", password: "", confirmPassword: "" })

    if(isAuthenticated) {
        return (<Navigate to="/dashboard" replace />)
    }

    const togglePasswordVisibility = () => {
        setShowPass(!showPass);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            addToast("Passwords do not match", "danger");
            return;
        }
        setIsSubmitting(true);
        try {
            await register(formData.username, formData.email, formData.password);
            addToast("Registration successful!", "success");
            navigate("/dashboard", { replace: true });
        } catch (error) {
            addToast(error.message || "Registration failed", "danger");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='row justify-content-center align-items-center h-100'>
            <div className='col-12 mx-auto' style={{maxWidth: '600px'}}>
                <div className='border rounded-4 px-3 py-4'>
                    <p className='h4 mb-5 mt-3'>Register</p>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="username">Username</InputGroup.Text>
                            <Form.Control
                                name="username"
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="email">Email</InputGroup.Text>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="john.doe@gmail.com"
                                aria-label="Email"
                                aria-describedby="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="password">Password</InputGroup.Text>
                            <Form.Control
                                name="password"
                                type={showPass ? "text" : "password"}
                                placeholder="Password"
                                aria-label="Password"
                                aria-describedby="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <InputGroup.Text
                                id="eye"
                                onClick={togglePasswordVisibility}
                                style={{ cursor: 'pointer' }}
                                role="button"
                                tabIndex={0}
                            >
                                {showPass ? (
                                    <i className="bi bi-eye"></i>
                                ) : (
                                    <i className="bi bi-eye-slash-fill"></i>
                                )}
                            </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="confirm-password">Confirm Password</InputGroup.Text>
                            <Form.Control
                                name="confirmPassword"
                                type={showPass ? "text" : "password"}
                                placeholder="Confirm Password"
                                aria-label="Confirm Password"
                                aria-describedby="confirm-password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <InputGroup.Text
                                id="eye-confirm"
                                onClick={togglePasswordVisibility}
                                style={{ cursor: 'pointer' }}
                                role="button"
                                tabIndex={0}
                            >
                                {showPass ? (
                                    <i className="bi bi-eye"></i>
                                ) : (
                                    <i className="bi bi-eye-slash-fill"></i>
                                )}
                            </InputGroup.Text>
                        </InputGroup>

                        <Button variant="primary" type="submit" className='w-100 mt-4' disabled={isSubmitting}>
                            {isSubmitting ? "Registering..." : "Register me"}
                        </Button>
                    </Form>
                </div>
                <div className='text-center mt-2'>
                    <p>
                        I already have an account, <Link className='text-decoration-none px-0 mx-0' to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>

    )
}
