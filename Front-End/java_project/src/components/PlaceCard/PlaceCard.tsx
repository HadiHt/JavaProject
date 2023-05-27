import React, { FC } from "react";
import styles from "./PlaceCard.module.css";

const PlaceCard = ({ element }) => {
  const index_number = element;
  return <div>{index_number} </div>;
};

export default PlaceCard;
