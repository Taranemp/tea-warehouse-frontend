import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FactoryForm from './FactoryForm';

export default function EditFactory({ id, name, phone }) {
  
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex justify-content-end">
        <Button
          className="my-2 btn-sm"
          variant="primary"
          onClick={handleShow}
        >
          Edit
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Edit Factory
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <FactoryForm action='Edit' fData={{ id:id, name: name, phone: phone }} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}