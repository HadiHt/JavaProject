import React, { FC, useState, Component, useEffect } from "react";
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
import Layout from "../../components/Layout/Layout.tsx";
import BannerImage from "../../assets/Podloga.png";
import TP_1 from "../../assets/TP_1.png";
import TP_2 from "../../assets/TP_2.png";
import TP_3 from "../../assets/TP_3.png";
import TP_4 from "../../assets/TP_4.png";
import { MDBIcon } from "mdb-react-ui-kit";
import Rating from "@mui/material/Rating";
import Card from "react-bootstrap/Card";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { getValue } from "@testing-library/user-event/dist/utils";
import { DropdownComponent } from "dropdown-ii";

const PlacesToEat = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [place, setPlace] = useState("");

  const optionsPeople = [
    "1 person", // split the translated array
    "2 people",
    "3 people",
    "4 people",
    "5 people",
  ];

  const options = [
    "9-11 AM",
    "11-1 PM",
    "1-3 PM",
    "3-5 PM",
    "5-7 PM",
    "7-9 PM",
    "9-11PM",
  ];

  const restourants = [
    "Pod Zidom Bistro",
    "Torikaya Ramen Bar",
    "Sopal",
    "SOI Fusion Bar",
    "Konoba Luka",
  ];

  const handleTime = (event) => {
    setTime(event.target.value);
  };
  const handleNumberOfPeople = (event) => {
    setNumberOfPeople(event.target.value);
  };

  useEffect(() => {
    console.log({ time });
    console.log({ startDate });
    console.log({ numberOfPeople });
  });
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        zIndex: 100,
      }}
    >
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            maxWidth: "1800px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              width: 1440,
              fontWeight: 500,
              fontSize: "30px",
              lineHeight: "0px",
            }}
          >
            Zagreb Restaurants
          </p>
          <p
            style={{
              width: 1440,
              fontWeight: 500,
              fontSize: "50px",
              lineHeight: "40px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            Make free reservation
          </p>
        </div>

        <div>
          <ButtonToolbar
            className="mb-3"
            aria-label="Toolbar with Button groups"
          >
            <ButtonGroup
              style={{
                width: 1440,
                display: "",
                flexDirection: "row",
                maxWidth: "1800px",
              }}
              className="shadow-none"
              aria-label="First group"
            >
              <InputGroup className="me-5 " style={{ paddingLeft: "200px" }}>
                <InputGroup.Text
                  id="btnGroupAddon"
                  style={{
                    width: 240,
                    height: 50,
                    borderRadius: 10,
                    background: "#FFFFFF",
                    paddingLeft: 10,
                    border: "2px solid #FFDF00",
                  }}
                >
                  <CalendarMonthIcon></CalendarMonthIcon>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </InputGroup.Text>
              </InputGroup>
              <InputGroup className="me-5">
                <InputGroup.Text
                  id="btnGroupAddon"
                  style={{
                    width: 240,
                    height: 50,
                    borderRadius: 10,
                    background: "#FFFFFF",
                    padding: "6px, 50px, 60px, 150px",
                    border: "2px solid #FFDF00",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    boxShadow: "none",
                  }}
                >
                  <AccessTimeIcon style={{ padding: "0px" }}></AccessTimeIcon>
                  <select
                    onChange={handleTime}
                    style={{
                      height: "35px",
                      width: "190px",
                      padding: "5px",
                      borderRadius: 10,
                      border: "#FFFFFF",
                      fontSize: "18px",
                    }}
                  >
                    <option value="">Select an option</option>
                    <option value={options[0]}>{options[0]}</option>
                    <option value={options[1]}>{options[1]}</option>
                    <option value={options[2]}>{options[2]}</option>
                    <option value={options[3]}>{options[3]}</option>
                    <option value={options[4]}>{options[4]}</option>
                    <option value={options[5]}>{options[5]}</option>
                    <option value={options[6]}>{options[6]}</option>
                  </select>
                </InputGroup.Text>
              </InputGroup>
              <InputGroup className="me-5">
                <InputGroup.Text
                  style={{
                    width: 240,
                    height: 50,
                    borderRadius: 10,
                    background: "#FFFFFF",
                    padding: "6px, 50px, 60px, 150px",
                    border: "2px solid #FFDF00",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    boxShadow: "none",
                  }}
                  id="btnGroupAddon"
                >
                  <PeopleOutlineIcon></PeopleOutlineIcon>
                  <select
                    onChange={handleNumberOfPeople}
                    style={{
                      height: "35px",
                      width: "190px",
                      padding: "5px",
                      borderRadius: 10,
                      border: "#FFFFFF",
                      fontSize: "18px",
                    }}
                  >
                    <option value="">Select an option</option>
                    <option value={optionsPeople[0]}>{optionsPeople[0]}</option>
                    <option value={optionsPeople[1]}>{optionsPeople[1]}</option>
                    <option value={optionsPeople[2]}>{optionsPeople[2]}</option>
                    <option value={optionsPeople[3]}>{optionsPeople[3]}</option>
                    <option value={optionsPeople[4]}>{optionsPeople[4]}</option>
                  </select>
                </InputGroup.Text>
              </InputGroup>
              <InputGroup>
                <InputGroup.Text
                  style={{
                    width: 240,
                    height: 50,
                    borderRadius: 10,
                    background: "#FFFFFF",
                    padding: "6px, 50px, 60px, 150px",
                    border: "2px solid #FFDF00",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    boxShadow: "none",
                  }}
                  id="btnGroupAddon"
                >
                  <SearchIcon></SearchIcon>
                  <select
                    onChange={handleNumberOfPeople}
                    style={{
                      height: "35px",
                      width: "190px",
                      padding: "5px",
                      borderRadius: 10,
                      border: "#FFFFFF",
                      fontSize: "18px",
                    }}
                  >
                    <option value="">Restaurant</option>
                    <option value={restourants[0]}>{restourants[0]}</option>
                    <option value={restourants[1]}>{restourants[1]}</option>
                    <option value={restourants[2]}>{restourants[2]}</option>
                    <option value={restourants[3]}>{restourants[3]}</option>
                    <option value={restourants[4]}>{restourants[4]}</option>
                  </select>
                </InputGroup.Text>
              </InputGroup>
            </ButtonGroup>
          </ButtonToolbar>
          <Button
            className="my-4"
            size="lg"
            style={{
              height: "45px",
              width: "8rem",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontSize: "18px",
              padding: "7px",
              background: "#0BA6FF",
              borderRadius: "20px",
            }}
          >
            Let's go
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            maxWidth: "1800px",
            textAlign: "left",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "48px",
            }}
          >
            Best Croatian Food and Dishes You Need to Try
          </p>
          <p>
            When in Croatia, eat like a Croatian…and we promise you’ll be richly
            rewarded! Croatia is a gourmand’s dream, with one of the best – and
            most underrated – cuisines in Europe. With its many miles of
            coastline, seafood is an obvious highlight, but you’ll also find
            succulent meats and hearty stews across inland destinations. A
            Mediterranean climate sees Croatia produce high-quality ingredients,
            with wine, olive oil, and truffles all noted highlights.
          </p>

          <p
            style={{
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "48px",
            }}
          >
            Top places to eat tonight in Zagreb
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            maxWidth: "1800px",
            textAlign: "center",
            padding: "10px 0px",
          }}
        >
          <Card
            style={{
              width: 250,
              height: 260,
              borderRadius: 10,
              border: "solid 1.5px",
            }}
          >
            <Card.Img variant="top" src={TP_1} />
            <Card.Body
              style={{
                padding: "5px 5px",
              }}
            >
              <Card.Title
                style={{
                  fontWeight: 600,
                  fontSize: "16px",
                  textAlign: "left",
                  color: "#000000",
                  padding: "0px 5px",
                }}
              >
                Pod Zidom Bistro
              </Card.Title>
              <Card.Text
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                Zagreb : &nbsp;
                <MDBIcon fas icon="dollar-sign" />
                <MDBIcon fas icon="dollar-sign" />
                <MDBIcon fas icon="dollar-sign" />
                <MDBIcon className="text-muted" fas icon="dollar-sign" />
                &nbsp;: Croatian
                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                    textAlign: "left",
                    padding: "3px",
                  }}
                ></div>
                <div
                  className="badge text-wrap"
                  style={{
                    width: "4.5rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontSize: "12px",
                    padding: "7px",
                    background: "#0BA6FF",
                    borderRadius: "10px",
                  }}
                >
                  5 - 7 PM
                </div>
                &nbsp;
                <div
                  className="badge text-wrap"
                  style={{
                    width: "4.5rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontSize: "12px",
                    padding: "7px",
                    background: "#0BA6FF",
                    borderRadius: "10px",
                  }}
                >
                  7 - 9 PM
                </div>
                &nbsp;
                <div
                  className="badge text-wrap"
                  style={{
                    width: "4.5rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontSize: "12px",
                    padding: "7px",
                    background: "#0BA6FF",
                    borderRadius: "10px",
                  }}
                >
                  9 - 11 PM
                </div>
                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                    textAlign: "left",
                    padding: "3px",
                  }}
                ></div>
                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "19px",
                    textAlign: "left",
                    padding: "1px 0px",
                  }}
                >
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.1}
                    precision={0.5}
                    readOnly
                    style={{
                      fontSize: "30px",
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: "0px 5px",
                  }}
                >
                  <b>4.1</b> (579 reviews)
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="mx-3"
            style={{
              width: 250,
              height: 260,
              borderRadius: 10,
              border: "solid 1.5px",
            }}
          >
            <Card.Img variant="top" src={TP_2} />
            <Card.Body
              style={{
                padding: "5px 5px",
              }}
            >
              <Card.Title
                style={{
                  fontWeight: 600,
                  fontSize: "16px",
                  textAlign: "left",
                  color: "#000000",
                  padding: "0px 5px",
                }}
              >
                Torikaya Ramen Bar
              </Card.Title>
              <Card.Text
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                Zagreb : &nbsp;
                <MDBIcon fas icon="dollar-sign" />
                <MDBIcon fas icon="dollar-sign" />
                <MDBIcon className="text-muted" fas icon="dollar-sign" />
                <MDBIcon className="text-muted" fas icon="dollar-sign" />
                &nbsp;: Asian
                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                    textAlign: "left",
                    padding: "3px",
                  }}
                ></div>
                <div
                  className="badge text-wrap"
                  style={{
                    width: "4.5rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontSize: "12px",
                    padding: "7px",
                    background: "#0BA6FF",
                    borderRadius: "10px",
                  }}
                >
                  3 - 5 PM
                </div>
                &nbsp;
                <div
                  className="badge text-wrap"
                  style={{
                    width: "4.5rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontSize: "12px",
                    padding: "7px",
                    background: "#0BA6FF",
                    borderRadius: "10px",
                  }}
                >
                  5 - 7 PM
                </div>
                &nbsp;
                <div
                  className="badge text-wrap"
                  style={{
                    width: "4.5rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontSize: "12px",
                    padding: "7px",
                    background: "#0BA6FF",
                    borderRadius: "10px",
                  }}
                >
                  7 - 9 PM
                </div>
                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                    textAlign: "left",
                    padding: "3px",
                  }}
                ></div>
                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "19px",
                    textAlign: "left",
                    padding: "1px 0px",
                  }}
                >
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.2}
                    precision={0.5}
                    readOnly
                    style={{
                      fontSize: "30px",
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: "0px 5px",
                  }}
                >
                  <b>4.2</b> (789 reviews)
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: 250,
              height: 260,
              borderRadius: 10,
              border: "solid 1.5px",
            }}
          >
            <Card.Img variant="top" src={TP_3} />
            <Card.Body
              style={{
                padding: "5px 5px",
              }}
            >
              <Card.Title
                style={{
                  fontWeight: 600,
                  fontSize: "16px",
                  textAlign: "left",
                  color: "#000000",
                  padding: "0px 5px",
                }}
              >
                Sopal
              </Card.Title>
              <Card.Text
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                Zagreb : &nbsp;
                <MDBIcon fas icon="dollar-sign" />
                <MDBIcon fas icon="dollar-sign" />
                <MDBIcon className="text-muted" fas icon="dollar-sign" />
                <MDBIcon className="text-muted" fas icon="dollar-sign" />
                &nbsp;: Croatian
                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                    textAlign: "left",
                    padding: "3px",
                  }}
                ></div>
                <div
                  className="badge text-wrap"
                  style={{
                    width: "4.5rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontSize: "12px",
                    padding: "7px",
                    background: "#0BA6FF",
                    borderRadius: "10px",
                  }}
                >
                  3 - 5 PM
                </div>
                &nbsp;
                <div
                  className="badge text-wrap"
                  style={{
                    width: "4.5rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontSize: "12px",
                    padding: "7px",
                    background: "#0BA6FF",
                    borderRadius: "10px",
                  }}
                >
                  7 - 9 PM
                </div>
                &nbsp;
                <div
                  className="badge text-wrap"
                  style={{
                    width: "4.5rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontSize: "12px",
                    padding: "7px",
                    background: "#0BA6FF",
                    borderRadius: "10px",
                  }}
                >
                  9 - 11 PM
                </div>
                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                    textAlign: "left",
                    padding: "3px",
                  }}
                ></div>
                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "19px",
                    textAlign: "left",
                    padding: "1px 0px",
                  }}
                >
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.7}
                    precision={0.5}
                    readOnly
                    style={{
                      fontSize: "30px",
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: "0px 5px",
                  }}
                >
                  <b>4.7</b> (1,579 reviews)
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="mx-3"
            style={{
              width: 250,
              height: 260,
              borderRadius: 10,
              border: "solid 1.5px",
            }}
          >
            <Card.Img variant="top" src={TP_4} />
            <Card.Body
              style={{
                padding: "5px 5px",
              }}
            >
              <Card.Title
                style={{
                  fontWeight: 600,
                  fontSize: "16px",
                  textAlign: "left",
                  color: "#000000",
                  padding: "0px 5px",
                }}
              >
                SOI Fusion Bar
              </Card.Title>
              <Card.Text
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                Zagreb : &nbsp;
                <MDBIcon fas icon="dollar-sign" />
                <MDBIcon fas icon="dollar-sign" />
                <MDBIcon fas icon="dollar-sign" />
                <MDBIcon className="text-muted" fas icon="dollar-sign" />
                &nbsp;: Mexican
                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                    textAlign: "left",
                    padding: "3px",
                  }}
                ></div>
                <div
                  className="badge text-wrap"
                  style={{
                    width: "4.5rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontSize: "12px",
                    padding: "7px",
                    background: "#0BA6FF",
                    borderRadius: "10px",
                  }}
                >
                  5 - 7 PM
                </div>
                &nbsp;
                <div
                  className="badge text-wrap"
                  style={{
                    width: "4.5rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontSize: "12px",
                    padding: "7px",
                    background: "#0BA6FF",
                    borderRadius: "10px",
                  }}
                >
                  7 - 9 PM
                </div>
                &nbsp;
                <div
                  className="badge text-wrap"
                  style={{
                    width: "4.5rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontSize: "12px",
                    padding: "7px",
                    background: "#0BA6FF",
                    borderRadius: "10px",
                  }}
                >
                  9 - 11 PM
                </div>
                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                    textAlign: "left",
                    padding: "3px",
                  }}
                ></div>
                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "19px",
                    textAlign: "left",
                    padding: "1px 0px",
                  }}
                >
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                    style={{
                      fontSize: "30px",
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: "0px 5px",
                  }}
                >
                  <b>4.5</b> (987 reviews)
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Layout>
    </div>
  );
};

export default PlacesToEat;
