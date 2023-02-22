// create header with links to Home, New Recipe, and Recipes
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#78111e",
    borderRadius: "10px",
    textDecoration: "none",
    color: "white",
  };

  return (
    <>
      <Navbar fixed='top' bg='dark' >
        <Container>
          {/* <Navbar.Toggle aria-controls='responsive-navbar-nav' />/
        <Navbar.Collapse id='responsive-navbar-nav'> */}
          {/* <Navbar.Brand to={"/"}>image</Navbar.Brand> */}
          <Nav>
            <Nav.Link
              as={Link}
              to="/"
              style={linkStyles}
            >Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/new-recipe"}
              style={linkStyles}
            >Add Recipe
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/recipes"}
              style={linkStyles}
            >Recipes
            </Nav.Link>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>

  )
}

export default NavBar