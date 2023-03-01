// create header with links to Home, New Recipe, and Recipes
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
          >Recipe Book
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
            >Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/new-recipe"}
            >Add Recipe
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/recipes"}
            >Recipes
            </Nav.Link>
          </Nav>
        </Container>
        {/* </Navbar.Collapse> */}
      </Navbar>
    </>

  )
}

export default NavBar