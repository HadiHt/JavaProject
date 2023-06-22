import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./SignIn.css";
import axios from "axios";
import { userContext } from "../../contexts/userContext";
import { useTranslation } from "react-i18next";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import cookies from "js-cookie";

const SignIn_modal = () => {
  const { t } = useTranslation();
  const { user, setUser } = useContext(userContext);
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailUncorrect, setEmailUncorrect] = useState(true);
  const getValue = () => {
    var inputElement = document.getElementById("form5") as HTMLInputElement;
    var inputElement2 = document.getElementById("form6") as HTMLInputElement;
    if (inputElement?.value != "" && inputElement2?.value != "") {
      setEmail(inputElement?.value);
      setPassword(inputElement2?.value);

      axios
        .post("http://localhost:8080/User/User", {
          firstName: "",
          lastname: "",
          email: inputElement?.value,
          password: inputElement2?.value,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data != "") {
            setEmailUncorrect(true);
            setUser(res.data);
            SetIsLoggedIn(true);
            console.log(user);
            console.log(emailUncorrect);
            setShow(!show);
            //cokies
            cookies.set("token", res.data.token, { expires: 1 });
            console.log(cookies.get("token"));
          } else {
            setEmailUncorrect(false);
            console.log(emailUncorrect);
          }
          //console.log(inputElement?.value);
          //console.log(inputElement2?.value);
        });
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="dark mx-1" onClick={handleShow}>
        <i>
          {!isLoggedIn && <AccountCircleOutlinedIcon />}
          {isLoggedIn && (
            <p
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
              }}
              className="firstName"
            >
              {user.firstName}
            </p>
          )}
        </i>
      </Button>
      <Modal
        closeButton
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ padding: 0, margin: 0 }}
      >
        <Modal.Body style={{ padding: 0, margin: 0 }}>
          <MDBContainer fluid>
            <MDBRow className="d-flex justify-content-center align-items-center h-100">
              <MDBCol col="12" style={{ padding: 0, margin: 0 }}>
                <MDBCard
                  className="bg-white  mx-auto"
                  style={{
                    borderRadius: "0.5rem",
                    maxWidth: "500px",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <MDBCardBody
                    className="p-5 w-100 d-flex flex-column"
                    style={{ padding: 0, margin: 0 }}
                  >
                    <button
                      onClick={handleClose}
                      type="button"
                      className="btn-close"
                      data-mdb-dismiss="modal"
                      aria-label="Close"
                      style={{ float: "right" }}
                    ></button>
                    <h2 className=" text-center mb-5">{t("signIn1")}</h2>
                    <p className="text-white-50 mb-3">{t("signUp6")}</p>
                    <div className="inputContainer">
                      <input
                        style={{
                          width: 400,
                          height: 45,
                          borderRadius: 10,
                          border: "solid 1px",
                          paddingLeft: 10,
                        }}
                        id="form5"
                        type="text"
                        placeholder={t("signUp4")}
                      />
                      <input
                        style={{
                          width: 400,
                          height: 45,
                          borderRadius: 10,
                          border: "solid 1px",
                          paddingLeft: 10,
                        }}
                        id="form6"
                        type="text"
                        placeholder={t("signUp5")}
                      />
                    </div>
                    <MDBCheckbox
                      name="flexCheck"
                      id="flexCheckDefault"
                      className="mb-4"
                      label={t("signIn2")}
                    />
                    {!emailUncorrect && (
                      <div
                        style={{
                          color: "red",
                          fontFamily: "Inter",
                          fontStyle: "normal",
                          fontSize: "18px",
                          padding: "10px",
                        }}
                      >
                        {t("signIn5")}
                      </div>
                    )}
                    <MDBBtn size="lg" onClick={getValue}>
                      {t("signIn3")}
                    </MDBBtn>
                    <Button
                      variant="outline-dark"
                      onClick={handleClose}
                      style={{
                        marginTop: 25,
                        paddingTop: 0,
                      }}
                    >
                      {t("signIn4")}
                    </Button>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SignIn_modal;
