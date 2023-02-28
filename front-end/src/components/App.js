import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import NaviBar from "./NavBar";
import NewRecipe from "./NewRecipe";
import Recipes from "./Recipes";

const recipesUrl = 'http://localhost:3000/recipes'

function App() {
  const [recipes, setRecipes] = useState([])

  useEffect( () => {
    fetch(recipesUrl)
      .then(r => r.json())
      .then(recipes => setRecipes(recipes))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App" style={appStyles}>
      <NaviBar />
      <main style={mainContainer}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new-recipe' element={<NewRecipe onAddRecipe={handleAddRecipe}/>} />
          <Route path='/recipes' element={<Recipes recipes={recipes}
          />} />
        </Routes>
      </main>
    </div>
  );

}

function handleAddRecipe(recipe) {

  const postOptions = {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(recipe)
  }

  fetch(recipesUrl, postOptions)
    .then( r => r.json())
    .then( data => console.log(data))
    .catch ( err => console.error(err))
}

const appStyles = {
  margin: '100px 50px',
  padding: '0 50px',
  background: '#DCE775'

}

const mainContainer = {
  margin: '10px',
  padding: '50px',
}
export default App;
