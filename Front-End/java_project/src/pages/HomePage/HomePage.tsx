import React, { FC } from "react";
import styles from "./HomePage.module.css";
import Navbar from "../../components/Navbar/Navbar.tsx";

const HomePage = () => (
  <div className={styles.HomePage}>
    Home Page
    <Navbar></Navbar>
  </div>
);

export default HomePage;
