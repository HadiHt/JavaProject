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

const PlacesToVisit = () => (
  <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
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
          Top activities
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
              OTHER EXPERIENCE
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
                From Zagreb: Plitvice Lakes and Rastoke Day Trip
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
                <b>4.9</b> (5,456 reviews)
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
              GUIDED TOUR
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
                Zagreb: Small-Group Walking Tour with Funicular Ride
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
                <b>4.8</b> (3,123 reviews)
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
                fontSize: "16px",
                textAlign: "left",
                color: "#000000",
                padding: "0px 5px",
              }}
            >
              HOP-ON HOP-OFF TOUR
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
                Hop On Hop Off Panoramic bus - Zagreb City Tour
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
                <b>3.9</b> (2,759 reviews)
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
              DAY TRIP
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
                From Zagreb: Ljubljana and Lake Bled Tour
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
                <b>4.3</b> (657 reviews)
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
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
            lineHeight: "60px",
            paddingLeft: "0px",
          }}
        >
          Top sights in Zagreb
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
          <Card.Img variant="top" src={TSZ_1} />
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
              NIKOLA TESLA MUSEUM
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
                Zagreb: Nikola Tesla Technical Museum
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
                <b>4.3</b> (451 reviews)
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
          <Card.Img variant="top" src={TSZ_2} />
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
              LOTRŠČAK TOWER
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
                Zagreb: The Lotrščak Tower is one of the symbols of Zagreb
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
                <b>4.5</b> (478 reviews)
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
          <Card.Img variant="top" src={TSZ_3} />
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
              CATHEDRAL OF ZAGREB
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
                Zagreb: Zagreb Cathedral is Roman Catholic cathedral-church
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
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                  textAlign: "left",
                  padding: "0px 5px",
                }}
              >
                <b>4.1</b> (2,567 reviews)
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
          <Card.Img variant="top" src={TSZ_4} />
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
              ST.MARK’S CHURCH
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
                Zagreb: See the St. Marcus Church and everyday life of locals
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
                  defaultValue={4.6}
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
                <b>4.6</b> (1,367 reviews)
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Layout>
  </div>
);

export default PlacesToVisit;
