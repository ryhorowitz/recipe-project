import React from "react";
import { Button, FormGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form"

function NewRecipe() {

  function handleSubmit(e) {
    e.preventDefault()
    console.log('submit')
  }
  return (

    <Form className="rounded p-4 p-sm-3" onSubmit={handleSubmit}>
      <Form.Group className='mb-3 w-75' controlId="formRecipeName">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Recipe name"></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRecipeImage">
        <Form.Label>Image:</Form.Label>
        <Form.Control type="text" placeholder="Enter url"></Form.Control>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formRecipeLink">
        <Form.Label>Link to recipe</Form.Label>
        <Form.Control type='url' placeholder="Enter Link to Recipe"></Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
  )
}

export default NewRecipe