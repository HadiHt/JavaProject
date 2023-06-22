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
import { useTranslation } from "react-i18next";

const PublicTransport = () => {
  const { t } = useTranslation();

  return(
  <div
    className="home"
    style={{
      backgroundImage: `url(${BannerImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      zIndex: 100,
    }}
  >
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="box" style={{ zIndex: "0 !important" }}>
              <h1>
              {t("public.transport1")} <img src={Blue_Car}></img>
              </h1>

              <p>
              {t("public.transport2")}
                
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
              {t("public.transport3")}
              </p>
            </div>
          </div>
          <div className="col-2">
            <div className="box">
              <img src={Logo_Zet}></img>
              <Link to="https://www.zet.hr/en">
                <Button className="my-3" variant="primary" size="lg">
                {t("public.transport4")}
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
              {t("public.transport5")}
              </p>
            </div>
          </div>
          <div className="col-2">
            <div className="box">
              <img src={Cable_car_upper_town}></img>
              <Link to="https://www.infozagreb.hr/planiranje-putovanja/kretanje-po-gradu/javni-prijevoz-i-parking/uspinjaca-54a11ce6158a7">
                <Button className="my-3" variant="primary" size="lg">
                {t("public.transport4")}
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
              {t("public.transport5")}
              </p>
            </div>
          </div>
          <div className="col-2">
            <div className="box">
              <img src={hz_logo}></img>
              <Link to="https://prodaja.hzpp.hr/">
                <Button className="my-3" variant="primary" size="lg">
                {t("public.transport4")}
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
              {t("public.transport5")}
              </p>
            </div>
          </div>
          <div className="col-2">
            <div className="box">
              <img src={Sljeme_logo}></img>
              <Link to="https://zagrebcablecar.com/">
                <Button className="my-3" variant="primary" size="lg">
                {t("public.transport4")}
                </Button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
)
}

export default PublicTransport;
