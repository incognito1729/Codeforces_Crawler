import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card";
import User from "./Components/User";
import UserSubmission from "./Components/UserSubmission";
import {Navbar,NavDropdown,Nav,Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    document.title = "Codeforces Crawler";
  }, []);
  return (
    <Card>
      <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Codeforces Crawler</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={"<User/>"}>Home</Nav.Link>
              <Nav.Link href="./UserSubmission.js">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
        {/* <User /> */}
        <UserSubmission />
      </div>
    </Card>
  );
}

export default App;
