import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RecipeCard from "./RecipeCard";

function Recipes({ recipes, onDeleteRecipe, url, onEditRecipe }) {
  const recipeCards = recipes.map((recipe) => {

    return <Col
      style={{ display: "flex", justifyContent: "center" }}
      key={recipe.id}
    >
      <RecipeCard
        url={url}
        id={recipe.id}
        recipe={recipe}
        onDeleteRecipe={onDeleteRecipe}
        onEditRecipe={onEditRecipe}
      />
    </Col>
  })
  return (
    <div className="pb-5">
      <h1 className="mb-4 ">RECIPES</h1>
      <Row md={2} xl={3} className='g-4'>
        {recipeCards}
      </Row>
    </div>
  )
}

export default Recipes