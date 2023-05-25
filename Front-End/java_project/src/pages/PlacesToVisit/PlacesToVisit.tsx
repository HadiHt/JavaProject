import React, { FC } from "react";
import styles from "./PlacesToVisit.module.css";
import PlacesCards from "../../components/PlacesCards/PlacesCards.tsx";

interface PlacesToVisitProps {}

const PlacesToVisit: FC<PlacesToVisitProps> = () => (
  <div className={styles.PlacesToVisit}>
    <PlacesCards></PlacesCards>
  </div>
);

export default PlacesToVisit;
