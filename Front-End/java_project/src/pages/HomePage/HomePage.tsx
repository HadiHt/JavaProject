import React, { FC } from "react";
import "bootstrap/dist/css/bootstrap.css";
import BannerImage from "../../assets/HomePage.png";
import "./HomePage.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rectangle from "../../assets/Rectangle 9.png";

const HomePage = () => (
  <div
    className="home"
    style={{
      backgroundImage: `url(${BannerImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        height: "100vh",
        width: "100%",
        padding: "200px 100px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          maxWidth: "324px",
          textAlign: "left",
        }}
      >
        <p style={{ fontWeight: 700, fontSize: "40px", lineHeight: "48px" }}>
          Explore Zagreb with us
        </p>
        <p style={{ fontWeight: 500, fontSize: "16px", lineHeight: "20px" }}>
          Zagreb – city with a million hearts and amazing food. Book place to
          eat here.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          maxWidth: "1800px",
          textAlign: "center",
        }}
      >
        <Card
          style={{
            width: 250,
            height: 240,
            borderRadius: 40,
            background: "rgba(255, 252, 235, 0.9)",
            opacity: 0.9,
            border: "solid 1.5px",
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "41px",
                textAlign: "center",
                color: "#000000",
              }}
            >
              Place to visit
              <hr />
            </Card.Title>
            <Card.Text
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "19px",
                textAlign: "left",
              }}
            >
              Explore the best of Zagreb! From historic landmarks to trendy
              neighborhoods, find out what to see in Zagreb with our 2023
              attractions guide.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="mx-3"
          style={{
            width: 250,
            height: 240,
            borderRadius: 40,
            backgroundColor: "rgba(255, 252, 235, 0.9)",
            opacity: 0.9,
            border: "solid 1.5px",
            filter: "blur",
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "41px",
                textAlign: "center",
                color: "#000000",
              }}
            >
              Public transport
              <hr />
            </Card.Title>
            <Card.Text
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "19px",
                textAlign: "left",
              }}
            >
              Zagreb's public transportation system is called ZET. It is
              abbreviated from Zagrebački električni tramvaj (Zagreb electric
              tram).
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="mx-3"
          style={{
            width: 250,
            height: 240,
            borderRadius: 40,
            backgroundColor: "rgba(255, 252, 235, 0.9)",
            opacity: 0.9,
            border: "solid 1.5px",
            filter: "blur",
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "41px",
                textAlign: "center",
                color: "#000000",
              }}
            >
              Place to eat
              <hr />
            </Card.Title>
            <Card.Text
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "19px",
                textAlign: "left",
              }}
            >
              The best Zagreb restaurants: our guide on where to eat in Zagreb
              for every budget and lifestyle, including locals favourite places.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="mx-3"
          style={{
            width: 250,
            height: 240,
            borderRadius: 40,
            backgroundColor: "rgba(255, 252, 235, 0.9)",
            opacity: 0.9,
            border: "solid 1.5px",
            filter: "blur",
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "41px",
                textAlign: "center",
                color: "#000000",
              }}
            >
              Place to stay
              <hr />
            </Card.Title>
            <Card.Text
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "19px",
                textAlign: "left",
              }}
            >
              Discover place zo stay at Visit Zagreb and make your next stay
              truly unique! Escape to anywhere, anytime on Visit Zagreb!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
);

export default HomePage;
