import { apiRequest } from "../services/apiClient";
import { useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useToast } from "./ToastNotification";


export default function FactoryForm({ action, fData }) {
    const navigate = useNavigate();
    const { addToast } = useToast();
    const [show, setShow] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [formData, setFormData] = useState(fData)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e, action) => {
        e.preventDefault();

        if (action.toLocaleLowerCase() === 'create') {
            setIsSubmitting(true);
            const { name, phone } = formData; 
            try {            
                await apiRequest('POST', 'factories', { name, phone })
                addToast("Factory created successfully!", "success");
                window.location.reload()
            } catch (error) {
                addToast(error.message || "Create Factory failed", "danger");
            } finally {
                setIsSubmitting(false);
            }
        }
        if (action.toLocaleLowerCase() === 'edit') {
            setIsSubmitting(true);
            const { id, name, phone } = formData; 
            try {            
                await apiRequest('PUT', `factories/${id}`, { name, phone })
                addToast("Factory Edited successfully!", "success");
                window.location.reload()
            } catch (error) {
                addToast(error.message || "Create Factory failed", "danger");
            } finally {
                setIsSubmitting(false);
            }  
        }
        console.log(action);
        
    };
    return (
        <div>
            <Form onSubmit={(e)=>{handleSubmit(e, action)}}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="name">Name</InputGroup.Text>
                    <Form.Control
                        name="name"
                        placeholder="name"
                        aria-label="name"
                        aria-describedby="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="name">Phone</InputGroup.Text>
                    <Form.Control
                        name="phone"
                        placeholder="phone"
                        aria-label="phone"
                        aria-describedby="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </InputGroup>
                <div className='d-flex justify-content-end gap-2'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? action+' !' : action}
                    </Button>
                </div>
            </Form>
        </div>
    )
}