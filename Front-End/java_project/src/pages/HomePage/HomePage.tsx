import React, { FC } from "react";
import "bootstrap/dist/css/bootstrap.css";
import BannerImage from "../../assets/HomePage.png";
import "./HomePage.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rectangle from "../../assets/Rectangle 9.png";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return(
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
          {t("sentence1")}
        </p>
        <p style={{ fontWeight: 500, fontSize: "16px", lineHeight: "20px" }}>
          {t("sentence2")}
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
              {t("sentence3")}
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
              {t("sentence4")}
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
              {t("sentence5")}
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
              {t("sentence6")}
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
              {t("sentence7")}
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
              {t("sentence8")}
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
              {t("sentence9")}
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
              {t("sentence10")}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
)};

export default HomePage;
