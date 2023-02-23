import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import NaviBar from "./NavBar";
import NewRecipe from "./NewRecipe";
import Recipes from "./Recipes";



function App() {
  const appStyles = {
    align: 'center',
    margin: '0 50px',
    background: '#DCE775',
    height: 'max'
  }

  const mainContainer = {
    margin: '10px',
    padding: '50px'
  }
  return (
    <div className="App" style={appStyles}>
      <NaviBar />
      <main  style={mainContainer}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new-recipe' element={<NewRecipe />}/>
          <Route path='/recipes' element={<Recipes/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
