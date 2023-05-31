import React, { FC } from "react";
import Layout from "../../components/Layout/Layout.tsx";
import BannerImage from "../../assets/Podloga.png";
import PlacesCards from "../../components/PlacesCards/PlacesCards.tsx";
import "./PlacesToVisit.css";

const PlacesToVisit = () => (
  <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <Layout>
      <h1>Top activities</h1>
      <PlacesCards></PlacesCards>
    </Layout>
  </div>
);

export default PlacesToVisit;
