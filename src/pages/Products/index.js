import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { MDBDataTable } from "mdbreact"
import {
  Container,
  Row,
  Col,
  Button,  
  Modal,
  ModalHeader,
  ModalBody,
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

import classnames from "classnames"

// import images
import img1 from "../../assets/images/small/img-1.jpg"
import imgPlus from "../../assets/images/small/plus.png"
import editBtn from "../../assets/images/edit.png"
import delBtn from "../../assets/images/delete.png"


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { getCustomers } from "../../store/e-commerce/actions"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import { getInstanceByDom } from "echarts"

const axios = require('axios');


require('dotenv').config();

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`
  });

  const instance2 = axios.create({
    baseURL: `${process.env.REACT_APP_APIKEY}`
    });

const Products = props => {

  const columns = [
    {
      label: "Product Id",
      field: "pid",
      sort: "asc",
      width: 150,
    },
    {
      label: "Poduct Name",
      field: "pname",
      sort: "asc",
      width: 270,
    },
    {
      label: "Updated date",
      field: "date",
      sort: "asc",
      width: 200,
    },
    {
      label: "Current stage",
      field: "currentstage",
      sort: "asc",
      width: 100,
    },
    {
      label: "Category",
      field: "category",
      sort: "asc",
      width: 150,
    },
    {
      label: "Etho coin",
      field: "etho",
      sort: "asc",
      width: 100,
    },
    {
      label: "Update",
      field: "update",
      width: 100,
    },
    {
      label: "Delete",
      field: "delete",
      width: 100,
    },
    
  ]

  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Position",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Office",
        field: "office",
        sort: "asc",
        width: 200,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Start date",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "Salary",
        field: "salary",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Tiger Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: "61",
        date: "2011/04/25",
        salary: "$320",
      },
      {
        name: "Garrett Winters",
        position: "Accountant",
        office: "Tokyo",
        age: "63",
        date: "2011/07/25",
        salary: "$170",
      },
      {
        name: "Ashton Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: "66",
        date: "2009/01/12",
        salary: "$86",
      },
      {
        name: "Cedric Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433",
      },
      {
        name: "Airi Satou",
        position: "Accountant",
        office: "Tokyo",
        age: "33",
        date: "2008/11/28",
        salary: "$162",
      },
      {
        name: "Brielle Williamson",
        position: "Integration Specialist",
        office: "New York",
        age: "61",
        date: "2012/12/02",
        salary: "$372",
      },
      {
        name: "Herrod Chandler",
        position: "Sales Assistant",
        office: "San Francisco",
        age: "59",
        date: "2012/08/06",
        salary: "$137",
      },
      {
        name: "Rhona Davidson",
        position: "Integration Specialist",
        office: "Tokyo",
        age: "55",
        date: "2010/10/14",
        salary: "$327",
      },
      {
        name: "Colleen Hurst",
        position: "Javascript Developer",
        office: "San Francisco",
        age: "39",
        date: "2009/09/15",
        salary: "$205",
      },
      {
        name: "Sonya Frost",
        position: "Software Engineer",
        office: "Edinburgh",
        age: "23",
        date: "2008/12/13",
        salary: "$103",
      },
      {
        name: "Jena Gaines",
        position: "Office Manager",
        office: "London",
        age: "30",
        date: "2008/12/19",
        salary: "$90",
      },
      {
        name: "Quinn Flynn",
        position: "Support Lead",
        office: "Edinburgh",
        age: "22",
        date: "2013/03/03",
        salary: "$342",
      },
      {
        name: "Charde Marshall",
        position: "Regional Director",
        office: "San Francisco",
        age: "36",
        date: "2008/10/16",
        salary: "$470",
      },
      {
        name: "Haley Kennedy",
        position: "Senior Marketing Designer",
        office: "London",
        age: "43",
        date: "2012/12/18",
        salary: "$313",
      },
      {
        name: "Tatyana Fitzpatrick",
        position: "Regional Director",
        office: "London",
        age: "19",
        date: "2010/03/17",
        salary: "$385",
      },
      {
        name: "Michael Silva",
        position: "Marketing Designer",
        office: "London",
        age: "66",
        date: "2012/11/27",
        salary: "$198",
      },
      {
        name: "Paul Byrd",
        position: "Chief Financial Officer (CFO)",
        office: "New York",
        age: "64",
        date: "2010/06/09",
        salary: "$725",
      },
      {
        name: "Gloria Little",
        position: "Systems Administrator",
        office: "New York",
        age: "59",
        date: "2009/04/10",
        salary: "$237",
      },
      {
        name: "Bradley Greer",
        position: "Software Engineer",
        office: "London",
        age: "41",
        date: "2012/10/13",
        salary: "$132",
      },
      {
        name: "Dai Rios",
        position: "Personnel Lead",
        office: "Edinburgh",
        age: "35",
        date: "2012/09/26",
        salary: "$217",
      },
      {
        name: "Jenette Caldwell",
        position: "Development Lead",
        office: "New York",
        age: "30",
        date: "2011/09/03",
        salary: "$345",
      },
      {
        name: "Yuri Berry",
        position: "Chief Marketing Officer (CMO)",
        office: "New York",
        age: "40",
        date: "2009/06/25",
        salary: "$675",
      },
      {
        name: "Caesar Vance",
        position: "Pre-Sales Support",
        office: "New York",
        age: "21",
        date: "2011/12/12",
        salary: "$106",
      },
      {
        name: "Doris Wilder",
        position: "Sales Assistant",
        office: "Sidney",
        age: "23",
        date: "2010/09/20",
        salary: "$85",
      },
      {
        name: "Angelica Ramos",
        position: "Chief Executive Officer (CEO)",
        office: "London",
        age: "47",
        date: "2009/10/09",
        salary: "$1",
      },
      {
        name: "Gavin Joyce",
        position: "Developer",
        office: "Edinburgh",
        age: "42",
        date: "2010/12/22",
        salary: "$92",
      },
      {
        name: "Jennifer Chang",
        position: "Regional Director",
        office: "Singapore",
        age: "28",
        date: "2010/11/14",
        salary: "$357",
      },
      {
        name: "Brenden Wagner",
        position: "Software Engineer",
        office: "San Francisco",
        age: "28",
        date: "2011/06/07",
        salary: "$206",
      },
      {
        name: "Fiona Green",
        position: "Chief Operating Officer (COO)",
        office: "San Francisco",
        age: "48",
        date: "2010/03/11",
        salary: "$850",
      },
      {
        name: "Shou Itou",
        position: "Regional Marketing",
        office: "Tokyo",
        age: "20",
        date: "2011/08/14",
        salary: "$163",
      },
      {
        name: "Michelle House",
        position: "Integration Specialist",
        office: "Sidney",
        age: "37",
        date: "2011/06/02",
        salary: "$95",
      },
      {
        name: "Suki Burks",
        position: "Developer",
        office: "London",
        age: "53",
        date: "2009/10/22",
        salary: "$114",
      },
      {
        name: "Prescott Bartlett",
        position: "Technical Author",
        office: "London",
        age: "27",
        date: "2011/05/07",
        salary: "$145",
      },
      {
        name: "Gavin Cortez",
        position: "Team Leader",
        office: "San Francisco",
        age: "22",
        date: "2008/10/26",
        salary: "$235",
      },
      {
        name: "Martena Mccray",
        position: "Post-Sales support",
        office: "Edinburgh",
        age: "46",
        date: "2011/03/09",
        salary: "$324",
      },
      {
        name: "Unity Butler",
        position: "Marketing Designer",
        office: "San Francisco",
        age: "47",
        date: "2009/12/09",
        salary: "$85",
      },
      {
        name: "Howard Hatfield",
        position: "Office Manager",
        office: "San Francisco",
        age: "51",
        date: "2008/12/16",
        salary: "$164",
      },
      {
        name: "Hope Fuentes",
        position: "Secretary",
        office: "San Francisco",
        age: "41",
        date: "2010/02/12",
        salary: "$109",
      },
      {
        name: "Vivian Harrell",
        position: "Financial Controller",
        office: "San Francisco",
        age: "62",
        date: "2009/02/14",
        salary: "$452",
      },
      {
        name: "Timothy Mooney",
        position: "Office Manager",
        office: "London",
        age: "37",
        date: "2008/12/11",
        salary: "$136",
      },
      {
        name: "Jackson Bradshaw",
        position: "Director",
        office: "New York",
        age: "65",
        date: "2008/09/26",
        salary: "$645",
      },
      {
        name: "Olivia Liang",
        position: "Support Engineer",
        office: "Singapore",
        age: "64",
        date: "2011/02/03",
        salary: "$234",
      },
      {
        name: "Bruno Nash",
        position: "Software Engineer",
        office: "London",
        age: "38",
        date: "2011/05/03",
        salary: "$163",
      },
      {
        name: "Sakura Yamamoto",
        position: "Support Engineer",
        office: "Tokyo",
        age: "37",
        date: "2009/08/19",
        salary: "$139",
      },
      {
        name: "Thor Walton",
        position: "Developer",
        office: "New York",
        age: "61",
        date: "2013/08/11",
        salary: "$98",
      },
      {
        name: "Finn Camacho",
        position: "Support Engineer",
        office: "San Francisco",
        age: "47",
        date: "2009/07/07",
        salary: "$87",
      },
      {
        name: "Serge Baldwin",
        position: "Data Coordinator",
        office: "Singapore",
        age: "64",
        date: "2012/04/09",
        salary: "$138",
      },
      {
        name: "Zenaida Frank",
        position: "Software Engineer",
        office: "New York",
        age: "63",
        date: "2010/01/04",
        salary: "$125",
      },
      {
        name: "Zorita Serrano",
        position: "Software Engineer",
        office: "San Francisco",
        age: "56",
        date: "2012/06/01",
        salary: "$115",
      },
      {
        name: "Jennifer Acosta",
        position: "Junior Javascript Developer",
        office: "Edinburgh",
        age: "43",
        date: "2013/02/01",
        salary: "$75",
      },
      {
        name: "Cara Stevens",
        position: "Sales Assistant",
        office: "New York",
        age: "46",
        date: "2011/12/06",
        salary: "$145",
      },
      {
        name: "Hermione Butler",
        position: "Regional Director",
        office: "London",
        age: "47",
        date: "2011/03/21",
        salary: "$356",
      },
      {
        name: "Lael Greer",
        position: "Systems Administrator",
        office: "London",
        age: "21",
        date: "2009/02/27",
        salary: "$103",
      },
      {
        name: "Jonas Alexander",
        position: "Developer",
        office: "San Francisco",
        age: "30",
        date: "2010/07/14",
        salary: "$86",
      },
      {
        name: "Shad Decker",
        position: "Regional Director",
        office: "Edinburgh",
        age: "51",
        date: "2008/11/13",
        salary: "$183",
      },
      {
        name: "Michael Bruce",
        position: "Javascript Developer",
        office: "Singapore",
        age: "29",
        date: "2011/06/27",
        salary: "$183",
      },
      {
        name: "Donna Snider",
        position: "Customer Support",
        office: "New York",
        age: "27",
        date: "2011/01/25",
        salary: "$112",
      },
    ],
  }



  const [activeTabJustify2, setactiveTabJustify2] = useState("25")

  function toggleCustomJustified2(tab) {
    if (activeTabJustify2 !== tab) {
      setactiveTabJustify2(tab)
    }
  }

  const [modal, setmodal] = useState(false)
  const [productDetails, setProductDetails] = useState([])
  const [productImgDetails, setProductImgDetails] = useState([])
  const [tdata ,setTdata] = useState([])

  useEffect(() => {
    getInstance()
  },[setProductDetails, setProductImgDetails]);

  function getInstance(){
    var brandid = localStorage.getItem('brandid')
    instance.get(`/prod/getallbybrand/${brandid}`)
    .then(function (response) {
      console.log("res of prod data",response.data.data);
      var pdata = response.data.data;
      setProductDetails(pdata);

    //   instance2.get(`/prod/getimg`)
    // .then(function(response){
    //   console.log("res of img data",response.data.data);
    //   var pimgdata = response.data.data
    //   setProductImgDetails(pimgdata)

    //   var finaldata = []
    //   pdata.map((pdata) => {
    //     var idata = pimgdata.filter(function (l){
    //       return l.batch_id == pdata.batch_id
    //     })
    //     const mergedata = {...pdata, ...idata}
    //     finaldata.push(mergedata)
    //   })

    //   console.log("final data",finaldata)
    //   setProductDetails(finaldata)

    // })

      var rows = []
        response.data.data.map((data)=>{
        rows.push({
          pid : data.batch_id,
          pname : data.prod_name,
          date : data.timestamp,
          currentstage : "inprocess",
          category : data.apparel_category,
          etho : data.etho_coin,
          update: <Link to={{pathname : "/addProduct",ProdProps : data,isEdit : true }} style={{backgroundColor:"white",borderColor:"white"}}> <img src={editBtn} style={{width:"20px"}}/></Link>, //check here
          delete:<Button 
          onClick={ () => deleteprod(data)}
          style={{backgroundColor:"white",borderColor:"white"}}><img src={delBtn} style={{width:"20px"}}/></Button> //here
        })

      })
      var table_data = {
        columns,rows
      } 
      console.log("temp",table_data)
      setTdata(table_data)

    })
    .catch(function (error) {
      console.log("error",error);
    }); 
  }

  function deleteprod(data){
    instance2
              .delete(`/prod/delete/${data._id}`)
              .then(function (response) {
                console.log("res del", response);
                getInstance()
                toast.warn("Product deleted successfully!", {
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: 0,
                });
              })
              .catch(function (error) {
                console.log("error in deleting sup", error);
              });
  }

  
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Traceabl" breadcrumbItem="Your Products" />

          <Row>
          <ToastContainer />
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
                  </Nav> */}
                  <TabContent activeTab={activeTabJustify2} className="p-3 text-muted">
                    <TabPane tabId="25">
                      {/* <Row>
                        <Col lg={4}>
                          <Card>
                            <Row className="g-0 align-items-center">
                              <Col md={6}>
                                <CardImg className="img-fluid" src={img1} alt="Card image cap" />
                              </Col>
                              <Col md={6}>
                                <CardBody>
                                  <CardTitle className="h5">Product 1</CardTitle>
                                  <CardText>
                                        SKU ID : 97564987
                                </CardText>
                                  <CardText>                                    
                                      Jeans                                  
                                  </CardText>
                                </CardBody>
                              </Col>
                            </Row>
                          </Card>
                        </Col>
                        <Col lg={4}>
                          <Card>
                            <Row className="g-0 align-items-center">
                              <Col md={6}>
                                <CardImg className="img-fluid" src={imgPlus} alt="Card image cap" />
                              </Col>
                              {/* <Col md={6}>
                                <CardBody>
                                  {/* <CardTitle className="h5">Card title</CardTitle
                                  <CardText>
                                    This is a wider card with supporting text below as a
                                    natural lead-in to additional content.
                                </CardText>
                                  <CardText>
                                    <small className="text-muted">
                                      Last updated 3 mins ago
                                  </small>
                                  </CardText> 
                                </CardBody> 
                              </Col>
                            </Row>
                          </Card>
                        </Col>                    
                      </Row> */}
                      <Row>
                        {productDetails.map((detail)=>
                        <Col >
                          {/* <Card style={{width:"100px",height:" 90px"}} > */}
                          <Card>
                            <Link to={{
                              pathname: '/ProductDetails',
                              productprops : detail
                              }}>
                              <CardImg top className="img-fluid" src={detail.images[1]} alt="Card image cap" />
                            </Link>
                            <CardBody>
                              <CardTitle className="text-center h4 mt-0">{detail.prod_name}</CardTitle>
                              <CardText className="text-center">
                                SKU ID : {detail.batch_id}
                              </CardText>
                              <CardText className="text-center">
                                {detail.apparel_category}
                              </CardText>
                             
                            </CardBody>
                          </Card>
                        </Col>
                        )}
                        <Col mg={6} xl={3}>
                          <Card >
                          <Link to="/addProduct">
                            <CardImg style={{width:"80px",height:"80px",display:'block',marginLeft:'auto',marginRight:'auto'}} top className="img-fluid" src={imgPlus} alt="Card image cap"
                              onClick={() => {
                                setmodal(!modal)
                              }}
                              to="#" />
                              </Link>
                            <CardBody>
                              {/* <CardTitle className="text-center h4 mt-0">WINTEXT Trims</CardTitle> */}
                              <CardText  className="text-center">
                                Add Product 
                              </CardText>
                              {/* <Row>
                                <Col  className="text-left">
                                <i className="fas fa-user"/>Verified
                                </Col>
                                <Col  className="text-right">
                                <i className="fas fa-envelope"/>Currently Inactive
                                </Col>
                              </Row>                                                       */}
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="26">
                    <Row>
                        <Col className="col-12">
                          <Card>
                            <CardBody>
                            <a href="/addProduct">  <Button
                                type="button"
                                color="success"
                                className="waves-effect waves-light mb-3"
                                onClick={() => {
                                  setmodal(!modal)
                                }}
                                to="#"
                              >
                                <i className="mdi mdi-plus me-1"></i>
                                  Add Product
                               </Button> </a> 
                              {/* <Modal
                                size="md"
                                isOpen={modal}
                                toggle={() => {
                                  setmodal(!modal)
                                }}
                              >
                                <ModalHeader
                                  toggle={() => {
                                    setmodal(!modal)
                                  }}
                                >
                                  On Board Supplier
                                          </ModalHeader>
                                <ModalBody>
                                  <form>
                                    <Row>
                                      <Col lg={12}>
                                        <div className="mb-3">
                                          <label htmlFor="email">Email</label>
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter Supplier's Email"
                                          />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12}>
                                        <div className="mb-3">
                                          <label htmlFor="name">Name of Supplier</label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter Supplier's Name"
                                          />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12}>
                                        <div className="mb-3">
                                          <label htmlFor="name">Type of Supplier</label>
                                          <select className="form-control" id="type">
                                            <option>Select Type </option>
                                            <option value="987654" ># 987654</option>
                                            <option value="654321" ># 654321</option>
                                          </select>
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12}>
                                        <div className="mb-3">
                                          <label htmlFor="password">Name of Point of Contact</label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="contact"
                                            placeholder="Enter Name of Point of Contact"
                                          />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12}>
                                        <div className="mb-3">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="defaultCheck1"
                                          />
                                          <label className="form-check-label px-2" htmlFor="terms">I accept the terms and conditions</label>
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12}>
                                        <div className="text-end">
                                          <button type="submit" className="btn btn-primary">
                                            Submit
                                                    </button>
                                        </div>
                                      </Col>
                                    </Row>
                                  </form>
                                </ModalBody>
                              </Modal> */}

                              <MDBDataTable className="table-responsive mb-4" responsive striped bordered data={tdata} />
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
  )
}

export default Products;