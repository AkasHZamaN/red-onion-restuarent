import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import bannerbackground from "../../images/bannerbackground.png";
import './Header.css';
import {
  Container,
  Nav,
  Navbar
} from "react-bootstrap";
import logo2 from '../../images/logo2.png';


const Header = () => {
  return (
    <section>
      <Navbar bg="success opacity-75 p-2" expand="lg">
        <Container fluid>
          <Navbar.Brand as={ Link } to="/">
              <img className="w-25" src={logo2} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            </Nav>
            <Nav className="fs-6 fw-bold pe-5">
              <Nav.Link id="nav-content" as={Link} to="/">Home</Nav.Link>
              <Nav.Link id="nav-content" as={Link} to="/cart">Cart</Nav.Link>
              <Nav.Link id="nav-content" as={Link} to="/register">Register</Nav.Link>
              <Nav.Link id="nav-content" as={Link} to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <article className="header-bottom">
        <img className="w-100" src={bannerbackground} alt="" />
        <article className="search-form w-100">
          <h2 className="text-center">Best food waiting for your Belly!!</h2>
          <Form className=" d-flex w-50 mx-auto">
            <FormControl
              type="search"
              placeholder="Search Your Food"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
          </Form>
        </article>
      </article>

      <nav className="text-center py-3 ">
          <Link className=" me-5 text-decoration-none text-black" to={'/breakfast'}>Breakfast</Link>
          <Link className="me-5 text-decoration-none text-black" to={'/launch'}>Launch</Link>
          <Link className="me-5 text-decoration-none text-black" to={'/dinner'}>Dinner</Link>
      </nav>
    </section>
  );
};

export default Header;
