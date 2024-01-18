import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "./Navbar.module.css";
import logo from "../Images/logo.jpg";
import PrimaryButton from "./PrimaryButton";

export default function TheNavbar() {
  return (
    <Navbar expand="md" className={classes.container}>
      <Container>
        <Navbar.Brand href="#logo">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#JobVacancy" className={classes.text}>
              Job Vacancy
            </Nav.Link>
            <Nav.Link href="#Features" className={classes.text}>
              Features
            </Nav.Link>
            <Nav.Link href="#Pricing" className={classes.text}>
              Pricing
            </Nav.Link>
            <Nav.Link href="#aboutus" className={classes.text}>
              About Us
            </Nav.Link>
          </Nav>
          <Nav.Link href="#btn">
            <PrimaryButton buttonText="Sign Up" />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
