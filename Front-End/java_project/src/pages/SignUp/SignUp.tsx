import React, { FC, useState } from "react";
import Layout from "../../components/Layout/Layout.tsx";
import BannerImage from "../../assets/Podloga.png";
import axios from "axios";

import "./SignUp.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const getValue = () => {
    var inputElement = document.getElementById("form1") as HTMLInputElement;
    var inputElement2 = document.getElementById("form2") as HTMLInputElement;
    var inputElement3 = document.getElementById("form3") as HTMLInputElement;
    var inputElement4 = document.getElementById("form4") as HTMLInputElement;
    if (
      inputElement3?.value === inputElement4?.value &&
      inputElement3?.value != "" &&
      inputElement2?.value != "" &&
      inputElement?.value != ""
    ) {
      setName(inputElement?.value);
      setEmail(inputElement2?.value);
      setPassword(inputElement3?.value);
      console.log(name);
      const word = inputElement?.value.split(" ");
      axios
        .post("http://localhost:8080/User/CreateUser", {
          firstName: word[0],
          lastname: word[1],
          email: inputElement2?.value,
          password: inputElement3?.value,
        })
        .then((res) => {
          console.log(res.data);
        });
    }
  };
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image"
      >
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5">
            <h2 className="text-center mb-5">Create an account</h2>
            <div className="inputContainersignUp">
              <input
                style={{
                  width: 400,
                  height: 45,
                  borderRadius: 10,
                  border: "solid 1px",
                  paddingLeft: 10,
                }}
                id="form1"
                type="text"
                placeholder="Your Name"
              />
              <input
                style={{
                  width: 400,
                  height: 45,
                  borderRadius: 10,
                  border: "solid 1px",
                  paddingLeft: 10,
                }}
                id="form2"
                type="text"
                placeholder="Your Email"
              />
              <input
                style={{
                  width: 400,
                  height: 45,
                  borderRadius: 10,
                  border: "solid 1px",
                  paddingLeft: 10,
                }}
                id="form3"
                type="text"
                placeholder="Your Password"
              />
              <input
                style={{
                  width: 400,
                  height: 45,
                  borderRadius: 10,
                  border: "solid 1px",
                  paddingLeft: 10,
                }}
                id="form4"
                type="text"
                placeholder="Repeat Password"
              />
            </div>
            <div className="d-flex flex-row justify-content-center mb-4"></div>
            <MDBBtn
              className="mb-4 w-100 gradient-custom-4"
              size="lg"
              onClick={getValue}
            >
              Register
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default SignUp;
