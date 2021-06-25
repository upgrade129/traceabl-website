import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Row, Col, CardBody, Card, Alert, Container, Modal } from "reactstrap";
import { storage, firebase } from "../../firbaseConfig";
import { useHistory } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// action
import {
  registerUser,
  apiError,
  registerUserFailed,
} from "../../store/actions";

// Redux
import { connect } from "react-redux";
const axios = require("axios");
//const instance = axios.create();

require("dotenv").config();

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`,
});

const Register = (props) => {
  const history = useHistory();
  const [modal_xlarge, setmodal_xlarge] = useState(false);
  const [modal_fullscreen, setmodal_fullscreen] = useState(false);

  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    const company_details = {
      company_email: props.location.state.companyInfo.companyEmail,
      company_name: props.location.state.companyInfo.companyName,
      company_address: props.location.state.companyInfo.companyAddress,
      company_phone: props.location.state.companyInfo.companyPhone,
      company_website: props.location.state.companyInfo.companyWebsite,
      vat_number: props.location.state.companyLegalInfo.vat,
      address_proof: props.location.state.companyLegalInfo.addressProof,
      legal_status: props.location.state.companyLegalInfo.legalStatus,
      typeof_company: props.location.state.companyLegalInfo.companyType,
      nameof_director: props.location.state.companyLegalInfo.directorName,
      proofof_director: props.location.state.companyLegalInfo.idProof,
      contact_name: values.contactName,
      contact_designation: values.contactDesignation,
      contact_email: values.contactEmail,
      contact_phone: values.contactPhone,
    };
    const company_signup = {
      email: props.location.state.registrationInfo.email,
      password: props.location.state.registrationInfo.password,
      termsCondition: props.location.state.termsCondition,
    };

    instance
      .post(`/register/add`, company_signup)
      .then(function (response) {
        console.log("res", response);
      })
      .catch(function (error) {
        console.log("error", error);
      });

    instance
      .post(`/register/info`, company_details)
      .then(function (response) {
        console.log("res", response);
      })
      .catch(function (error) {
        console.log("error", error);
      });
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        props.location.state.registrationInfo.email,
        props.location.state.registrationInfo.password
      )
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });

    props.registerUser(values);
  };

  useEffect(() => {
    props.apiError("");
    document.body.className = "authentication-bg";
    return function cleanup() {
      document.body.className = "";
    };
  });

  function tog_xlarge() {
    setmodal_xlarge(!modal_xlarge);
    removeBodyCss();
  }

  function tog_fullscreen() {
    setmodal_fullscreen(!modal_fullscreen);
    removeBodyCss();
  }

  function removeBodyCss() {
    document.body.classList.add("no_padding");
  }

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card>
                <CardBody className="p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary"> Contact Person Details</h5>
                    {/* <p className="text-muted">Get your Traceabl account now.</p> */}
                  </div>
                  <div className="p-2 mt-4">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v);
                      }}
                    >
                      {props.user && props.user ? (
                        <Alert color="success">
                          Register User Successfully
                        </Alert>
                      ) : null}

                      {props.registrationError && props.registrationError ? (
                        <Alert color="danger">{props.registrationError}</Alert>
                      ) : null}

                      <Card>
                        <CardBody className="p-6">
                          <div className="mb-3">
                            <AvField
                              name="contactName"
                              label="Name of Contact Person"
                              type="text"
                              required
                            />
                          </div>
                        </CardBody>
                      </Card>

                      <Card>
                        <CardBody className="p-6">
                          <div className="mb-3">
                            <AvField
                              name="contactDesignation"
                              label="Designation of Contact Person "
                              type="text"
                              required
                            />
                          </div>
                        </CardBody>
                      </Card>

                      <Card>
                        <CardBody className="p-6">
                          <div className="mb-3">
                            <AvField
                              id="email"
                              name="contactEmail"
                              label="Email ID of Contact Person "
                              className="form-control"
                              placeholder="Enter email"
                              type="email"
                              required
                            />
                          </div>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardBody className="p-6">
                          <div className="mb-3">
                            <AvField
                              name="contactPhone"
                              label="Phone Number of Contact Person"
                              type="text"
                              required
                            />
                          </div>
                        </CardBody>
                      </Card>
                      <div className="mt-3 text-end">
                        <button
                          onClick={() => {
                            tog_xlarge();
                          }}
                          className="btn btn-primary w-sm waves-effect waves-light"
                          type="submit"
                          data-toggle="modal"
                          data-target=".bs-example-modal-xl"
                        >
                          Register
                        </button>
                        <Modal
                          size="xl"
                          isOpen={modal_xlarge}
                          toggle={() => {
                            tog_fullscreen();
                          }}
                        >
                          <div className="modal-header">
                            <h5
                              className="modal-title mt-0"
                              id="myExtraLargeModalLabel"
                            >
                              “Successfully Registered"
                            </h5>
                            <button
                              onClick={() => {
                                setmodal_xlarge(false);
                              }}
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                        </Modal>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>© {new Date().getFullYear()} Traceabl.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func,
  registerUserFailed: PropTypes.func,
  registrationError: PropTypes.any,
  user: PropTypes.any,
};

const mapStatetoProps = (state) => {
  const { user, registrationError, loading } = state.Account;
  return { user, registrationError, loading };
};

export default connect(mapStatetoProps, {
  registerUser,
  apiError,
  registerUserFailed,
})(Register);
