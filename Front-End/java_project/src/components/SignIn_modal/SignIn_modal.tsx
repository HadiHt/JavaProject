import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

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

function SignIn_modal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark mx-1" onClick={handleShow}>
        <i>
          <AccountCircleOutlinedIcon />
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

                    <MDBInput
                      wrapperClass="mb-4 w-100"
                      label="Email address"
                      id="formControlLg"
                      type="email"
                      size="lg"
                    />
                    <MDBInput
                      wrapperClass="mb-4 w-100"
                      label="Password"
                      id="formControlLg"
                      type="password"
                      size="lg"
                    />

                    <MDBCheckbox
                      name="flexCheck"
                      id="flexCheckDefault"
                      className="mb-4"
                      label="Remember password"
                    />

                    <MDBBtn size="lg">Login</MDBBtn>

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
    </>
  );
}

export default SignIn_modal;
