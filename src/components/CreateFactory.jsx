import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FactoryForm from "./FactoryForm";

export default function CreateFactory() {
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
          + Create
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Create new Factory
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FactoryForm action='Create' fData={{id: '', name: '', phone:''}} />
        </Modal.Body>
      </Modal>
    </>
  );
}