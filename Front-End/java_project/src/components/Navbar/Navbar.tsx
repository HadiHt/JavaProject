import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SignIn_modal from "../SignIn_modal/SignIn_modal.tsx";
import { useState } from "react";
import LanguageSwitcher from "../../LanguageSwitcher";
import { useTranslation } from "react-i18next";

function Navbar_() {
  const { t, i18n } = useTranslation();
  
  return (
    <Navbar className="fixed-top shadow-none p-5" expand="lg">
      <Container fluid>
      
        <Navbar.Brand href="/">
          <img src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 justify-content-center "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="/placetovisit"
              className="mx-4"
              style={{ fontSize: 20, color: "black", fontWeight: "bold" }}
            >
             {t("places.to.visit")}
            </Nav.Link>

            <Nav.Link
              href="/publictransport"
              className="mx-4"
              style={{ fontSize: 20, color: "black", fontWeight: "bold" }}
            >
              {t("public.transportation")}
            </Nav.Link>

            <Nav.Link
              href="/placestoeat"
              className="mx-4"
              style={{ fontSize: 20, color: "black", fontWeight: "bold" }}
            >
              {t("places.to.eat")}
            </Nav.Link>
            <Nav.Link
              href="/placestostay"
              className="mx-4"
              style={{ fontSize: 20, color: "black", fontWeight: "bold" }}
            >
              {t("places.to.stay")}
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <SignIn_modal></SignIn_modal>

            <Link to="/signup">
              <Button variant="dark">{t("register")}</Button>
            </Link>
            <LanguageSwitcher />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar_;
