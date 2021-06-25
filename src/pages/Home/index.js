import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Container } from "reactstrap";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";

import {
  TabContent,
  TabPane,
  NavLink,
  NavItem,
  Nav,
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

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { getCustomers } from "../../store/e-commerce/actions";
import EcommerceProductColumns from "./EcommerceProductColumns";

import classnames from "classnames";

import BootstrapTable from "react-bootstrap-table-next";
import img1 from "../../assets/images/fashion.png";
import img2 from "../../assets/images/inventory.png";
import img3 from "../../assets/images/destination.png";
import img4 from "../../assets/images/ribbon.png";
//Import Components
import MiniWidget from "./mini-widget";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { connect } from "react-redux";
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import axios from 'axios';

const series1 = [
  {
    data: [25, 66, 41, 89, 63, 25, 44, 20, 36, 40, 54],
  },
];

const options1 = {
  fill: {
    colors: ["#5b73e8"],
  },
  chart: {
    width: 70,
    sparkline: {
      enabled: !0,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: !1,
    },
    x: {
      show: !1,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
    marker: {
      show: !1,
    },
  },
};

const series2 = [70];

const options2 = {
  fill: {
    colors: ["#34c38f"],
  },
  chart: {
    sparkline: {
      enabled: !0,
    },
  },
  dataLabels: {
    enabled: !1,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "60%",
      },
      track: {
        margin: 0,
      },
      dataLabels: {
        show: !1,
      },
    },
  },
};

const series3 = [55];

const options3 = {
  fill: {
    colors: ["#5b73e8"],
  },
  chart: {
    sparkline: {
      enabled: !0,
    },
  },
  dataLabels: {
    enabled: !1,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "60%",
      },
      track: {
        margin: 0,
      },
      dataLabels: {
        show: !1,
      },
    },
  },
};

const series4 = [
  {
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
  },
];

