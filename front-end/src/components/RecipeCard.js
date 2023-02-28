import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditRecipe from "./EditRecipe";

function RecipeCard({
  id, name, img, link, description, onDeleteRecipe
}) {

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
        <EditRecipe 
          id={id}
          name={name}
          img={img}
          link={link}
          description={description} />
        {/* </div> */}
      </Card.Body>
    </Card>
  )
}

export default RecipeCard

// add edit button on the card