import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Row, Col, CardBody, Card, Container } from "reactstrap";
import { storage } from "../../firbaseConfig";
import { useHistory } from "react-router-dom";

import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from "availity-reactstrap-validation";

const CompanyLegal = (props) => {
  const history = useHistory();
  const [vatURL, setVatUrl] = useState();
  const [addressURL, setAddressURL] = useState();
  const [idURL, setidURL] = useState();

  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    const details = {
      legalStatus: values.legalStatus,
      companyType: values.companyType,
      directorName: values.NameofPropietor,
      vat: vatURL,
      addressProof: addressURL,
      idProof: idURL,
    };
    history.push({
      pathname: "/formthr",
      state: {
        companyInfo: props.location.state.companyInfo,
        registrationInfo: props.location.state.registrationInfo,
        companyLegalInfo: details,
      },
    });
  };

  useEffect(() => {
    console.log(props.location.state.companyInfo);
    document.body.className = "authentication-bg";
    // remove classname when component will unmount
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
                    <h5 className="text-primary">Legal Proofs & Details </h5>
                    {/* <p className="text-muted">Get your Traceabl account now.</p> */}
                  </div>
                  <div className="p-2 mt-4">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v);
                      }}
                    >
                      <Card>
                        <CardBody className="p-6">
                          <Col lg={12}>
                            <div className="mb-3">
                              <label htmlFor="password">
                                Company VAT Number
                              </label>
                              <input
                                className="form-control"
                                type="file"
                                onChange={(e) => {
                                  let file = e.target.files[0];
                                  if (file) {
                                    const uploadVat = storage
                                      .ref(`test/${file.name}`)
                                      .put(file);
                                    uploadVat.on(
                                      "state_changed",
                                      (snapShot) => {
                                        const progress =
                                          (snapShot.bytesTransferred /
                                            snapShot.totalBytes) *
                                          100;
                                        console.log(`Progress: ${progress}%`);
                                      },
                                      (err) => {
                                        console.log(err.code);
                                      },
                                      async () => {
                                        const downloadURL =
                                          await uploadVat.snapshot.ref.getDownloadURL();
                                        setVatUrl(downloadURL);
                                      }
                                    );
                                  }
                                }}
                              />
                            </div>
                          </Col>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardBody className="p-6">
                          <Col lg={12}>
                            <div className="mb-3">
                              <label htmlFor="password">Proof of Address</label>
                              <input
                                className="form-control"
                                type="file"
                                onChange={(e) => {
                                  let file = e.target.files[0];
                                  if (file) {
                                    const uploadAddress = storage
                                      .ref(`test/${file.name}`)
                                      .put(file);
                                    uploadAddress.on(
                                      "state_changed",
                                      (snapShot) => {
                                        const progress =
                                          (snapShot.bytesTransferred /
                                            snapShot.totalBytes) *
                                          100;
                                        console.log(`Progress: ${progress}%`);
                                      },
                                      (err) => {
                                        console.log(err.code);
                                      },
                                      async () => {
                                        const downloadURL =
                                          await uploadAddress.snapshot.ref.getDownloadURL();
                                        setAddressURL(downloadURL);
                                      }
                                    );
                                  }
                                }}
                              />
                            </div>
                          </Col>
                        </CardBody>
                      </Card>
                      {/* if is needed dropdown */}
                      {/* <Card>
                        <CardBody className="p-6">
                          <div
                            className="mb-3"
                            style={{ borderColor: "black" }}
                          >
                            <AvField
                              type="select"
                              name="select"
                              label="Legal Status "
                            >
                              <option>Sole Proprietor</option>
                              <option>Registered Patnership</option>
                              <option>Pvt. Ltd. Company</option>
                              <option>Public Ltd.Company</option>
                              <option>Other</option>
                            </AvField>
                          </div>
                        </CardBody>
                      </Card> */}
                      <Card>
                        <CardBody className="p-6">
                          <div
                            className="mb-3"
                            style={{ borderColor: "black" }}
                          ></div>
                          <div className="mb-3">
                            <AvRadioGroup
                              name="legalStatus"
                              label="Legal Status "
                              required
                            >
                              <AvRadio
                                label="Public Ltd.Company"
                                value="PublicLtdCompany"
                              />
                              <AvRadio
                                label="Sole Proprietor"
                                value="Sole Proprietor"
                              />
                              <AvRadio
                                label="Registered Patnership"
                                value="RegisteredPatnership"
                              />
                              <AvRadio
                                label="Pvt. Ltd. Company"
                                value="PvtLtdCompany"
                              />
                            </AvRadioGroup>
                          </div>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardBody className="p-6">
                          <div
                            className="mb-3"
                            style={{ borderColor: "black" }}
                          ></div>
                          <div className="mb-3">
                            <AvRadioGroup
                              name="companyType"
                              label="Type of Company (Trade Classification )"
                              required
                            >
                              <AvRadio label="Brand" value="Brand" />
                              <AvRadio
                                label="Manufacturer"
                                value="Manufacturer"
                              />
                              <AvRadio label="Retailer" value="Retailer" />
                              <AvRadio label="Supplier" value="Supplier" />
                            </AvRadioGroup>
                          </div>
                        </CardBody>
                      </Card>

                      <Card>
                        <CardBody className="p-6">
                          <div className="mb-3">
                            <AvField
                              name="NameofPropietor"
                              label="Name of Propietor / Partner / Director"
                            />
                          </div>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardBody className="p-6">
                          <Col lg={12}>
                            <div className="mb-3">
                              <label htmlFor="companyTelephoneNumber">
                                Identity Proof of Propietor
                              </label>
                              <input
                                className="form-control"
                                type="file"
                                onChange={(e) => {
                                  let file = e.target.files[0];
                                  if (file) {
                                    const uploadID = storage
                                      .ref(`test/${file.name}`)
                                      .put(file);
                                    uploadID.on(
                                      "state_changed",
                                      (snapShot) => {
                                        const progress =
                                          (snapShot.bytesTransferred /
                                            snapShot.totalBytes) *
                                          100;
                                        console.log(`Progress: ${progress}%`);
                                      },
                                      (err) => {
                                        console.log(err.code);
                                      },
                                      async () => {
                                        const downloadURL =
                                          await uploadID.snapshot.ref.getDownloadURL();
                                        setidURL(downloadURL);
                                      }
                                    );
                                  }
                                }}
                              />
                            </div>
                          </Col>
                        </CardBody>
                      </Card>

                      <div className="mt-3 text-end">
                        <button
                          className="btn btn-primary w-sm waves-effect waves-light"
                          type="submit"
                          data-toggle="modal"
                          data-target=".bs-example-modal-xl"
                          disabled={!vatURL || !addressURL || !idURL}
                        >
                          Register
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

export default CompanyLegal;
