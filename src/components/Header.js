import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "./assets/Goa1.png";
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top  rounded-circle"
            />{" "}
            eTourGoa
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
