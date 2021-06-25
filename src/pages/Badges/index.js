import React, { useState, useEffect } from "react"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import { isEmpty } from "lodash"
import BootstrapTable from "react-bootstrap-table-next"
import { MDBDataTable } from "mdbreact"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  Container,
  Row,
  Col,
  Label,
  Input,
  Card,
  CardBody,
  NavItem,
  CardTitle,
  CardText,
  Nav,
  NavLink,
  TabContent,
  TabPane,
  CardImg
} from "reactstrap"
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator"

import classnames from "classnames"
import { Link } from "react-router-dom"

// import images
import img5 from "../../assets/images/small/img-5.jpg"
import imgC from "../../assets/images/small/C.jpg"
import imgE from "../../assets/images/small/badge/supply.jpg"
import imgI from "../../assets/images/small/badge/Innovation in R&D.jpg"
import imgR from "../../assets/images/small/R.jpg"
import imgd1 from "../../assets/images/small/badge/better waste management.jpg"
import imgd2 from "../../assets/images/small/badge/low water usage.jpg"
import imgd3 from "../../assets/images/small/badge/Sustainable packaging.jpg"
import imgfair from "../../assets/images/small/badge/Fair payment.jpg"
import imgorgmat from  "../../assets/images/small/badge/organic materials.jpg"

import imgsm from  "../../assets/images/small/badge/Sustainable materials.jpg"
import imgsi from  "../../assets/images/small/badge/Sustainable infrastucture.jpg"
import imgc from  "../../assets/images/small/badge/Circularity.jpeg"
import imghaz from  "../../assets/images/small/badge/No hazardous chemicals.jpg"
import imgcn from  "../../assets/images/small/badge/Carbon neutral.jpg"



//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { getCustomers } from "../../store/e-commerce/actions"
import EcommerceCustomerColumns from "./EcommerceCustomerColumns"


