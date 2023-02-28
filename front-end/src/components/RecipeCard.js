import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditRecipe from "./EditRecipe";

function RecipeCard({recipe, url, onDeleteRecipe, onEditRecipe}) {
  const {id, name, img, description, link} = recipe
  function handleDeleteButtonClick() {
    onDeleteRecipe(id)
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Link href={link} target="_blank">Recipe Link</Card.Link>
        {/* <div> */}
        <Button
          variant="secondary"
          size="sm"
          style={{ float: 'right' }}
          onClick={handleDeleteButtonClick}
        >Delete</Button>
        <EditRecipe recipe={recipe} url={url} onEditRecipe={onEditRecipe}/>
        {/* </div> */}
      </Card.Body>
    </Card>
  )
}

export default RecipeCard

// add edit button on the card