import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./SignIn.css";
import axios from "axios";
import { userContext } from "../../contexts/userContext";

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

const SignIn_modal = () => {
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
          {isLoggedIn && <p className="firstName">{user.firstName}</p>}
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
                    <h2 className=" text-center mb-5">Sign in</h2>
                    <p className="text-white-50 mb-3">
                      Please enter your login and password!
                    </p>
                    <div className="inputContainer">
                      <input id="form5" type="text" placeholder="Your Email" />
                      <input
                        id="form6"
                        type="text"
                        placeholder="Your Password"
                      />
                    </div>
                    <MDBCheckbox
                      name="flexCheck"
                      id="flexCheckDefault"
                      className="mb-4"
                      label="Remember password"
                    />
                    {!emailUncorrect && (
                      <div className="textColor: red">
                        Uncorrect Credentials
                      </div>
                    )}
                    <MDBBtn size="lg" onClick={getValue}>
                      Login
                    </MDBBtn>
                    <Button
                      variant="outline-dark"
                      onClick={handleClose}
                      style={{
                        marginTop: 25,
                        paddingTop: 0,
                        position: "right",
                      }}
                    >
                      Close
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
