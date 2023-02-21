import React from "react";
import { createBrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import NavBar from "./NavBar";
import NewRecipe from "./NewRecipe";

function App() {
  return (
    <div className="App">
      <h1>HELLO WORLD!</h1>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new-recipes' element={<NewRecipe />}/>
        </Routes>
      </main>
      {/* <Home /> */}
      {/* make a header */}
    </div>
  );
}

export default App;
