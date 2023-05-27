import React, { FC } from "react";
import styles from "./PlacesToVisit.module.css";
import PlacesCards from "../../components/PlacesCards/PlacesCards.tsx";

const PlacesToVisit = () => (
  <div className={styles.PlacesToVisit}>
    Places to Visit Welcome
    <PlacesCards></PlacesCards>
  </div>
);

export default PlacesToVisit;
