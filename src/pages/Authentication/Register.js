import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { SocialIcons } from "../Authentication/custom-page/loginContainerStyles.js";
import RegisterContainer from "./custom-page/LoginContainer.jsx";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const axios = require("axios");

require("dotenv").config();

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`,
});

const Register = () => {
  const history = useHistory();
  const [accept, setAccept] = useState(false);

  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    if (accept) {
      const details = {
        email: values.email,
        password: values.password,
        role: "brand",
        termsCondition: "true",
      };
      history.push({
        pathname: "/forms",
        state: { registrationInfo: details },
      });
    } else {
      return <alert>Please accept the terms and conditions</alert>;
    }
  };

  useEffect(() => {
    document.body.className = "authentication-bg";
    return function cleanup() {
      document.body.className = "";
    };
  });

  return (
    <React.Fragment>
      <RegisterContainer>
        <h5 className="text-primary">Register Now</h5>
        <p className="text-muted">Get your Traceabl account now</p>
        <div className="mb-3">
          <AvForm className="form-horizontal">
            <AvField
              id="email"
              name="email"
              label="Email"
              className="form-control"
              placeholder="Enter email"
              type="email"
              required
            />
            <div className="mb-3 mt-2">
              <AvField
                name="username"
                label="Username"
                type="text"
                required
                placeholder="Enter Username"
              />
            </div>
            <div className="mb-3">
              <AvField
                name="password"
                label="Password"
                type="password"
                required
                placeholder="Enter Password"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label px-2" htmlFor="terms">
                I accept the terms and conditions
              </label>
            </div>
            <div className="mt-3 text-end">
              <button
                className="btn btn-primary w-sm waves-effect waves-light"
                type="submit"
                data-toggle="modal"
                data-target=".bs-example-modal-xl"
              >
                Register
              </button>
            </div>
            <div className="mt-2 text-center">
              <h6>Sign in With</h6>
              <SocialIcons>
                <FaFacebook className="facebook" />
                <AiFillTwitterCircle className="twitter" />
                <AiFillGoogleCircle className="google" />
              </SocialIcons>
            </div>

            <div className="mt-3 text-center">
              <p className="text-muted mb-0">
                Already have an account ?{" "}
                <Link to="/login" className="fw-medium text-primary">
                  Login
                </Link>
              </p>
            </div>
          </AvForm>
        </div>
      </RegisterContainer>
    </React.Fragment>
  );
};

export default Register;
