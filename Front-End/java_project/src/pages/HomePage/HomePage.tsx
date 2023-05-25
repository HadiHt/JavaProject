import React, { FC } from "react";
import styles from "./HomePage.module.css";
import Navbar from "../../components/Navbar/Navbar.tsx";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className={styles.HomePage}>
    HomePage Component
    <Navbar></Navbar>
  </div>
);

export default HomePage;
