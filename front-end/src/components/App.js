import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import Home from "./Home"
import NaviBar from "./NavBar";
import NewRecipe from "./NewRecipe";
import Recipes from "./Recipes";

const recipesUrl = 'http://localhost:3000/recipes'

function App() {
  const [recipes, setRecipes] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    fetch(recipesUrl)
      .then(r => r.json())
      .then(recipes => setRecipes(recipes))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <NaviBar />
      <main className="px-3 bg-secondary">
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/new-recipe'
            element={
              <NewRecipe
                onAddRecipe={handleAddRecipe} />}
          />
          <Route
            path='/recipes'
            element={
              <Recipes
                url={recipesUrl}
                recipes={recipes}
                onDeleteRecipe={handleDeleteRecipe}
                onEditRecipe={handleEditRecipe} />}
          />
        </Routes>
      </main>
    </>
  );

  function handleAddRecipe(recipe) {

    const postOptions = {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(recipe)
    }

    fetch(recipesUrl, postOptions)
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setRecipes([...recipes, data])
      })
      .then(() => {
        navigate('/recipes')
      })
      .catch(err => console.error(err))
  }

  function handleDeleteRecipe(id) {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id)

    fetch(`${recipesUrl}/${id}`, { 'method': 'DELETE' })
      .then(r => r.json())
      .then(data => { setRecipes(updatedRecipes) })
      .catch(err => console.error(err))
  }

  function handleEditRecipe(edittedRecipe) {
    const updatedRecipes = recipes.map(recipe => {
      if (recipe.id === edittedRecipe.id) {
        // update with response obj from server
        return edittedRecipe
      }
      return recipe
    })
    console.log('updatted', updatedRecipes)
    setRecipes(updatedRecipes)
  }
}

export default App;
