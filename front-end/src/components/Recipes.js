import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RecipeCard from "./RecipeCard";

function Recipes({ recipes, onDeleteRecipe }) {
  const recipeCards = recipes.map((recipe) => {

    return <Col key={recipe.id}>
      <RecipeCard
        id={recipe.id}
        recipe={recipe}
        onDeleteRecipe={onDeleteRecipe}
      />
    </Col>
  })
  return (
    <>
      <h1 className="mb-4">RECIPES</h1>
      <Row md={2} xl={3} className='g-4'>
        {recipeCards}
      </Row>
    </>
  )
}

export default Recipes