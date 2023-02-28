import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"

function EditRecipeForm({ recipe, onAddRecipe}) {
  const [editRecipe, setEditRecipe] = useState({
    name: recipe.name,
    img: recipe.img,
    link: recipe.link,
    description: recipe.description
  })

  return (

    <Form className="rounded p-4 p-sm-3" onSubmit={handleSubmit}>
      <Form.Group className='mb-3 w-50' controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Recipe name"
          defaultValue={editRecipe.name}
          onChange={handleUpdateForm}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="mb-4 w-75" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Tell me about it!"
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
          placeholder="Enter url"
          defaultValue={editRecipe.img}
          onChange={handleUpdateForm}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="mb-1" controlId="link">
        <Form.Label>Link to recipe</Form.Label>
        <Form.Control
          type='url'
          size="sm"
          placeholder="Enter Link to Recipe"
          defaultValue={editRecipe.link}
          onChange={handleUpdateForm}
        ></Form.Control>
      </Form.Group>
    </Form>
  )

  function handleUpdateForm(e) {
    setEditRecipe({
      ...editRecipe,
      [e.target.id]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('submit')
    // onAddRecipe(editRecipe)
  }
}
export default EditRecipeForm