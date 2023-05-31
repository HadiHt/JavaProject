import React, { FC } from "react";

import BannerImage from "../../assets/Podloga.png";
import Layout from "../../components/Layout/Layout.tsx";
import "./PlacesToStay.css";

const PlacesToStay = () => (
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
            paddingLeft: "40px",
          }}
        >
          Where to stay in Zagreb
        </p>
        <p
          style={{
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "20px",
            paddingLeft: "40px",
          }}
        >
          Where to stay in Zagreb Zagreb is the capital city of Croatia and a
          great place to start your Croatian trip. If you too are visiting the
          Croatian capital city but don’t know where to stay in Zagreb, we share
          here the best areas to stay in Zagreb and the best Zagreb
          accommodations in each of these Zagreb neighborhoods.
          <br />
          <br />
          For many years, Zagreb hotels catered almost exclusively to business
          travelers, but it's not the case any longer. And while, during the
          summer, Zagreb still remains a transit town that travelers visit for a
          day or two before heading to the coast, the number of visitors who at
          least spend a night in Zagreb increases every year. And so do the
          number and choice of Zagreb accommodation.
        </p>

        <p
          style={{
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "48px",
            paddingLeft: "40px",
          }}
        >
          Top places to stay in Zagreb
        </p>
      </div>
    </Layout>
  </div>
);
export default PlacesToStay;
