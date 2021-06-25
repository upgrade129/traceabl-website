import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Row, Col, Alert, Container, CardBody, Card } from "reactstrap";

// Redux
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

import { loginUser, apiError, socialLogin } from "../../store/actions";

//Import config
import { facebook, google } from "../../config";
import LoginContainer from "./custom-page/LoginContainer.jsx";
//axios
const axios = require("axios");
//const instance = axios.create();

require("dotenv").config();

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`,
});

const Login = (props) => {
  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    console.log("values", values);

    const details = {
      email: values.email,
      password: values.password,
    };

    console.log("values", details);

    instance
      .post(`/login/add`, details)
      .then(function (response) {
        console.log("res", response);
        localStorage.setItem("brandid", response.data.data.id);
      })
      .catch(function (error) {
        console.log("error", error);
      });

    props.loginUser(values, props.history);
  };

  const signIn = (res, type) => {
    const { socialLogin } = props;
    if (type === "google" && res) {
      const postData = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        token: res.tokenObj.access_token,
        idToken: res.tokenId,
      };
      socialLogin(postData, props.history, type);
    } else if (type === "facebook" && res) {
      const postData = {
        name: res.name,
        email: res.email,
        token: res.accessToken,
        idToken: res.tokenId,
      };
      socialLogin(postData, props.history, type);
    }
  };

  //handleGoogleLoginResponse
  const googleResponse = (response) => {
    signIn(response, "google");
  };

  //handleFacebookLoginResponse
  const facebookResponse = (response) => {
    signIn(response, "facebook");
  };

  useEffect(() => {
    document.body.className = "authentication-bg";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  });

  return (
    <React.Fragment>
      <LoginContainer>
        <h5 className="text-primary pt-3">Welcome Back !</h5>
        <p className="text-muted"> Sign in to continue to Traceabl.</p>
        <div className="mb-3">
          <AvForm
            onValidSubmit={(e, v) => {
              handleValidSubmit(e, v);
            }}
          >
            {props.error && typeof props.error === "string" ? (
              <Alert color="danger">{props.error}</Alert>
            ) : null}
            <div className="mb-3 pt-3">
              <AvField
                name="email"
                label="Email"
                value="admin@themesbrand.com"
                className="form-control"
                placeholder="Enter email"
                type="email"
                required
              />
            </div>

            <div className="mb-3 pt-3">
              <div className="float-end">
                <Link to="/forgot-password" className="text-muted">
                  Forgot password?
                </Link>
              </div>
              <AvField
                name="password"
                label="Password"
                value="123456"
                type="password"
                required
                placeholder="Enter Password"
              />
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="customControlInline"
              />
              <label className="form-check-label" htmlFor="customControlInline">
                Remember me
              </label>
            </div>

            <div className="mt-3 pt-3">
              <button
                className="btn btn-primary w-100 waves-effect waves-light"
                type="submit"
              >
                Log In
              </button>
            </div>

            <div className="mt-4 text-center pb-3">
              <p className="mb-0">
                Don't have an account ?{" "}
                <Link to="/register" className="fw-medium text-primary">
                  Signup now
                </Link>
              </p>
            </div>
          </AvForm>
        </div>
      </LoginContainer>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  const { error } = state.Login;
  return { error };
};

export default withRouter(
  connect(mapStateToProps, { loginUser, apiError, socialLogin })(Login)
);

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
  socialLogin: PropTypes.func,
};
