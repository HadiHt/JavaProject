import React, { FC } from "react";
import "./PlacesToEat.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SearchIcon from "@mui/icons-material/Search";

const PlacesToEat = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="box">
          <h3>Zagreb Restaurants</h3>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="box">
          <h2>Make free reservation</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="box mx-5 my-3">
          <ButtonToolbar
            className="mb-3"
            aria-label="Toolbar with Button groups"
          >
            <ButtonGroup className="me-2" aria-label="First group">
              <InputGroup className="mx-0">
                <InputGroup.Text id="btnGroupAddon">
                  <CalendarMonthIcon></CalendarMonthIcon>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Choose a Date"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon"
                />
              </InputGroup>
              <InputGroup className="mx-1">
                <InputGroup.Text id="btnGroupAddon">
                  <AccessTimeIcon></AccessTimeIcon>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Choose a Date"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon"
                />
              </InputGroup>
              <InputGroup className="mx-1">
                <InputGroup.Text id="btnGroupAddon">
                  <PeopleOutlineIcon></PeopleOutlineIcon>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Choose a Date"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon"
                />
              </InputGroup>
              <InputGroup>
                <InputGroup.Text id="btnGroupAddon">
                  <SearchIcon></SearchIcon>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Choose a Date"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon"
                />
              </InputGroup>
            </ButtonGroup>
          </ButtonToolbar>
          <Button className="my-4" size="lg" variant="primary">
            Let's go
          </Button>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="box mx-5 my-3">
          <h6>Best Croatian Food and Dishes You Need to Try</h6>
          <p>
            When in Croatia, eat like a Croatian…and we promise you’ll be richly
            rewarded! Croatia is a gourmand’s dream, with one of the best – and
            most underrated – cuisines in Europe. With its many miles of
            coastline, seafood is an obvious highlight, but you’ll also find
            succulent meats and hearty stews across inland destinations. A
            Mediterranean climate sees Croatia produce high-quality ingredients,
            with wine, olive oil, and truffles all noted highlights.
          </p>
          <h6>Top places to eat tonight in Zagreb</h6>
        </div>
      </div>
    </div>
  </div>
);

export default PlacesToEat;
