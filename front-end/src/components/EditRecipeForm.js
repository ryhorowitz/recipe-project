import React, { useState } from "react";
import Form from "react-bootstrap/Form"

function EditRecipeForm({ recipe, editRecipe, setEditRecipe}) {
  

  return (

    <Form className="rounded p-4 p-sm-3" >
      <Form.Group className='mb-3 w-50' controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          defaultValue={editRecipe.name}
          onChange={handleUpdateForm}
        ></Form.Control> 
      </Form.Group>

      <Form.Group className="mb-4 w-75" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          defaultValue={editRecipe.description}
          onChange={handleUpdateForm}
          style={{height: '20vh'}}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="img">
        <Form.Label>Image:</Form.Label>
        <Form.Control
          type="text"
          size="sm"
          defaultValue={editRecipe.img}
          onChange={handleUpdateForm}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="mb-1" controlId="link">
        <Form.Label>Link to recipe</Form.Label>
        <Form.Control
          type='url'
          size="sm"
          defaultValue={editRecipe.link}
          onChange={handleUpdateForm}
        ></Form.Control>
      </Form.Group>
    </Form>
  )

  function handleUpdateForm(e) {
    console.log('triggered')
    setEditRecipe({
      ...editRecipe,
      [e.target.id]: e.target.value
    })
  }
}
export default EditRecipeForm