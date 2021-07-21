import 'bootstrap/dist/css/bootstrap.css'
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import React from "react";
import { MDBSmoothScroll } from "mdbreact";

function Navbarcomponent (params) {
    return(
<div>
<MDBSmoothScroll to="link1">Section 1</MDBSmoothScroll>
<MDBSmoothScroll to="link2">Section 2</MDBSmoothScroll>
<Navbar bg="dark" variant="dark">
<Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home">Active</Nav.Link>
  <Nav.Link eventKey="link-1">About</Nav.Link>
  <Nav.Link eventKey="link-2">Projects</Nav.Link>
  <Nav.Link eventKey="link-3">Education</Nav.Link>
  <Nav.Link eventKey="link-4">Skills</Nav.Link>
</Nav>
</Navbar>
</div>

    )
}


export default Navbarcomponent;
