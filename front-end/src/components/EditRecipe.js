import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditRecipeForm from './EditRecipeForm';

function EditRecipe({ recipe }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button 
      className='mx-2'
      variant="primary" 
      onClick={handleShow}
      size="sm"
      style={{float: 'right'}}>
       Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditRecipeForm recipe={recipe}/>
        </Modal.Body> 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Edit Recipe</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditRecipe