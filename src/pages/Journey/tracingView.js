import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import ImageModal from "./ImageModal/ImageModal";

import {
  TabContent,
  TabPane,
  NavLink,
  NavItem,
  Nav,
  Table,
  Row,
  Col,
  Button,
  Label,
  Input,
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardSubtitle,
  Progress,
} from "reactstrap";

import classnames from "classnames";

import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Path } from "leaflet";
import imgC from "../../assets/images/small/C.jpg";
// import ProductDetails from "./ProductDetails";
import ProductDetails from "./ProductDetails/ProductDetails";

const axios = require("axios");

require("dotenv").config();

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`,
});

const instance2 = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`,
});

const instance3 = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`,
});

const Tracing = (props) => {
  const [batchDetail, setBatchDetail] = useState([]);
  const [batchid, setBatchid] = useState("");
  const [prodDetail, setProdDetail] = useState([]);
  const [supplyDetail, setSupplyDetail] = useState([]);

  const [activeTabJustify2, setactiveTabJustify2] = useState("25");

  function toggleCustomJustified2(tab) {
    if (activeTabJustify2 !== tab) {
      setactiveTabJustify2(tab);
    }
  }

  // useEffect(() => {
  //   instance
  //     .get(`/prod/getProdID`)
  //     .then(function (response) {
  //       console.log("badge res", response.data.data);
  //       setBatchDetail(response.data.data);
  //     })
  //     .catch(function (error) {
  //       console.log("error", error);
  //     });
  // }, [setBatchDetail, setProdDetail, setSupplyDetail]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Traceabl" breadcrumbItem="Publish Your Journey" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <Row>
                    <h4 className="card-title">Product 1</h4>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="6" className="justify-content-md-center">
              <Card>
                <CardBody>
                  <Nav pills>
                    <NavItem className="waves-effect waves-light">
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify2 === "25",
                        })}
                        onClick={() => {
                          toggleCustomJustified2("25");
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="fas fa-home"></i>
                        </span>
                        <span className="d-none d-sm-block">ALL</span>
                      </NavLink>
                    </NavItem>
                    <NavItem className="waves-effect waves-light">
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify2 === "26",
                        })}
                        onClick={() => {
                          toggleCustomJustified2("26");
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="far fa-user"></i>
                        </span>
                        <span className="d-none d-sm-block">Brand</span>
                      </NavLink>
                    </NavItem>
                    <NavItem className="waves-effect waves-light">
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify2 === "27",
                        })}
                        onClick={() => {
                          toggleCustomJustified2("27");
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="far fa-user"></i>
                        </span>
                        <span className="d-none d-sm-block">Manufactures</span>
                      </NavLink>
                    </NavItem>
                    <NavItem className="waves-effect waves-light">
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify2 === "28",
                        })}
                        onClick={() => {
                          toggleCustomJustified2("28");
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="far fa-user"></i>
                        </span>
                        <span className="d-none d-sm-block">Suppliers</span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  {/* <ProductDetails /> */}
                  <ProductDetails 
                  prod_details = {props.location.prod_details}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">{/* <ImageModal /> */}</Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Tracing;
