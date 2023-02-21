// create header with links to Home, New Recipe, and Recipes
import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {

   const oldNav = <div>
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

  return (
    <>
    <Navbar collapseonSelect fixed='top' bg='dark'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />/
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href="/new-recipe">New Recipe</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>

  )
}

export default NavBar