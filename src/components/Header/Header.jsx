import React from "react";
import Alas from "../../assets/img/header.png";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar className="header">
          <Navbar.Brand href="#home">
            <img
              className="header__logo"
              src={Alas}
              alt="Header Icon"
            />
          </Navbar.Brand>
          <Nav
            className="header__nav justify-content-end"
            variant="pills"
            defaultActiveKey="/home"
          >
            <Nav.Link className="nav__item"  href="#home">Sobre Mi</Nav.Link>
            <Nav.Link className="nav__item" href="#features">Servicios</Nav.Link>
            <Nav.Link className="nav__item" href="#dad">Skills</Nav.Link>
            <Nav.Link className="nav__item" href="#pricing">Consultas</Nav.Link>
          </Nav>

      </Navbar>
    </>
  );
};

export default Header;
