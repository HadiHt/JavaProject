import React, { useState } from "react";
import styles from "./PlacesCards.module.css";
import PlaceCard from "../PlaceCard/PlaceCard.tsx";

function PlacesCards() {
  const [myArray, setMyArray] = useState([1, 2, 3, 4]);
  const x = myArray.map((element, index) => {
    const card = index;
    return (
      <div>
        <PlaceCard element={card}></PlaceCard>
      </div>
    );
  });

  return <div className={styles.PlacesCards}>{x}</div>;
}

export default PlacesCards;
