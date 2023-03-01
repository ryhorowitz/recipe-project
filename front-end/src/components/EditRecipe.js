import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditRecipeForm from './EditRecipeForm';

function EditRecipe({ recipe, url, onEditRecipe }) {
  const [show, setShow] = useState(false);
  const [editRecipe, setEditRecipe] = useState({
    name: recipe.name,
    img: recipe.img,
    link: recipe.link,
    description: recipe.description
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className='mx-2'
        variant="primary"
        onClick={handleShow}
        size="sm"
        style={{ float: 'right' }}>
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
          <EditRecipeForm
            recipe={recipe}
            editRecipe={editRecipe}
            setEditRecipe={setEditRecipe}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditSubmisson}>Edit Recipe</Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  function handleEditSubmisson() {
    
    fetch(`${url}/${recipe.id}`, {
      method: 'PATCH',
      body: JSON.stringify(editRecipe),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(r => r.json())
      .then(edittedRecipe => onEditRecipe(edittedRecipe))
      .then(() => handleClose())
      .catch(err => console.error(err))
  }
}
export default EditRecipe