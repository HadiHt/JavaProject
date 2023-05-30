import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Navbar_() {
  return (
    <Navbar className="fixed-top shadow-none p-5" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 justify-content-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="/placetovisit"
              className="text-dark mx-2"
              style={{ fontSize: 18 }}
            >
              Places to visit
            </Nav.Link>

            <Nav.Link
              href="/publictransport"
              className="text-dark mx-2"
              style={{ fontSize: 18 }}
            >
              Public transport
            </Nav.Link>

            <Nav.Link
              href="/placestoeat"
              className="text-dark mx-2"
              style={{ fontSize: 18 }}
            >
              Places to eat
            </Nav.Link>
            <Nav.Link
              href="/placestostay"
              className="text-dark mx-2"
              style={{ fontSize: 18 }}
            >
              Places to stay
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

            <Nav.Link
              href="/signin"
              className="text-dark mx-3  fa-5x"
              style={{ height: 30, width: 30 }}
            >
              <i>
                <AccountCircleOutlinedIcon />
              </i>
            </Nav.Link>

            <Link to="/signup">
              <Button variant="dark">Register</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar_;
