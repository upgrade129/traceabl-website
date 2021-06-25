import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";

import {
  Row,
  Col,
  Card,
  CardBody,
  Table,
  CardTitle,
  CardImg,
  Media,
  Input,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Collapse,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  CardText,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
//Lightbox
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import img1 from "../../assets/images/small/img-1.jpg";

import { Link } from "react-router-dom";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { connect } from "react-redux";
import ProductDetails from "../Products/productDetails";

const selectedPlace = {};

const LoadingContainer = () => <div>Loading...</div>;
const images = [img1];

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

const TraceDetails = (props) => {
  // var dateArr = [];

  function date() {
    var a = Math.random() * (20 - 1) + 1;

    var startDate = new Date("2021-1-03");
    var endDate = new Date("2021-4-27");
    var getDateArray = function (start, end) {
      var arr = new Array();
      var dt = new Date(start);
      while (dt <= end) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + a);
      }
      return arr;
    };

    var dateArr = getDateArray(startDate, endDate);
    setDateArray(dateArr);
    console.log("date array", dateArray);

    // for (var i = 0; i < 6; i++) {
    //     console.log("<p>" + dateArr[i] + "</p>");
    // }
  }

  const [dateArray, setDateArray] = useState([]);
  console.log("date array 0 ", dateArray[0]);

  const [singlebtn1, setSinglebtn1] = useState(false);
  const [singlebtn2, setSinglebtn2] = useState(false);
  const [singlebtn3, setSinglebtn3] = useState(false);
  const [singlebtn4, setSinglebtn4] = useState(false);

  const [singlebtn5, setSinglebtn5] = useState(false);

  const [singlebtn6, setSinglebtn6] = useState(false);
  const [singlebtn7, setSinglebtn7] = useState(false);

  const [singlebtn8, setSinglebtn8] = useState(false);
  const [singlebtn9, setSinglebtn9] = useState(false);

  const [singlebtn10, setSinglebtn10] = useState(false);
  const [singlebtn11, setSinglebtn11] = useState(false);

  const [isEffects, setisEffects] = useState(false);

  const [batchid, setBatchid] = useState(props.location.batchid);
  const [prodDetail, setProdDetail] = useState([]);
  const [supplyprop, setSupplyDetail] = useState();
  const [batchDetail, setBatchDetail] = useState([]);

  useEffect(() => {
    date();

    console.log("batch_id from props", batchid);

    instance
      .get(`/prod/getProdID`)
      .then(function (response) {
        console.log("badge res", response.data.data);
        setBatchDetail(response.data.data);
      })
      .catch(function (error) {
        console.log("error", error);
      });

    getProdSuppDetails();
  }, [setProdDetail, setSupplyDetail]);

  function getProdSuppDetails() {
    instance2
      .get(`/prod/getProductById/${batchid}`)
      .then(function (response) {
        console.log("prod res", response.data.data);
        setProdDetail(response.data.data);
      })
      .catch(function (error) {
        console.log("error", error);
      });

    instance3
      .get(`/prod/supplychainById/${batchid}`)
      .then(function (response) {
        console.log("chain res", response.data.data);
        setSupplyDetail(response.data.data.stages);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }

  const OnBatchIdChange = (e) => {
    setBatchid(e.target.value);
    getProdSuppDetails();
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Traceabl" breadcrumbItem="Trace Details" />

          {isEffects ? (
            <Lightbox
              mainSrc={images[0]}
              enableZoom={false}
              onCloseRequest={() => {
                setisEffects(!isEffects);
              }}
            />
          ) : null}

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <Row>
                    <h4 className="card-title">Product Tracing </h4>
                  </Row>
                  <br />
                  <br />
                  <form>
                    <Row>
                      <Col xl={3}>Batch ID</Col>
                      <Col xl={6}>
                        <div className="col-md-10">
                          <select
                            className="form-control"
                            onChange={OnBatchIdChange}
                          >
                            <option>Select Batch ID</option>
                            {batchDetail.map((batch) => (
                              <option value={batch.batch_id}>
                                {batch.batch_id}
                              </option>
                            ))}
                            {batchid}
                          </select>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <CardTitle className="h4 mt-0">Timeline</CardTitle>
                </CardBody>
                <CardBody>
                  <div className="p-6 border-top">
                    <Row>
                      <div className="table-responsive">
                        <Table className="table mb-0">
                          <tbody>
                            <tr>
                              <td>
                                <Col className="col-7">
                                  <div className="text-center mt-3">
                                    <div className="avatar-m mx-auto mb-2">
                                      <Media className="d-flex align-items-center">
                                        <div className="me-3">
                                          <div className="avatar-l">
                                            <div
                                              className="avatar-title "
                                              style={{
                                                backgroundColor: "#a2aace",
                                              }}
                                            >
                                              TIME/DATE :{" "}
                                              {dateArray.length > 0
                                                ? dateArray[0]
                                                : ""}
                                              {/* {dateArray[0]} */}
                                            </div>
                                          </div>
                                        </div>
                                      </Media>
                                    </div>
                                    <div className="avatar-xs mx-auto mb-3">
                                      <Media className="d-flex align-items-center">
                                        <div className="me-3">
                                          <div className="avatar-xs">
                                            <div className="avatar-title rounded-circle bg-primary">
                                              01
                                            </div>
                                          </div>
                                        </div>
                                      </Media>
                                    </div>
                                    {console.log("supply props", supplyprop)}
                                    <h5 className="font-size-15">Fabre</h5>
                                    {supplyprop ? (
                                      supplyprop[0].supplier1 ==
                                      "Assign to supplier" ? (
                                        ""
                                      ) : (
                                        <Col>
                                          <label className="btn btn-primary">
                                            {supplyprop
                                              ? supplyprop[0].supplier1 ==
                                                "Assign to supplier"
                                                ? ""
                                                : supplyprop[0].supplier1
                                              : ""}
                                          </label>{" "}
                                        </Col>
                                      )
                                    ) : (
                                      ""
                                    )}
                                    {supplyprop ? (
                                      supplyprop[0].supplier2 ==
                                      "Assign to supplier" ? (
                                        ""
                                      ) : (
                                        <Col>
                                          <label className="btn btn-primary">
                                            {supplyprop
                                              ? supplyprop[0].supplier2 ==
                                                "Assign to supplier"
                                                ? ""
                                                : supplyprop[0].supplier2
                                              : ""}
                                          </label>{" "}
                                        </Col>
                                      )
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </Col>
                              </td>
                              <td>
                                <Col className="col-13">
                                  <div className="text-center mt-3">
                                    <div className="avatar-l mx-5 mb-2">
                                      <Media className="d-flex align-items-center ">
                                        <div className="me-3">
                                          <div className="avatar-l">
                                            <div
                                              className="avatar-title "
                                              style={{
                                                backgroundColor: "#a2aace",
                                              }}
                                            >
                                              TIME/DATE :{" "}
                                              {supplyprop
                                                ? supplyprop[1].timestamp
                                                : ""}
                                            </div>
                                          </div>
                                        </div>
                                      </Media>
                                    </div>
                                    <div className="avatar-xs mx-auto mb-3">
                                      <Media className="d-flex align-items-center">
                                        <div className="me-3">
                                          <div className="avatar-xs">
                                            <div className="avatar-title rounded-circle bg-primary">
                                              02
                                            </div>
                                          </div>
                                        </div>
                                      </Media>
                                    </div>
                                    <h5 className="font-size-15">Fabric</h5>
                                    {supplyprop ? (
                                      supplyprop[1].supplier1 ==
                                      "Assign to supplier" ? (
                                        ""
                                      ) : (
                                        <Col>
                                          <label className="btn btn-primary">
                                            {supplyprop
                                              ? supplyprop[1].supplier1 ==
                                                "Assign to supplier"
                                                ? ""
                                                : supplyprop[1].supplier1
                                              : ""}
                                          </label>{" "}
                                        </Col>
                                      )
                                    ) : (
                                      ""
                                    )}
                                    {supplyprop ? (
                                      supplyprop[1].supplier2 ==
                                      "Assign to supplier" ? (
                                        ""
                                      ) : (
                                        <Col>
                                          <label className="btn btn-primary">
                                            {supplyprop
                                              ? supplyprop[1].supplier2 ==
                                                "Assign to supplier"
                                                ? ""
                                                : supplyprop[1].supplier2
                                              : ""}
                                          </label>{" "}
                                        </Col>
                                      )
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </Col>
                              </td>
                              <td>
                                <Col className="col-13">
                                  <div className="text-center mt-3">
                                    <div className="avatar-l mx-5 mb-2">
                                      <Media className="d-flex align-items-center">
                                        <div className="me-3">
                                          <div className="avatar-l">
                                            <div
                                              className="avatar-title "
                                              style={{
                                                backgroundColor: "#a2aace",
                                              }}
                                            >
                                              TIME/DATE :{" "}
                                              {supplyprop
                                                ? supplyprop[2].timestamp
                                                : ""}
                                            </div>
                                          </div>
                                        </div>
                                      </Media>
                                    </div>
                                    <div className="avatar-xs mx-auto mb-3">
                                      <Media className="d-flex align-items-center">
                                        <div className="me-3">
                                          <div className="avatar-xs">
                                            <div className="avatar-title rounded-circle bg-primary">
                                              03
                                            </div>
                                          </div>
                                        </div>
                                      </Media>
                                    </div>
                                    <h5 className="font-size-15">
                                      Trims and accessories
                                    </h5>

                                    {supplyprop ? (
                                      supplyprop[2].supplier1 ==
                                      "Assign to supplier" ? (
                                        ""
                                      ) : (
                                        <Col>
                                          <label className="btn btn-primary">
                                            {supplyprop
                                              ? supplyprop[2].supplier1 ==
                                                "Assign to supplier"
                                                ? ""
                                                : supplyprop[2].supplier1
                                              : ""}
                                          </label>{" "}
                                        </Col>
                                      )
                                    ) : (
                                      ""
                                    )}
                                    {supplyprop ? (
                                      supplyprop[2].supplier2 ==
                                      "Assign to supplier" ? (
                                        ""
                                      ) : (
                                        <Col>
                                          <label className="btn btn-primary">
                                            {supplyprop
                                              ? supplyprop[2].supplier2 ==
                                                "Assign to supplier"
                                                ? ""
                                                : supplyprop[2].supplier2
                                              : ""}
                                          </label>{" "}
                                        </Col>
                                      )
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </Col>
                              </td>
                              <td>
                                <Col className="col-13">
                                  <div className="text-center mt-3">
                                    <div className="avatar-m mx-auto mb-2">
                                      <Media className="d-flex align-items-center">
                                        <div className="me-3">
                                          <div className="avatar-l">
                                            <div
                                              className="avatar-title "
                                              style={{
                                                backgroundColor: "#a2aace",
                                              }}
                                            >
                                              TIME/DATE :{" "}
                                              {supplyprop
                                                ? supplyprop[3].timestamp
                                                : ""}
                                            </div>
                                          </div>
                                        </div>
                                      </Media>
                                    </div>
                                    <div className="avatar-xs mx-auto mb-3">
                                      <Media className="d-flex align-items-center">
                                        <div className="me-3">
                                          <div className="avatar-xs">
                                            <div className="avatar-title rounded-circle bg-primary">
                                              04
                                            </div>
                                          </div>
                                        </div>
                                      </Media>
                                    </div>
                                    <h5 className="font-size-15">Dyeing</h5>
                                    {supplyprop ? (
                                      supplyprop[3].supplier1 ==
                                      "Assign to supplier" ? (
                                        ""
                                      ) : (
                                        <Col>
                                          <label className="btn btn-primary">
                                            {supplyprop
                                              ? supplyprop[3].supplier1 ==
                                                "Assign to supplier"
                                                ? ""
                                                : supplyprop[3].supplier1
                                              : ""}
                                          </label>{" "}
                                        </Col>
                                      )
                                    ) : (
                                      ""
                                    )}
                                    {supplyprop ? (
                                      supplyprop[3].supplier2 ==
                                      "Assign to supplier" ? (
                                        ""
                                      ) : (
                                        <Col>
                                          <label className="btn btn-primary">
                                            {supplyprop
                                              ? supplyprop[3].supplier2 ==
                                                "Assign to supplier"
                                                ? ""
                                                : supplyprop[3].supplier2
                                              : ""}
                                          </label>{" "}
                                        </Col>
                                      )
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </Col>
                              </td>

                              <td>
                                <Col className="col-13">
                                  <div className="text-center mt-3">
                                    <div className="avatar-m mx-auto mb-2">
                                      <Media className="d-flex align-items-center">
                                        <div className="me-3">
                                          <div className="avatar-l">
                                            <div
                                              className="avatar-title "
                                              style={{
                                                backgroundColor: "#a2aace",
                                              }}
                                            >
                                              TIME/DATE :{" "}
                                              {supplyprop
                                                ? supplyprop[4].timestamp
                                                : ""}
                                            </div>
                                          </div>
                                        </div>
                                      </Media>
                                    </div>
                                    <div className="avatar-xs mx-auto mb-3">
                                      <Media className="d-flex align-items-center">
                                        <div className="me-3">
                                          <div className="avatar-xs">
                                            <div className="avatar-title rounded-circle bg-primary">
                                              05
                                            </div>
                                          </div>
                                        </div>
                                      </Media>
                                    </div>
                                    <h5 className="font-size-15">CMT</h5>
                                    {supplyprop ? (
                                      supplyprop[4].supplier1 ==
                                      "Assign to supplier" ? (
                                        ""
                                      ) : (
                                        <Col>
                                          <label className="btn btn-primary">
                                            {supplyprop
                                              ? supplyprop[4].supplier1 ==
                                                "Assign to supplier"
                                                ? ""
                                                : supplyprop[4].supplier1
                                              : ""}
                                          </label>{" "}
                                        </Col>
                                      )
                                    ) : (
                                      ""
                                    )}
                                    {supplyprop ? (
                                      supplyprop[4].supplier2 ==
                                      "Assign to supplier" ? (
                                        ""
                                      ) : (
                                        <Col>
                                          <label className="btn btn-primary">
                                            {supplyprop
                                              ? supplyprop[4].supplier2 ==
                                                "Assign to supplier"
                                                ? ""
                                                : supplyprop[4].supplier2
                                              : ""}
                                          </label>{" "}
                                        </Col>
                                      )
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </Col>
                              </td>

                              <td>
                                <Col className="col-10">
                                  <div className="text-center mt-2">
                                    <div className="avatar-l mx-5 mb-2">
                                      <Media className="d-flex align-items-center">
                                        <div className="me-3">
                                          <div className="avatar-l">
                                            <div
                                              className="avatar-title "
                                              style={{
                                                backgroundColor: "#a2aace",
                                              }}
                                            >
                                              TIME/DATE :{" "}
                                              {supplyprop
                                                ? supplyprop[5].timestamp
                                                : ""}
                                            </div>
                                          </div>
                                        </div>
                                      </Media>
                                    </div>
                                    <div className="avatar-xs mx-auto mb-3">
                                      <Media className="d-flex align-items-center">
                                        <div className="me-3">
                                          <div className="avatar-xs">
                                            <div className="avatar-title rounded-circle bg-primary">
                                              06
                                            </div>
                                          </div>
                                        </div>
                                      </Media>
                                    </div>
                                    <h5 className="font-size-15">Processing</h5>

                                    {supplyprop ? (
                                      supplyprop[5].supplier1 ==
                                      "Assign to supplier" ? (
                                        ""
                                      ) : (
                                        <Col>
                                          <label className="btn btn-primary">
                                            {supplyprop
                                              ? supplyprop[5].supplier1 ==
                                                "Assign to supplier"
                                                ? ""
                                                : supplyprop[5].supplier1
                                              : ""}
                                          </label>{" "}
                                        </Col>
                                      )
                                    ) : (
                                      ""
                                    )}
                                    {supplyprop ? (
                                      supplyprop[5].supplier2 ==
                                      "Assign to supplier" ? (
                                        ""
                                      ) : (
                                        <Col>
                                          <label className="btn btn-primary">
                                            {supplyprop
                                              ? supplyprop[5].supplier2 ==
                                                "Assign to supplier"
                                                ? ""
                                                : supplyprop[5].supplier2
                                              : ""}
                                          </label>{" "}
                                        </Col>
                                      )
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </Col>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Row>
                  </div>

                  {/* <div className="p-4 border-top">
                    <Row>
                      <Col className="col-3">
                        <div className="text-center mt-3">
                          <div className="avatar-xs mx-auto mb-3">
                            <Media className="d-flex align-items-center">
                              <div className="me-3">
                                <div className="avatar-xs">
                                  <div className="avatar-title rounded-circle bg-primary">
                                    01
                                    </div>
                                </div>
                              </div>
                            </Media>
                          </div>
                          <h5 className="font-size-15">Fabre</h5>
                          <Col>
                            <label className="btn btn-primary">AMC</label>{" "}
                          </Col>
                          {/* <Col className="mt-2" >
                              <Dropdown
                                isOpen={singlebtn5}
                                toggle={() => setSinglebtn5(!singlebtn5)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Choose Source{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-right">
                                  <DropdownItem>Source 1</DropdownItem>
                                  <DropdownItem>Source 2</DropdownItem>
                                  <DropdownItem>Source 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col> //

                        </div>
                      </Col>
                      <Col className="col-3">
                        <div className="text-center mt-3">
                          <div className="avatar-xs mx-auto mb-3">
                            <Media className="d-flex align-items-center">
                              <div className="me-3">
                                <div className="avatar-xs">
                                  <div className="avatar-title rounded-circle bg-primary">
                                    02
                                    </div>
                                </div>
                              </div>
                            </Media>
                          </div>
                          <h5 className="font-size-15">Fabric</h5>
                          <Row>
                            <Col>
                              <label className="btn btn-primary">Shell Fabric</label>{" "}
                            </Col>
                            <Col>
                              <label className="btn btn-primary">AMC</label>{" "}
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <label className="btn btn-primary">Interlining</label>{" "}
                            </Col>
                            <Col>
                              <label className="btn btn-primary">Hameem</label>{" "}
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col className="col-3">
                        <div className="text-center mt-3">
                          <div className="avatar-xs mx-auto mb-3">
                            <Media className="d-flex align-items-center">
                              <div className="me-3">
                                <div className="avatar-xs">
                                  <div className="avatar-title rounded-circle bg-primary">
                                    03
                                    </div>
                                </div>
                              </div>
                            </Media>
                          </div>
                          <h5 className="font-size-15">Trims and accessories</h5>
                          <Row>
                            <Col>
                              <label className="btn btn-primary">Buttons</label>{" "}
                            </Col>
                            <Col>
                              <label className="btn btn-primary">YKK</label>{" "}
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <label className="btn btn-primary">Rivets</label>{" "}
                            </Col>
                            <Col>
                              <label className="btn btn-primary">Hameem</label>{" "}
                            </Col>
                          </Row>




                        </div>
                      </Col>

                      <Col className="col-3">
                        <div className="text-center mt-3">
                          <div className="avatar-xs mx-auto mb-3">
                            <Media className="d-flex align-items-center">
                              <div className="me-3">
                                <div className="avatar-xs">
                                  <div className="avatar-title rounded-circle bg-primary">
                                    04
                                    </div>
                                </div>
                              </div>
                            </Media>
                          </div>
                          <h5 className="font-size-15">Dyeing</h5>                          
                            <Col>
                              <label className="btn btn-primary">AMC</label>{" "}
                            </Col>
                        </div>
                      </Col>
                    </Row>

                  </div> */}
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <CardTitle className="h4 mt-0">Details</CardTitle>
                </CardBody>
                <CardBody>
                  <Row>
                    <Col xl={6}>
                      <Row className="mb-4">
                        <Col xl="4">
                          <b>Timestamp</b>
                        </Col>
                        <Col xl="8">03 May</Col>
                      </Row>
                      <Row className="mb-4">
                        <Col xl="4">
                          <b>Degital Signature</b>
                        </Col>
                        <Col xl="8">{prodDetail.signature}</Col>
                      </Row>
                      <Row className="mb-4">
                        <Col xl="4">
                          <b>Product Details</b>
                        </Col>
                        <Col xl="8">
                          Product Name: {prodDetail.prod_name}
                          <br />
                          Product ID: # {prodDetail.batch_id}
                          <br />
                          Last Updated Date: 07 Oct 2020,
                          <br />
                          Category: Jeans
                          <br />
                          Season: {prodDetail.season}
                          <br />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col xl="4">
                          <b>Etho Coin Progress</b>
                        </Col>
                        <Col xl="8">{prodDetail.etho_coin}%</Col>
                      </Row>
                      {/* <Row className="mb-4" >
                                                <Col xl="4"><b>Transport Details</b></Col>
                                                <Col xl="8">
                                                    <Row>
                                                        <Col xl="5">
                                                            <CardImg top className="img-fluid" src={img1} alt="Card image cap" />
                                                        </Col>
                                                        <Col xl="4"><Link><i className="fas fa-download me-1 "></i>Download</Link></Col>
                                                        <Col xl="3"><Link className="image-popup-no-margins" to="#">
                                                            <span onClick={() => { setisEffects(true) }}><i className="fas fa-eye me-1 "></i> View</span>
                                                        </Link>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row> */}
                      <Row className="mb-4">
                        <Col xl="4">
                          <b>Photo</b>
                        </Col>
                        <Col xl="8">
                          <Row>
                            <Col xl="5">
                              <CardImg
                                top
                                className="img-fluid"
                                src={
                                  prodDetail.images ? prodDetail.images[0] : ""
                                }
                                alt="Card image cap"
                              />
                            </Col>
                            <Col xl="4">
                              <Link>
                                <i className="fas fa-download me-1"></i>Download
                              </Link>
                            </Col>
                            <Col xl="3">
                              <Link className="image-popup-no-margins" to="#">
                                <span
                                  onClick={() => {
                                    setisEffects(true);
                                  }}
                                >
                                  <i className="fas fa-eye me-1 "></i> View
                                </span>
                              </Link>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    {/* <Col xl={6}>
                      <Row>
                        <Col lg={12}>
                          <h5>Location</h5><br />
                          <div
                            id="gmaps-markers"
                            className="gmaps"
                            style={{ position: "relative" }}
                          >
                            <Map
                              google={props.google}
                              style={{ width: "100%", height: "100%" }}
                              zoom={14}
                            >
                              <Marker
                                title={"The marker`s title will appear as a tooltip."}
                                name={"SOMA"}
                                position={{ lat: 37.778519, lng: -122.40564 }}
                              />
                              <Marker name={"Dolores park"} />
                              <InfoWindow>
                                <div>
                                  <h1>{selectedPlace.name}</h1>
                                </div>
                              </InfoWindow>
                            </Map>
                          </div>
                        </Col>
                      </Row>
                    </Col> */}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

//export default TraceDetails;

export default connect()(
  GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
    v: "3",
  })(TraceDetails)
);
