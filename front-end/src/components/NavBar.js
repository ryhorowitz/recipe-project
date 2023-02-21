// create header with links to Home, New Recipe, and Recipes
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <div>
      <ul>
        <li>
          <NavLink
            to='/'
          >Home</NavLink>
        </li>
        <li>
          <NavLink
            to='/new-recipes'
          >New Recipe</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar