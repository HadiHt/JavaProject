import React, { FC } from "react";
import "./PublicTransport.css";
import Tramv from "../../assets/tramv.png";
import Logo_Zet from "../../assets/ZET_Logo.png";
import Blue_Car from "../../assets/blue_car.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const PublicTransport = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="box">
          <h1>Public transport in Zagreb <img src={Blue_Car}></img></h1>
          
          <p>
            Zagrebs public transportation system is called ZET. It is
            abbreviated from Zagrebački električni tramvaj (Zagreb electric
            tram). ZET is made up primarily of buses and trams that zig zag
            throughout the city but also includes a cable car to Sljeme and a
            funicular to Gornji grad. The transportation network extends beyond
            to neighboring cities, including Zaprešić, Sesvete, and Velika
            Gorica, where the Zagreb airport is located. Zagreb is a very
            walkable city, so one could easily live or visit without a car.
            Nevertheless, with more than 19 tram lines and 117 buses, ZETs
            system is extensive. Trams and buses run 24 hours a day, although
            not all lines run all the time.
          </p>
          
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-3">
        <div className="box">
          <img src={Tramv} width={278} height={160} />
        </div>
      </div>

      <div className="col-7">
        <div className="box">
          <p>
            Transport of passengers in Zagreb as we know it today would be
            unimaginable without trams, which have been operating safely through
            the streets of Zagreb for more than a century, running along a
            120-kilometre-long track. Use the right-hand menu on this website to
            find out more about tram line routes and timetables.
          </p>
        </div>
      </div>
      <div className="col-2">
        <div className="box">
          <img src={Logo_Zet}></img>
          <Link to="https://www.zet.hr/en">
            <Button variant="primary" size="lg">
              Check schedule!
            </Button>{" "}
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default PublicTransport;
