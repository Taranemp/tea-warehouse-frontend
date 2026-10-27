import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function DeleteFactory({ id }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  function handleDelete(){
    console.log(id,'delete');
    
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <Button
            className="my-2 btn-sm"
            variant="danger" 
            onClick={handleShow}
        >
            Delete
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Delete Factroy
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Do you sure to delete ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
