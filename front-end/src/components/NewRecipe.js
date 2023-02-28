import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"

function NewRecipe({onAddRecipe}) {
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    img: '',
    link: ''
  })

  return (

    <Form className="rounded p-4 p-sm-3" onSubmit={handleSubmit}>
      <Form.Group className='mb-3 w-50' controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Recipe name"
          defaultValue={newRecipe.name}
          onChange={handleUpdateForm}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="img">
        <Form.Label>Image:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter url"
          defaultValue={newRecipe.img}
          onChange={handleUpdateForm}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="mb-4" controlId="link">
        <Form.Label>Link to recipe</Form.Label>
        <Form.Control
          type='url'
          placeholder="Enter Link to Recipe"
          defaultValue={newRecipe.link}
          onChange={handleUpdateForm}
        ></Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
  )

  function handleUpdateForm(e) {
    setNewRecipe({
      ...newRecipe,
      [e.target.id]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('submit')
    onAddRecipe(newRecipe)
  }
}
export default NewRecipe