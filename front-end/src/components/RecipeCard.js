import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function RecipeCard({id, name, img, link, onDeleteRecipe}) {

  function handleDeleteButtonClick() {
    onDeleteRecipe(id)
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Yum
        </Card.Text>
        <Card.Link href={link}>Recipe Link</Card.Link>
        <Button 
        variant="secondary" 
        size="sm" 
        style={{ float: 'right' }}
        onClick={handleDeleteButtonClick}
        >Delete</Button>
      </Card.Body>
    </Card>
  )
}

export default RecipeCard