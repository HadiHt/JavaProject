import React, { FC } from "react";
import "bootstrap/dist/css/bootstrap.css";
import BannerImage from "../../assets/HomePage.png";
import "./HomePage.css";

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
      <div>cards</div>
    </div>
  </div>
);

export default HomePage;
