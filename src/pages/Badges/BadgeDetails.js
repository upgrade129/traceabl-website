import React, { useState } from "react";
import { Container } from "reactstrap";

import {
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardImg,
  Collapse,
  Button,
  Modal,
} from "reactstrap";
import "./badgeStyle.css";
import { RiCloseCircleFill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

// import images
import img1 from "../../assets/images/small/img-1.jpg";

const BadgeDetails = () => {
  const [name, setName] = useState("");

  const [modal, setmodal] = useState(false);

  const [col1, setcol1] = useState(true);
  const [col2, setcol2] = useState(true);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Traceabl" breadcrumbItem="Badge Details" />
          <Row>
            <Col xl={4}>
              <Card>
                <CardImg
                  top
                  className="img-fluid"
                  src={img1}
                  alt="Card image cap"
                />

                <CardBody>
                  <CardTitle className="h4 mt-0">
                    Supply Chain Tranparency
                  </CardTitle>

                  <CardText className="">Discover the journey</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xl={8}>
              <Card>
                <CardBody>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          onClick={() => {
                            setcol1(!col1);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Overview
                        </button>
                      </h2>
                      <Collapse
                        id="collapseOne"
                        className="accordion-collapse show"
                        isOpen={col1}
                      >
                        <Card>
                          <CardBody>
                            <CardTitle className="h4">Badge Name</CardTitle>
                            <p className="card-title-desc">
                              Supply Chain Traceability
                            </p>
                            <CardTitle className="h4">Type of Badge</CardTitle>
                            <p className="card-title-desc">Supplier, Brand</p>
                          </CardBody>
                        </Card>
                      </Collapse>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button"
                          type="button"
                          onClick={() => {
                            setcol2(!col2);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          How To Claim
                        </button>
                      </h2>
                      <Collapse
                        id="collapseTwo"
                        className="accordion-collapse"
                        isOpen={col2}
                      >
                        <Card>
                          <CardBody>
                            <CardTitle className="h4">
                              Certifications Required
                            </CardTitle>
                            <p>Upload Certification *</p>

                            <Row>
                              <Col className="mt-1">
                                <span>GOT</span>
                              </Col>
                              <Col>
                                <form className="flexDisplay">
                                  <input type="file" className="form-control" />
                                  <RiCloseCircleFill
                                    color="red"
                                    className="close-icon"
                                  />
                                  <AiFillEye
                                    className="close-icon"
                                    color="black"
                                  />
                                </form>
                              </Col>
                            </Row>
                            <Row className="mt-3">
                              <Col className="mt-1">ZQ Grower Standards</Col>
                              <Col>
                                <form className="flexDisplay">
                                  <input
                                    type="file"
                                    title=""
                                    className="form-control pr-5"
                                  />
                                  <RiCloseCircleFill
                                    color="red"
                                    className="close-icon"
                                  />
                                  <AiFillEye
                                    className="close-icon"
                                    color="black"
                                  />
                                </form>
                              </Col>
                            </Row>

                            <Row className="text-primary justify-content-end mt-1">
                              <Col></Col>
                              <Col className="file_support ">
                                Max size 2 mb. Supported formats .PDF , .JPG and
                                .doc
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Collapse>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default BadgeDetails;
