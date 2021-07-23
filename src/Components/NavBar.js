import 'bootstrap/dist/css/bootstrap.css'
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import React from "react";
import { Container } from 'react-bootstrap';

function Navbarcomponent (params) {
    return(
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>


    )
}


export default Navbarcomponent;
