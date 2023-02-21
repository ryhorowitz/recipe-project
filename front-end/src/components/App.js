import React from "react";
import { createBrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import NaviBar from "./NavBar";
import NewRecipe from "./NewRecipe";

function App() {
  return (
    <div className="App">
      <h1>HELLO WORLD!</h1>
      <NaviBar />
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new-recipe' element={<NewRecipe />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
