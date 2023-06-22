import React, { FC } from "react";
import Card from "react-bootstrap/Card";
import BannerImage from "../../assets/Podloga.png";
import Layout from "../../components/Layout/Layout.tsx";
import "./PlacesToStay.css";
import TPS_1 from "../../assets/TPS_1.png";
import TPS_2 from "../../assets/TPS_2.png";
import TPS_3 from "../../assets/TPS_3.png";
import TPS_4 from "../../assets/TPS_4.png";
import { MDBIcon } from "mdb-react-ui-kit";
import Rating from "@mui/material/Rating";
import { useTranslation } from "react-i18next";

const PlacesToStay = () => {
  const { t } = useTranslation();

  return(
  <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
const PlacesToStay = () => (
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
            paddingLeft: "40px",
          }}
        >
          {t("places.to.stay.1")}
        </p>
        <p
          style={{
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "20px",
            paddingLeft: "40px",
          }}
        >
          {t("places.to.stay.text1")}
          <br />
          <br />
          
        </p>
          {t("places.to.stay.text2")}
        <p
          style={{
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "48px",
            paddingLeft: "40px",
          }}
        >
         {t("places.to.stay.2")}
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
          padding: "10px 35px",
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
          <Card.Img variant="top" src={TPS_1} />
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
              Hotel Dubrovnik
            </Card.Title>
            <Card.Text>
              <p
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "3px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                0,2 km To City Zagreb
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "3px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                Gajeva 1, 10000 Zagreb
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "3px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                <b>$160</b>
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
                  defaultValue={4.3}
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
                <b>4.3</b> (488 reviews)
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
          <Card.Img variant="top" src={TPS_2} />
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
              Hotel Jadran
            </Card.Title>
            <Card.Text>
              <p
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "3px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                1,1 km To City Zagreb
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "3px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                Vlaška ul. 50, 10000 Zagreb
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "3px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                <b>$169</b>
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
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                <b>4.2</b> (645 reviews)
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
          <Card.Img variant="top" src={TPS_3} />
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
              Garden Hotel
            </Card.Title>
            <Card.Text>
              <p
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "3px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                2,3 km To City Zagreb
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "3px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                Vodnikova ul. 14, 10000 Zagreb
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "3px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                <b>$145</b>
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
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                <b>4.5</b> (512 reviews)
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
          <Card.Img variant="top" src={TPS_4} />
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
              Hotel International
            </Card.Title>
            <Card.Text>
              <p
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "3px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                3,5 km To City Zagreb
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "3px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                Miramarska ul. 24, 10000 Zagreb
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "3px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                <b>$130</b>
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
                  defaultValue={3.9}
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
                <b>3.9</b> (205 reviews)
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Layout>
  </div>
)};
export default PlacesToStay;