const options4 = {
  fill: {
    colors: ["#f1b44c"],
  },
  chart: {
    width: 70,
    sparkline: {
      enabled: !0,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: !1,
    },
    x: {
      show: !1,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
    marker: {
      show: !1,
    },
  },
};

const LoadingContainer = () => <div>Loading...</div>;


const instance = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`
  });


const Home = (props) => {
  const { customers, onGetCustomers } = props;
  const [customerList, setCustomerList] = useState([]);
  const pageOptions = {
    sizePerPage: 10,
    totalSize: 15, // replace later with size(customerList),
    custom: true,
    nextPageText: "Next",
    prePageText: "Previous",
  };
  const { SearchBar } = Search;

  const [activeTabJustify2, setactiveTabJustify2] = useState("25");

  function toggleCustomJustified2(tab) {
    if (activeTabJustify2 !== tab) {
      setactiveTabJustify2(tab);
    }
  }

  const selectedPlace = {};

  // const reports = [
  //   {
  //     id: 1,
  //     title: "Products",
  //     value: 11,
  //     prefix: "",
  //     suffix: "",
  //     decimal: 0,
  //      charttype: "bar",
  //     chartheight: 40,
  //     chartwidth: 70,
  //     series: series1,
  //     options: options1,

  //   },
  //   {
  //     id: 2,
  //     title: "Suppliers",
  //     value: 3,
  //     decimal: 0,
  //     charttype: "radialBar",
  //     chartheight: 45,
  //     chartwidth: 45,
  //     prefix: "",
  //     suffix: "",
  //     series: series2,
  //     options: options2,
  //   },
  //   {
  //     id: 3,
  //     title: "Completed Journeys",
  //     value: 6,
  //     decimal: 0,
  //     prefix: "",
  //     suffix: "",
  //     charttype: "radialBar",
  //     chartheight: 45,
  //     chartwidth: 45,
  //     series: series3,
  //     options: options3,
  //   },
  //   {
  //     id: 4,
  //     title: "Badges",
  //     value: 3,
  //     prefix: "",
  //     charttype: "bar",
  //     chartheight: 40,
  //     chartwidth: 70,
  //     series: series4,
  //     options: options4,
  //   },
  // ];


  const [prodcount, setProd_count] = useState("")
  const [suppcount, setSupp_count] = useState("")
  const [supplycount, setSupply_count] = useState("")
  
  useEffect (() => {
    var brand_id = localStorage.getItem('id')
    instance.get(`/home/count/${brand_id}`)
    .then(function (response) {
      console.log("count res",response);
      setProd_count(response.data.prod_count)
      setSupp_count(response.data.supp_count)
      setSupply_count(response.data.supply_chain)
    })
    .catch(function (error) {
      console.log("error in getting count details",error);
    });
  },[])

useEffect(() => {
    onGetCustomers();
    setCustomerList(customers);
  }, [onGetCustomers, customers]);

  useEffect(() => {
    if (!isEmpty(customers)) {
      setCustomerList(customers);
    }
  }, [customers]);

  // eslint-disable-next-line no-unused-vars
  const handleTableChange = (type, { page, searchText }) => {
    setCustomerList(
      customers.filter((customer) =>
        Object.keys(customer).some((key) =>
          customer[key].toLowerCase().includes(searchText.toLowerCase())
        )
      )
    );
  };

  const data2 = {
    columns: [
      {
        label: "Product Id",
        field: "id",
        sort: "asc",
        width: 100,
      },
      {
        label: "Product Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Last Updated",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Current Stage",
        field: "office",
        sort: "asc",
        width: 200,
      },
      {
        label: "Etho Coin Progress",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "View Details",
        field: "date",
        sort: "asc",
        width: 150,
      },
    ],
    rows: [
      {
        name: "Product 1",
        position: "7 Oct, 2019",
        office: "stiching",
        age: (
          <div className="">
            <Progress color="primary" value={25}>
              25%
            </Progress>
          </div>
        ),
        date: (
          <Button
            type="button"
            color="primary"
            className="btn-sm btn-rounded waves-effect waves-light"
          >
            View Details
          </Button>
        ),
        id: "#MD2540",
      },
      {
        name: "Product 2",
        position: "7 Oct, 2019",
        office: "washing",
        age: (
          <div className="">
            <Progress color="primary" value={25}>
              25%
            </Progress>
          </div>
        ),
        date: (
          <Button
            type="button"
            color="primary"
            className="btn-sm btn-rounded waves-effect waves-light"
          >
            View Details
          </Button>
        ),
        id: "#MD2541",
      },
      {
        name: "Product 3",
        position: "6 Oct, 2019",
        office: "dyeing",
        age: (
          <div className="">
            <Progress color="primary" value={25}>
              25%
            </Progress>
          </div>
        ),
        date: (
          <Button
            type="button"
            color="primary"
            className="btn-sm btn-rounded waves-effect waves-light"
          >
            View Details
          </Button>
        ),
        id: "#MD2542",
      },
      {
        name: "Product 4",
        position: "5 Oct, 2019",
        office: "washing",
        age: (
          <div className="">
            <Progress color="primary" value={25}>
              25%
            </Progress>
          </div>
        ),
        date: (
          <Button
            type="button"
            color="primary"
            className="btn-sm btn-rounded waves-effect waves-light"
          >
            View Details
          </Button>
        ),
        id: "#MD2543",
      },
      {
        name: "Product  5",
        position: "4 Oct, 2019",
        office: "dyeing",
        age: (
          <div className="">
            <Progress color="primary" value={25}>
              25%
            </Progress>
          </div>
        ),
        date: (
          <Button
            type="button"
            color="primary"
            className="btn-sm btn-rounded waves-effect waves-light"
          >
            View Details
          </Button>
        ),
        id: "#MD2544",
      },
    ],
  };

  const data = {
    columns: [
      {
        label: "#",
        field: "id",
        sort: "asc",
        width: 100,
      },
      {
        label: "Products",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Status",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Stages Completed",
        field: "office",
        sort: "asc",
        width: 200,
      },
      {
        label: "Progress",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Last Update",
        field: "date",
        sort: "asc",
        width: 150,
      },
    ],
    rows: [
      {
        name: "Product 1",
        position: "Completed",
        office: "0/7",
        age: (
          <div className="">
            <Progress multi>
              <Progress bar color="primary" value={15} />
              <Progress bar color="success" value={30} />
              <Progress bar color="info" value={20} />
              <Progress bar color="primary" value={10} />
            </Progress>
          </div>
        ),
        date: "1 day ago",
        id: "1",
      },
      {
        name: "Product 2",
        position: "Not Assigned",
        office: "0/7",
        age: (
          <div className="">
            <Progress multi>
              <Progress bar color="primary" value={15} />
              <Progress bar color="success" value={30} />
              <Progress bar color="info" value={20} />
              <Progress bar color="primary" value={20} />
            </Progress>
          </div>
        ),
        date: "2 days ago",
        id: "2",
      },
      {
        name: "Product 3",
        position: "Not Assigned",
        office: "2/7",
        age: (
          <div className="">
            <Progress multi>
              <Progress bar color="primary" value={15} />
              <Progress bar color="success" value={30} />
              <Progress bar color="info" value={20} />
              <Progress bar color="primary" value={20} />
            </Progress>
          </div>
        ),
        date: "5 days ago",
        id: "3",
      },
      {
        name: "Product 4",
        position: "Not Assigned",
        office: "2/7",
        age: (
          <div className="">
            <Progress multi>
              <Progress bar color="primary" value={15} />
              <Progress bar color="success" value={30} />
              <Progress bar color="info" value={20} />
              <Progress bar color="primary" value={20} />
            </Progress>
          </div>
        ),
        date: "3 days ago",
        id: "4",
      },
      {
        name: "Product  5",
        position: "Verified",
        office: "6/7",
        age: (
          <div className="">
            <Progress multi>
              <Progress bar color="primary" value={15} />
              <Progress bar color="success" value={30} />
              <Progress bar color="info" value={20} />
              <Progress bar color="primary" value={20} />
            </Progress>
          </div>
        ),
        date: "6 days ago",
        id: "5",
      },
    ],
  };

  const data1 = {
    columns: [
      {
        label: "#",
        field: "id",
        sort: "asc",
        width: 100,
      },
      {
        label: "Tasks",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Status",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Supplier Responsible",
        field: "office",
        sort: "asc",
        width: 100,
      },
      {
        label: "Date Assigned",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Last Update",
        field: "date",
        sort: "asc",
        width: 150,
      },
    ],
    rows: [
      {
        name: "Product 1",
        position: "Completed",
        office: "0/7",
        age: (
          <div className="">
            <Progress multi>
              <Progress bar color="primary" value={15} />
              <Progress bar color="success" value={30} />
              <Progress bar color="info" value={20} />
              <Progress bar color="primary" value={10} />
            </Progress>
          </div>
        ),
        date: "1 day ago",
        id: "1",
      },
      {
        name: "Product 2",
        position: "Not Assigned",
        office: "0/7",
        age: (
          <div className="">
            <Progress multi>
              <Progress bar color="primary" value={15} />
              <Progress bar color="success" value={30} />
              <Progress bar color="info" value={20} />
              <Progress bar color="primary" value={20} />
            </Progress>
          </div>
        ),
        date: "2 days ago",
        id: "2",
      },
      {
        name: "Product 3",
        position: "Not Assigned",
        office: "2/7",
        age: (
          <div className="">
            <Progress multi>
              <Progress bar color="primary" value={15} />
              <Progress bar color="success" value={30} />
              <Progress bar color="info" value={20} />
              <Progress bar color="primary" value={20} />
            </Progress>
          </div>
        ),
        date: "5 days ago",
        id: "3",
      },
      {
        name: "Product 4",
        position: "Not Assigned",
        office: "2/7",
        age: (
          <div className="">
            <Progress multi>
              <Progress bar color="primary" value={15} />
              <Progress bar color="success" value={30} />
              <Progress bar color="info" value={20} />
              <Progress bar color="primary" value={20} />
            </Progress>
          </div>
        ),
        date: "3 days ago",
        id: "4",
      },
      {
        name: "Product  5",
        position: "Verified",
        office: "6/7",
        age: (
          <div className="">
            <Progress multi>
              <Progress bar color="primary" value={15} />
              <Progress bar color="success" value={30} />
              <Progress bar color="info" value={20} />
              <Progress bar color="primary" value={20} />
            </Progress>
          </div>
        ),
        date: "6 days ago",
        id: "5",
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Traceabl" breadcrumbItem="Home" />
          {/* <h3>
          Dashboard
        </h3> */}

          <Row>
            <Col md={12}>
              <Card body>
                <CardTitle className="h3 mt-0">Welcome,</CardTitle>
                <CardText>
                  Traceabl is your one stop solution for traceability and supply
                  chain transparency. With state of the art technology, we
                  provide a myriad of services in order to help make the world a
                  better place. Supply Chain Transparency is an important step
                  of this process so make sure you add all the suppliers
                  associated with this product. Stay tuned for more exciting
                  offers and services
                </CardText>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={12}>
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
                        <span className="d-none d-sm-block">Overview</span>
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
                        <span className="d-none d-sm-block">Progress</span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  {/* <CardTitle className="h4">
                    Nav pills justify
                  </CardTitle> */}
                  {/* <p className="card-title-desc">Example of Nav pills justified</p> */}
                  {/* <Nav pills className="nav-justified bg-light">
                    <NavItem className="waves-effect waves-light">
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify2 === "25",
                        })}
                        onClick={() => {
                          toggleCustomJustified2("25")
                        }}
                      >
                        <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                        <span className="d-none d-sm-block">Overview</span>
                      </NavLink>
                    </NavItem>
                    <NavItem className="waves-effect waves-light">
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify2 === "26",
                        })}
                        onClick={() => {
                          toggleCustomJustified2("26")
                        }}
                      >
                        <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                        <span className="d-none d-sm-block">Progress</span>
                      </NavLink>
                    </NavItem>
                  </Nav> */}
                  <TabContent
                    activeTab={activeTabJustify2}
                    className="p-3 text-muted"
                  >
                    <TabPane tabId="25">
                      <Row>
                        <Col lg={3}>
                          <a href="/products" style={{ color: "black" }}>
                            <Card>
                              <CardBody>
                                <Row>
                                  <Col lg={8}>
                                    <span style={{ fontSize: "32px" }}>
                                      {" "}
                                      {prodcount}{" "}
                                    </span>
                                    <span> Products</span>
                                  </Col>
                                  <Col>
                                    <img
                                      src={img1}
                                      style={{ width: "50px" }}
                                    ></img>
                                  </Col>
                                  <p
                                    style={{ fontSize: "12px", color: "green" }}
                                  >
                                    3.21% since last week
                                  </p>
                                </Row>
                              </CardBody>
                            </Card>
                          </a>
                        </Col>
                        {/* 2 */}
                        <Col>
                          <a href="/suppliers" style={{ color: "black" }}>
                            <Card>
                              <CardBody>
                                <Row>
                                  <Col lg={8}>
                                    <span style={{ fontSize: "32px" }}>
                                      {" "}
                                      {suppcount}{" "}
                                    </span>
                                    <span> Suppliers</span>
                                  </Col>
                                  <Col>
                                    <img
                                      src={img2}
                                      style={{ width: "50px" }}
                                    ></img>
                                  </Col>
                                </Row>
                                <p style={{ fontSize: "12px", color: "red" }}>
                                  0.21% since last week
                                </p>
                              </CardBody>
                            </Card>
                          </a>
                        </Col>

                        <Col>
                          <a href="#" style={{ color: "black" }}>
                            <Card>
                              <CardBody>
                                <Row>
                                  <Col lg={8}>
                                    <span style={{ fontSize: "30px" }}>
                                      {" "}
                                      {supplycount}{" "}
                                    </span>
                                    <span>Journeys</span>
                                  </Col>
                                  <Col>
                                    <img
                                      src={img3}
                                      style={{ width: "50px" }}
                                    ></img>
                                  </Col>
                                </Row>
                                <p style={{ fontSize: "12px", color: "red" }}>
                                  5.21% since last week
                                </p>
                              </CardBody>
                            </Card>
                          </a>
                        </Col>

                        <Col>
                          <a href="/badges" style={{ color: "black" }}>
                            <Card>
                              <CardBody>
                                <Row>
                                  <Col lg={8}>
                                    <span style={{ fontSize: "32px" }}>
                                      {" "}
                                      12{" "}
                                    </span>
                                    <span> Badges</span>
                                  </Col>
                                  <Col>
                                    <img
                                      src={img4}
                                      style={{ width: "50px" }}
                                    ></img>
                                  </Col>
                                </Row>
                                <p style={{ fontSize: "12px", color: "green" }}>
                                  2.21% since last week
                                </p>
                              </CardBody>
                            </Card>
                          </a>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={8}>
                          <Card>
                            <CardBody>
                              <CardTitle>Company Location</CardTitle>
                              <CardSubtitle className="mb-3">
                                Example of google maps.Example of google
                                maps.Example of google maps.
                              </CardSubtitle>
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
                                    title={
                                      "The marker`s title will appear as a tooltip."
                                    }
                                    name={"SOMA"}
                                    position={{
                                      lat: 37.778519,
                                      lng: -122.40564,
                                    }}
                                  />
                                  <Marker name={"Dolores park"} />
                                  <InfoWindow>
                                    <div>
                                      <h1>{selectedPlace.name}</h1>
                                    </div>
                                  </InfoWindow>
                                </Map>
                              </div>
                            </CardBody>
                          </Card>
                        </Col>

                        {/* Revisit for Company preview column did not formated well */}

                        <Col lg={4}>
                          <Card>
                            <CardBody>
                              <CardTitle>Company Preview</CardTitle>
                              <CardSubtitle className="mb-3">
                                Example of google maps.
                              </CardSubtitle>
                              <div>
                                <h2>Company name</h2>
                              </div>
                              <div className="table-responsive">
                                <table className="table table-nowrap table-centered">
                                  <tbody>
                                    <tr>
                                      <td>Last Updated</td>
                                      <td>18th Jan 12:12</td>
                                    </tr>
                                    <tr>
                                      <td>Location</td>
                                      <td>Milan</td>
                                    </tr>
                                    <tr>
                                      <td>Blockchain</td>
                                      <td>pending</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div>
                                <h4>Certificates</h4>
                              </div>
                              <div className="table-responsive">
                                <table className="table table-nowrap table-centered">
                                  <tbody>
                                    <tr>
                                      <td className="fw-bold text-dark">
                                        Fare wear
                                      </td>
                                      <td>18th Jan 12:12</td>
                                    </tr>
                                    <tr>
                                      <td className="fw-bold text-dark" s>
                                        B corporation
                                      </td>
                                      <td> 18th Jan 12:12</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>

                      {/* Product table  */}
                      <Row>
                        <Card>
                          <CardTitle>Products Overview</CardTitle>
                          <CardBody>
                            <MDBDataTable
                              className="table-responsive mb-4"
                              responsive
                              striped
                              bordered
                              data={data2}
                            />
                          </CardBody>
                        </Card>
                      </Row>
                      {/* <Row>
                        <Col lg="12">
                          <PaginationProvider
                            pagination={paginationFactory(pageOptions)}
                          >
                            {({ paginationProps, paginationTableProps }) => (
                              <ToolkitProvider
                                keyField="id"
                                data={customerList || []}
                                columns={EcommerceProductColumns()}
                                bootstrap4
                                search
                              >
                                {toolkitProps => (
                                  <React.Fragment>
                                    <div>
                                      <h3>Product overview</h3><br />
                                    </div>
                                    <div>
                                      <Row>
                                        <Col sm="12" md="6">
                                          <Label>
                                            Show{" "}
                                            <Input type="select" className="custom-select custom-select-sm form-control form-control-sm form-select form-select-sm d-inline-block" style={{ width: "auto" }}>
                                              <option value="10">10</option>
                                              <option value="25">25</option>
                                              <option value="50">50</option>
                                              <option value="100">100</option>
                                            </Input>
                                          </Label>
                                        </Col>
                                        <Col sm="12" md="6">
                                          <Label className="float-end">Search: {" "}
                                            <SearchBar {...toolkitProps.searchProps} />
                                          </Label>
                                        </Col>
                                      </Row>
                                      <div className="table-responsive mb-4">

                                        // <BootstrapTable
                                        //   responsive
                                        //   remote
                                        //   bordered={false}
                                        //   striped={false}
                                        //   selectRow={{ mode: 'checkbox' }}
                                        //   classes={
                                        //     "table table-centered datatable dt-responsive nowrap table-card-list"
                                        //   }
                                        //   keyField="customerId"
                                        //   headerWrapperClasses={"bg-transparent"}
                                        //   {...toolkitProps.baseProps}
                                        //   onTableChange={handleTableChange}
                                        //   {...paginationTableProps}
                                        // />
                                        <div className="float-end">
                                          <PaginationListStandalone
                                            {...paginationProps}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </React.Fragment>
                                )}
                              </ToolkitProvider>
                            )}
                          </PaginationProvider>
                        </Col>
                      </Row> */}
                    </TabPane>
                    <TabPane tabId="26">
                      <Row>
                        <Col xl={4}>
                          <Card>
                            <CardBody>
                              <CardTitle className="h4">
                                Overall Supplier Progress
                              </CardTitle>
                              <p className="card-title-desc">
                                <b>20% Approved</b> out of 100
                              </p>
                              <div className="">
                                <Progress multi>
                                  <Progress bar color="success" value={40} />
                                  <Progress bar color="warning" value={20} />
                                  <Progress bar color="danger" value={20} />
                                  <Progress bar color="info" value={70} />
                                  <Progress bar color="dark" value={10} />
                                </Progress>
                              </div>
                              <div>
                                <Row>
                                  <Col xl="1">
                                    <i className="fas fa-circle me-2  mt-2 font-size-24 text-success"></i>
                                  </Col>
                                  <Col xl="9" className="px-3 me-2 mt-2 ">
                                    7 Approved
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xl="1">
                                    <i className="fas fa-circle me-2  mt-2 font-size-24 text-warning"></i>
                                  </Col>
                                  <Col xl="9" className="px-3 me-2 mt-2 ">
                                    2 Pending for Review
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xl="1">
                                    <i className="fas fa-circle me-2  mt-2 font-size-24 text-danger"></i>
                                  </Col>
                                  <Col xl="9" className="px-3 me-2 mt-2 ">
                                    1 Denied
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xl="1">
                                    <i className="fas fa-circle me-2  mt-2 font-size-24 text-info"></i>
                                  </Col>
                                  <Col xl="9" className="px-3 me-2 mt-2 ">
                                    21 Missing
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xl="1">
                                    <i className="fas fa-circle me-2  mt-2 font-size-24 text-dark"></i>
                                  </Col>
                                  <Col xl="9" className="px-3 me-2 mt-2 ">
                                    4 Not Having
                                  </Col>
                                </Row>
                              </div>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col xl={8}>
                          <Card>
                            <CardBody>
                              <CardTitle className="h4">
                                Overall Product Progress
                              </CardTitle>
                              <MDBDataTable
                                responsive
                                striped
                                bordered
                                data={data}
                              />
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                      <Row>
                        <Col xl={4}>
                          <Card>
                            <CardBody>
                              <CardTitle className="h4">
                                Overall Badge Progress
                              </CardTitle>
                              <hr></hr>
                              <p className="card-title-desc">
                                <b>Fair Working Conditions</b>
                              </p>
                              <p>
                                Please provide one of the following certificates
                              </p>
                              <div className="table-responsive">
                                <table className="table table-nowrap table-centered">
                                  <tbody>
                                    <tr>
                                      <td>WFTO Fair Trade Standard</td>
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-link text-dark text-decoration-none"
                                        >
                                          Certificate
                                        </button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        Worldwide Responsible Accredited
                                        Production
                                      </td>
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-link text-dark text-decoration-none"
                                        >
                                          Certificate
                                        </button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>SABOO</td>
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-link text-dark text-decoration-none"
                                        >
                                          Certificate
                                        </button>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <hr></hr>
                              <p className="card-title-desc">
                                <b>Organic Sourcing Certificates</b>
                              </p>
                              <div className="table-responsive">
                                <table className="table table-nowrap table-centered">
                                  <tbody>
                                    <tr>
                                      <td>
                                        Globle Organic Textile Standard (GOTS)
                                      </td>
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-link text-dark text-decoration-none"
                                        >
                                          Certificate
                                        </button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Organic Content Standard (OCS)</td>
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-link text-dark text-decoration-none"
                                        >
                                          Certificate
                                        </button>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <hr></hr>
                              <p className="card-title-desc">
                                <b>Code of Conduct</b>
                              </p>
                              <div className="table-responsive">
                                <table className="table table-nowrap table-centered">
                                  <tbody>
                                    <tr>
                                      <td>Code of Conduct</td>
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-link text-dark text-decoration-none"
                                        >
                                          Certificate
                                        </button>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col xl={8}>
                          <Card>
                            <CardBody>
                              <CardTitle className="h4">
                                Overall Tasks Progress
                              </CardTitle>
                              <MDBDataTable
                                responsive
                                striped
                                bordered
                                data={data1}
                              />
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Home.propTypes = {
  customers: PropTypes.array,
  onGetCustomers: PropTypes.func,
};

const mapStateToProps = ({ ecommerce }) => ({
  customers: ecommerce.customers,
});

const mapDispatchToProps = (dispatch) => ({
  onGetCustomers: () => dispatch(getCustomers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {}
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
    v: "3",
  })(Home)
);
