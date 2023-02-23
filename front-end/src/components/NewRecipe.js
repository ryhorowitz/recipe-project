import React from "react";
import { FormGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form"

function NewRecipe() {

  const formStyles = {
    display: 'flex',
    justifyContent: 'center',  
    background: 'white'
  }
  return (
    
      <Form className="rounded p-4 p-sm-3">
        <Form.Group className='mb-3'>
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

        <Form.Group>
          <Form.Label>Image:</Form.Label>
          <Form.Control type="text"></Form.Control> </Form.Group>
        <Form.Group>
          <Form.Label>Link to recipe</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
      </Form>
  )
}

export default NewRecipe