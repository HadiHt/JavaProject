import React, { FC } from "react";
import "./PublicTransport.css";
import Tramv from "../../assets/tramv.png";
import Uspinjaca_trg from "../../assets/Uspinjaca_trg.png";
import Sljeme from "../../assets/Sljeme.png";
import Train from "../../assets/Train.png";
import Logo_Zet from "../../assets/ZET_Logo.png";
import Sljeme_logo from "../../assets/Sljeme_logo.png";
import Blue_Car from "../../assets/blue_car.png";
import hz_logo from "../../assets/hz_logo.png";
import Cable_car_upper_town from "../../assets/Cable_car_upper_town.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Layout from "../../components/Layout/Layout.tsx";
import BannerImage from "../../assets/Podloga.png";
import "./PublicTransport.css";

const PublicTransport = () => (
  <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="box">
              <h1>
                Public transport in Zagreb <img src={Blue_Car}></img>
              </h1>

              <p>
                Zagrebs public transportation system is called ZET. It is
                abbreviated from Zagrebački električni tramvaj (Zagreb electric
                tram). ZET is made up primarily of buses and trams that zig zag
                throughout the city but also includes a cable car to Sljeme and
                a funicular to Gornji grad. The transportation network extends
                beyond to neighboring cities, including Zaprešić, Sesvete, and
                Velika Gorica, where the Zagreb airport is located. Zagreb is a
                very walkable city, so one could easily live or visit without a
                car. Nevertheless, with more than 19 tram lines and 117 buses,
                ZETs system is extensive. Trams and buses run 24 hours a day,
                although not all lines run all the time.
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
                unimaginable without trams, which have been operating safely
                through the streets of Zagreb for more than a century, running
                along a 120-kilometre-long track. Use the right-hand menu on
                this website to find out more about tram line routes and
                timetables.
              </p>
            </div>
          </div>
          <div className="col-2">
            <div className="box">
              <img src={Logo_Zet}></img>
              <Link to="https://www.zet.hr/en">
                <Button className="my-3" variant="primary" size="lg">
                  Schedule
                </Button>{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="row my-2">
          <div className="col-3">
            <div className="box">
              <img src={Uspinjaca_trg} width={278} height={160} />
            </div>
          </div>

          <div className="col-7">
            <div className="box">
              <p>
                Cable car for the Upper Town is the oldest means of transport of
                the organized public transport in Zagreb. It connects the Lower
                and the Upper Town every working day, on Saturdays, Sundays and
                holidays from 6:30 a.m. till 10 p.m.! It runs every ten minutes
                and the price of one ride is 0,66 € (HRK 4.97). If needed,
                passengers can order an emergency ride which costs 3,32 € (HRK
                25.01).
              </p>
            </div>
          </div>
          <div className="col-2">
            <div className="box">
              <img src={Cable_car_upper_town}></img>
              <Link to="https://www.infozagreb.hr/planiranje-putovanja/kretanje-po-gradu/javni-prijevoz-i-parking/uspinjaca-54a11ce6158a7">
                <Button className="my-3" variant="primary" size="lg">
                  Schedule
                </Button>{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="row my-2">
          <div className="col-3">
            <div className="box">
              <img src={Train} width={278} height={160} />
            </div>
          </div>

          <div className="col-7">
            <div className="box">
              <p>
                Cable car for the Upper Town is the oldest means of transport of
                the organized public transport in Zagreb. It connects the Lower
                and the Upper Town every working day, on Saturdays, Sundays and
                holidays from 6:30 a.m. till 10 p.m.! It runs every ten minutes
                and the price of one ride is 0,66 € (HRK 4.97). If needed,
                passengers can order an emergency ride which costs 3,32 € (HRK
                25.01).
              </p>
            </div>
          </div>
          <div className="col-2">
            <div className="box">
              <img src={hz_logo}></img>
              <Link to="https://prodaja.hzpp.hr/">
                <Button className="my-3" variant="primary" size="lg">
                  Schedule
                </Button>{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="row my-2">
          <div className="col-3">
            <div className="box">
              <img src={Sljeme} width={278} height={160} />
            </div>
          </div>

          <div className="col-7">
            <div className="box">
              <p>
                Cable car for the Upper Town is the oldest means of transport of
                the organized public transport in Zagreb. It connects the Lower
                and the Upper Town every working day, on Saturdays, Sundays and
                holidays from 6:30 a.m. till 10 p.m.! It runs every ten minutes
                and the price of one ride is 0,66 € (HRK 4.97). If needed,
                passengers can order an emergency ride which costs 3,32 € (HRK
                25.01).
              </p>
            </div>
          </div>
          <div className="col-2">
            <div className="box">
              <img src={Sljeme_logo}></img>
              <Link to="https://zagrebcablecar.com/">
                <Button className="my-3" variant="primary" size="lg">
                  Schedule
                </Button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
);

export default PublicTransport;
