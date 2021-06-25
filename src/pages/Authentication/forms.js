import React, { useEffect, useState } from "react";
import { Row, Col, CardBody, Card, Alert, Container, Modal } from "reactstrap";
import { useHistory } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

const axios = require("axios");
//const instance = axios.create();

require("dotenv").config();

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`,
});

const CompanyInfo = (props) => {
  const history = useHistory();

  const handleValidSubmit = (event, values) => {
    const details = {
      companyEmail: values.email,
      companyName: values.companyName,
      companyAddress: values.officialCompanyAddress,
      companyPhone: values.companyTelephoneNumber,
      companyWebsite: values.companyWebsite,
    };
    history.push({
      pathname: "/formsec",
      state: {
        companyInfo: details,
        registrationInfo: props.location.state.registrationInfo,
      },
    });
  };

  useEffect(() => {
    document.body.className = "authentication-bg";
    return function cleanup() {
      document.body.className = "";
    };
  });

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card>
                <CardBody className="p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Brand On boarding Form</h5>
                    {/* <p className="text-muted">Get your Traceabl account now.</p> */}
                  </div>
                  <div className="p-2 mt-4">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v);
                      }}
                    >
                      <div className="mb-3">
                        <AvField
                          id="email"
                          name="email"
                          label="Company Email ID"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="companyName"
                          label="Name of Company "
                          type="text"
                          required
                          placeholder="Enter username"
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="officialCompanyAddress"
                          label="Official Company Address "
                          type="text"
                          required
                          placeholder="Enter Official Company Address"
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="companyTelephoneNumber"
                          label="Company Telephone Number"
                          type="text"
                          required
                          placeholder="Enter Company Telephone Number"
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="companyWebsite"
                          label="Company Website"
                          type="text"
                          required
                          placeholder="Enter Company Website"
                        />
                      </div>
                      <div className="mt-3 text-end">
                        <button
                          className="btn btn-primary w-sm waves-effect waves-light"
                          type="submit"
                          data-toggle="modal"
                          data-target=".bs-example-modal-xl"
                        >
                          Next
                        </button>
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

export default CompanyInfo;