const Badges = props => {

  const data = {
    columns: [
      {
        label: "Badges",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Type",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Badge Status",
        field: "office",
        sort: "asc",
        width: 200,
      },
      {
        label: "Badge Progress",
        field: "age",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Fair Working Conditons",
        position: "Supplier,Brand",
        office: <a href="#" style={{color:"green"}}>Clamied</a>,
        age: <a href="#" style={{color:"green"}}>100%</a>,
      },
      {
        name: "Innovation",
        position: "Supplier,Brand",
        office: <a href="#" style={{color:"red"}}>Not Clamied</a>,
        age: <a href="#" style={{color:"#fd8c00"}}>65%</a>,
      },
      {
        name: "Recycle",
        position: "Supplier,Brand",
        office: <a href="#" style={{color:"green"}}>Clamied</a>,
        age: <a href="#" style={{color:"green"}}>100%</a>,
      },
      {
        name: "Low Water Usage",
        position: "Supplier,Brand",
        office: <a href="#" style={{color:"red"}}>Not Clamied</a>,
        age: <a href="#" style={{color:"#fd8c00"}}>45%</a>,
      },
      {
        name: "Sustainable Package",
        position: "Supplier,Brand",
        office: <a href="#" style={{color:"green"}}>Clamied</a>,
        age: <a href="#" style={{color:"green"}}>100%</a>,
      },
      {
        name: "Waste Management",
        position: "Supplier,Brand",
        office: <a href="#" style={{color:"red"}}>Not Clamied</a>,
        age: <a href="#" style={{color:"#fd8c00"}}>85%</a>,
      }
    ],
  }

  const [activeTabJustify2, setactiveTabJustify2] = useState("25")

  function toggleCustomJustified2(tab) {
    if (activeTabJustify2 !== tab) {
      setactiveTabJustify2(tab)
    }
  }

  const { customers, onGetCustomers } = props
  const [customerList, setCustomerList] = useState([])
  const pageOptions = {
    sizePerPage: 10,
    totalSize: 15, // replace later with size(customerList),
    custom: true,
    nextPageText: 'Next',
    prePageText: 'Previous',
  }
  const { SearchBar } = Search

  useEffect(() => {
    onGetCustomers()
    setCustomerList(customers)
  }, [onGetCustomers, customers])

  useEffect(() => {
    if (!isEmpty(customers)) {
      setCustomerList(customers)
    }
  }, [customers])

  // eslint-disable-next-line no-unused-vars
  const handleTableChange = (type, { page, searchText }) => {
    setCustomerList(
      customers.filter(customer =>
        Object.keys(customer).some(key =>
          customer[key].toLowerCase().includes(searchText.toLowerCase())
        )
      )
    )
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Traceabl" breadcrumbItem="Your Badges" />

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
                          toggleCustomJustified2("25")
                        }}
                      >
                        <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                        <span className="d-none d-sm-block">Widget View</span>
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
                        <span className="d-none d-sm-block">Table View</span>
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
                  
                    
                  <TabContent activeTab={activeTabJustify2} className="p-3 text-muted">

                    <TabPane tabId="25">
                      <Row>

                        <Col lg={4}>
                          <Card>
                            <Link to="/badgedetails">
                              <CardImg top  className="img-fluid" src={imgC} alt="Card image cap" style={{height:"250px",objectFit:'cover'}}/>
                            </Link>
                            <CardBody>
                              <CardTitle className="text-center h4 mt-0">Fair Working Conditons</CardTitle>
                              <CardText className="text-center">
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content.
                              </CardText>
                              <CardText>
                                <small>
                                  Supplier, Brand
                                </small>
                                <small className="float-end text-success">
                                  <i className="fas fa-check me-1"></i>Claimed
                                  </small>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Col>

                        <Col lg={4}>
                          <Card>
                            <Link to="/badgedetails">
                              <CardImg top className="img-fluid" src={imgE} alt="Card image cap" style={{height:"250px",objectFit:'cover'}}/>
                            </Link>
                            <CardBody>
                              <CardTitle className="text-center h4 mt-0">Supply Chain Transparency</CardTitle>
                              <CardText className="text-center">
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content.
                              </CardText>
                              <CardText>
                                <small>
                                  Supplier, Brand
                                </small>
                                <small className="float-end text-success">
                                  <i className="fas fa-check me-1"></i>Claimed
                                  </small>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Col>

                        <Col lg={4}>
                          <Card>
                            <Link to="/badgedetails">
                              <CardImg top className="img-fluid" src={imgI} alt="Card image cap" style={{height:"250px",objectFit:'cover'}}/>
                            </Link>
                            <CardBody>
                              <CardTitle className="text-center h4 mt-0">Innovation in R&D</CardTitle>
                              <CardText className="text-center">
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content.
                              </CardText>
                              <CardText>
                                <small>
                                  Supplier, Brand
                                </small>
                                <small className="float-end text-success">
                                <i className="fas fa-times me-1" style={{color:"red"}}>   Not Claimed</i>
                                  </small>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Col>

                        <Col lg={4}>
                          <Card>
                            <Link to="/badgedetails">
                              <CardImg top className="img-fluid" src={imgR} alt="Card image cap" style={{height:"250px",objectFit:'cover'}}/>
                            </Link>
                            <CardBody>
                              <CardTitle className="text-center h4 mt-0">Recycle</CardTitle>
                              <CardText className="text-center">
                              Discover the journey from its origin to final product.
                              </CardText>
                              <CardText>
                                <small>
                                  Supplier, Brand
                                </small>
                                <small className="float-end text-success">
                                  <i className="fas fa-check me-1"></i>Claimed
                                  </small>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Col>


                        <Col lg={4}>
                          <Card > 
                            <Link to="/badgedetails">
                              <CardImg top className="img-fluid" src={imgd2} alt="Card image cap" style={{height:"250px",objectFit:'cover'}}/>
                            </Link>
                            <CardBody>
                              <CardTitle className="text-center h4 mt-0">Low Water Usage</CardTitle>
                              <CardText className="text-center">
                              Discover the journey from its origin to final product.
                              </CardText>
                              <CardText>
                                <small>
                                  Supplier, Brand
                                </small>
                                <small className="float-end text-success">
                                <i className="fas fa-times me-1" style={{color:"red"}}>   Not Claimed</i>
                                  </small>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Col>


                        <Col lg={4}>
                          <Card>
                            <Link to="/badgedetails">
                              <CardImg top className="img-fluid" src={imgd3} alt="Card image cap" style={{height:"250px",objectFit:'cover'}}/>
                            </Link>
                            <CardBody>
                              <CardTitle className="text-center h4 mt-0">Sustainable Package</CardTitle>
                              <CardText className="text-center">
                               Discover the journey from its origin to final product.
                               </CardText>
                              <CardText>
                                <small>
                                  Supplier, Brand
                                </small>
                                <small className="float-end text-success">
                                  <i className="fas fa-check me-1"></i>Claimed
                                  </small>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                      <Row>
                      <Col lg={4}>
                          <Card>
                            <Link to="/badgedetails">
                              <CardImg top className="img-fluid" src={imgd1} alt="Card image cap"  style={{height:"350px",objectFit:'cover'}} />
                            </Link>
                            <CardBody>
                              <CardTitle className="text-center h4 mt-0">Waste Management</CardTitle>
                              <CardText className="text-center">
                               Discover the journey from its origin to final product.
                               </CardText>
                              <CardText>
                                <small>
                                  Supplier, Brand
                                </small>
                                <small className="float-end text-success">
                                  <i className="fas fa-times me-1" style={{color:"red"}}>   Not Claimed</i>
                                  </small>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg={4}>
                          <Card>
                            <Link to="/badgedetails">
                              <CardImg top className="img-fluid" src={imgfair} alt="Card image cap"  style={{height:"350px",objectFit:'cover'}} />
                            </Link>
                            <CardBody>
                              <CardTitle className="text-center h4 mt-0">Fair payment</CardTitle>
                              <CardText className="text-center">
                               Discover the journey from its origin to final product.
                               </CardText>
                              <CardText>
                                <small>
                                  Supplier, Brand
                                </small>
                                <small className="float-end text-success">
                                  <i className="fas fa-times me-1" style={{color:"red"}}>   Not Claimed</i>
                                  </small>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg={4}>
                          <Card>
                            <Link to="/badgedetails">
                              <CardImg top className="img-fluid" src={imgorgmat} alt="Card image cap"  style={{height:"350px",objectFit:'cover'}}/>
                            </Link>
                            <CardBody>
                              <CardTitle className="text-center h4 mt-0">Organic Materials</CardTitle>
                              <CardText className="text-center">
                               Discover the journey from its origin to final product.
                               </CardText>
                              <CardText>
                                <small>
                                  Supplier, Brand
                                </small>
                                <small className="float-end text-success">
                                  <i className="fas fa-times me-1" style={{color:"red"}}>   Not Claimed</i>
                                  </small>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Col>

                      </Row>
                      <Row>
                      <Col lg={4}>
                          <Card>
                            <Link to="/badgedetails">
                              <CardImg top className="img-fluid" src={imghaz} alt="Card image cap"  style={{height:"250px",objectFit:'cover'}}/>
                            </Link>
                            <CardBody>
                              <CardTitle className="text-center h4 mt-0">No hazardous chemicals</CardTitle>
                              <CardText className="text-center">
                               Discover the journey from its origin to final product.
                               </CardText>
                              <CardText>
                                <small>
                                  Supplier, Brand
                                </small>
                                <small className="float-end text-success">
                                  <i className="fas fa-times me-1" style={{color:"red"}}>   Not Claimed</i>
                                  </small>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg={4}>
                          <Card>
                            <Link to="/badgedetails">
                              <CardImg top className="img-fluid" src={imgsi} alt="Card image cap"  style={{height:"250px",objectFit:'cover'}}/>
                            </Link>
                            <CardBody>
                              <CardTitle className="text-center h4 mt-0">Sustainable infrastucture</CardTitle>
                              <CardText className="text-center">
                               Discover the journey from its origin to final product.
                               </CardText>
                              <CardText>
                                <small>
                                  Supplier, Brand
                                </small>
                                <small className="float-end text-success">
                                  <i className="fas fa-times me-1" style={{color:"red"}}>   Not Claimed</i>
                                  </small>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg={4}>
                          <Card>
                            <Link to="/badgedetails">
                              <CardImg top className="img-fluid" src={imgc} alt="Card image cap"  style={{height:"250px",objectFit:'cover'}}/>
                            </Link>
                            <CardBody>
                              <CardTitle className="text-center h4 mt-0">Circularity</CardTitle>
                              <CardText className="text-center">
                               Discover the journey from its origin to final product.
                               </CardText>
                              <CardText>
                                <small>
                                  Supplier, Brand
                                </small>
                                <small className="float-end text-success">
                                  <i className="fas fa-times me-1" style={{color:"red"}}>   Not Claimed</i>
                                  </small>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                      <Row>
                      <Col lg={4}>
                          <Card>
                            <Link to="/badgedetails">
                              <CardImg top className="img-fluid" src={imgsm} alt="Card image cap"  style={{height:"250px",objectFit:'cover'}}/>
                            </Link>
                            <CardBody>
                              <CardTitle className="text-center h4 mt-0">Sustainable materials</CardTitle>
                              <CardText className="text-center">
                               Discover the journey from its origin to final product.
                               </CardText>
                              <CardText>
                                <small>
                                  Supplier, Brand
                                </small>
                                <small className="float-end text-success">
                                  <i className="fas fa-times me-1" style={{color:"red"}}>   Not Claimed</i>
                                  </small>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg={4}>
                          <Card >
                            <Link to="/badgedetails">
                              <CardImg top className="img-fluid" src={imgcn} alt="Card image cap"  style={{height:"250px",objectFit:'cover'}}/>
                            </Link>
                            <CardBody>
                              <CardTitle className="text-center h4 mt-0">Carbon neutral</CardTitle>
                              <CardText className="text-center">
                               Discover the journey from its origin to final product.
                               </CardText>
                              <CardText>
                                <small>
                                  Supplier, Brand
                                </small>
                                <small className="float-end text-success">
                                  <i className="fas fa-times me-1" style={{color:"red"}}>   Not Claimed</i>
                                  </small>
                              </CardText>
                            </CardBody>
                          </Card>
                        </Col>
                        
                      </Row>
                      
                    </TabPane>

                    <TabPane tabId="26">                      
                     <Card>
                        <CardBody>
                          <MDBDataTable className="table-responsive mb-4" responsive striped bordered data={data} />
                        </CardBody>
                      </Card>

                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Badges.propTypes = {
  customers: PropTypes.array,
  onGetCustomers: PropTypes.func,
}

const mapStateToProps = ({ ecommerce }) => ({
  customers: ecommerce.customers,
})

const mapDispatchToProps = dispatch => ({
  onGetCustomers: () => dispatch(getCustomers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Badges)
//export default Badges;