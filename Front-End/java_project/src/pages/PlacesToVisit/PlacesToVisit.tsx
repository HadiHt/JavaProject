import React, { FC } from "react";
import Layout from "../../components/Layout/Layout.tsx";
import BannerImage from "../../assets/Podloga.png";
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";
import TA_1 from "../../assets/TA_1.png";
import TA_2 from "../../assets/TA_2.png";
import TA_3 from "../../assets/TA_3.png";
import TA_4 from "../../assets/TA_4.png";
import TSZ_1 from "../../assets/TSZ_1.png";
import TSZ_2 from "../../assets/TSZ_2.png";
import TSZ_3 from "../../assets/TSZ_3.png";
import TSZ_4 from "../../assets/TSZ_4.png";
import { useTranslation } from "react-i18next";

const PlacesToVisit = () => {
  const { t } = useTranslation();

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
            textAlign: "left",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "48px",
              paddingLeft: "0px",
            }}
          >
            {t("places.to.visit1")}
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
            padding: "0px 0px",
          }}
        >
          <Card
            className="me-4"
            style={{
              width: 250,
              height: 260,
              borderRadius: 10,
              border: "solid 1.5px",
            }}
          >
            <Card.Img variant="top" src={TA_1} />
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
                {t("places.to.visit2")}
              </Card.Title>
              <Card.Text>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    textAlign: "left",
                    padding: "0px 5px",
                  }}
                >
                  {t("places.to.visit3")}
                </p>

                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    textAlign: "left",
                    padding: "0px 0px",
                  }}
                >
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.9}
                    precision={0.5}
                    readOnly
                    style={{
                      fontSize: "30px",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    textAlign: "left",
                    padding: "0px 5px",
                  }}
                >
                  <b>4.9</b> (5,456 {t("places.to.visit4")})
                </div>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="me-4"
            style={{
              width: 250,
              height: 260,
              borderRadius: 10,
              border: "solid 1.5px",
            }}
          >
            <Card.Img variant="top" src={TA_2} />
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
                {t("places.to.visit5")}
              </Card.Title>
              <Card.Text>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    textAlign: "left",
                    padding: "0px 5px",
                  }}
                >
                  {t("places.to.visit6")}
                </p>

                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    textAlign: "left",
                    padding: "0px 0px",
                  }}
                >
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.8}
                    precision={0.5}
                    readOnly
                    style={{
                      fontSize: "30px",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    textAlign: "left",
                    padding: "0px 5px",
                  }}
                >
                  <b>4.8</b> (4,589 {t("places.to.visit7")})
                </div>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="me-4"
            style={{
              width: 250,
              height: 260,
              borderRadius: 10,
              border: "solid 1.5px",
            }}
          >
            <Card.Img variant="top" src={TA_3} />
            <Card.Body
              style={{
                padding: "5px 5px",
              }}
            >
              <Card.Title
                style={{
                  fontWeight: 600,
                  fontSize: "14px",
                  textAlign: "left",
                  color: "#000000",
                  padding: "0px 5px",
                }}
              >
                {t("places.to.visit8")}
              </Card.Title>
              <Card.Text>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    textAlign: "left",
                    padding: "0px 5px",
                  }}
                >
                  {t("places.to.visit9")}
                </p>

                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    textAlign: "left",
                    padding: "0px 0px",
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
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    textAlign: "left",
                    padding: "0px 5px",
                  }}
                >
                  <b>4.7</b> (3,987 {t("places.to.visit7")})
                </div>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="me-4"
            style={{
              width: 250,
              height: 260,
              borderRadius: 10,
              border: "solid 1.5px",
            }}
          >
            <Card.Img variant="top" src={TA_4} />
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
                {t("places.to.visit10")}
              </Card.Title>
              <Card.Text>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    textAlign: "left",
                    padding: "0px 5px",
                  }}
                >
                  {t("places.to.visit11")}
                </p>

                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    textAlign: "left",
                    padding: "0px 0px",
                  }}
                >
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.9}
                    precision={0.5}
                    readOnly
                    style={{
                      fontSize: "30px",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "20px",
                    textAlign: "left",
                    padding: "0px 5px",
                  }}
                >
                  <b>4.9</b> (6,543 {t("places.to.visit7")})
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Layout>
    </div>
  );
};

export default PlacesToVisit;
