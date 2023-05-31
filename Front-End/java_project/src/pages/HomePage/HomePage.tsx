import React, { FC } from "react";
import "bootstrap/dist/css/bootstrap.css";
import BannerImage from "../../assets/HomePage.png";
import "./HomePage.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rectangle from "../../assets/Rectangle 9.png";

const HomePage = () => (
  <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
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
            border: "solid 2px",
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                fontWeight: 700,
              }}
            >
              Place to visit
              <hr />
            </Card.Title>
            <Card.Text>
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
            border: "solid 2px",
            filter: "blur",
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                fontWeight: 700,
              }}
            >
              Place to visit
              <hr />
            </Card.Title>
            <Card.Text>
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
            border: "solid 2px",
            filter: "blur",
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                fontWeight: 700,
              }}
            >
              Place to visit
              <hr />
            </Card.Title>
            <Card.Text>
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
            border: "solid 2px",
            filter: "blur",
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                fontWeight: 700,
              }}
            >
              Place to visit
              <hr />
            </Card.Title>
            <Card.Text>
              Explore the best of Zagreb! From historic landmarks to trendy
              neighborhoods, find out what to see in Zagreb with our 2023
              attractions guide.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
);

export default HomePage;
