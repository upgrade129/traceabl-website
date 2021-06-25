import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MDBDataTable } from "mdbreact";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  NavItem,
  CardTitle,
  CardText,
  Nav,
  NavLink,
  TabContent,
  TabPane,
  CardImg,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

import classnames from "classnames";
import { storage, firebase } from "../../firbaseConfig";


// import images
import img1 from "../../assets/images/small/img-1.jpg";
import imgPlus from "../../assets/images/small/plus.png";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { getCustomers } from "../../store/e-commerce/actions";
import { Link } from "react-router-dom";
import { Checkboard } from "react-color";
import { flushSync } from "react-dom";
import { getInstanceByDom } from "echarts";
import editBtn from "../../assets/images/edit.png";
import delBtn from "../../assets/images/delete.png";

import { ToastContainer, toast } from "react-toastify";

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

const Suppliers = (props) => {
  const [modal_small, setmodal_small] = useState(false);
  function tog_small() {
    setmodal_small(!modal_small);
    removeBodyCss();
  }
  function removeBodyCss() {
    document.body.classList.add("no_padding");
  }

  const columns = [
    {
      label: "Suppliers",
      field: "name",
      sort: "asc",
      width: 150,
    },
    {
      label: "Location",
      field: "location",
      sort: "asc",
      width: 270,
    },
    {
      label: "Type",
      field: "type",
      sort: "asc",
      width: 200,
    },
    {
      label: "Traceable Status",
      field: "status",
      sort: "asc",
      width: 100,
    },
    {
      label: "Prduction Status",
      field: "production_status",
      sort: "asc",
      width: 150,
    },
    {
      label: "Edit",
      field: "update",
      sort: "asc",
      width: 150,
    },
    {
      label: "Delete",
      field: "delete",
      sort: "asc",
      width: 150,
    },
  ];

  const [activeTabJustify2, setactiveTabJustify2] = useState("25");

  function toggleCustomJustified2(tab) {
    if (activeTabJustify2 !== tab) {
      setactiveTabJustify2(tab);
    }
  }

  const [modal, setmodal] = useState(false);
  const [supplierDetails, setsupplierDetails] = useState([]);
  const [email, setEmail] = useState("");
  const [suppliername, setSuppliername] = useState("");
  const [typeofsupplier, setTypeofsupplier] = useState("");
  const [pocname, setPOCname] = useState("");
  const [termsandcondition, setTermsandCondition] = useState(false);
  const [tdata, setTdata] = useState({});
  const [location, setSupplierlocation] = useState("");
  const [productionstatus, setProductionstatus] = useState("");
  const [service, setSupplierservice] = useState("");
  
  //const [imgUrl, setImgUrl] = useState("")
  const [supplierimg, setsupplierimg] = useState("image");
  const [brandid, setbrandid] = useState("");
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");

  const [fireimg, setFireimg] = useState("")

  const addSupplier = (imgurl) => {
    console.log("add supplier");
    console.log("brandid", brandid);

    var auth = JSON.parse(localStorage.getItem("authUser"));
    var auth_email = auth.email;
    var auth_name = auth.username;

    var details = {
      brand_name: auth_name,
      brand_email: auth_email,
      brand_id: brandid,
      email: email,
      name_sup: suppliername,
      type: typeofsupplier,
      name_poc: pocname,
      terms_and_conditions: termsandcondition,
      traceable_status: "invitation sent",
      production_status: productionstatus,
      batch_id: 1223,
      location: location,
      services: service,
      image: imgurl,
    };
    console.log("supp details", details);
    instance2
      .post(`/supplier/add`, details)
      .then(function (response) {
        console.log("res", response);
        getInstance();
      })
      .catch(function (error) {
        console.log("error in adding sup", error);
      });
    tog_small();
    //uploadTofirebase();

  };

  const editSupplier = (imgurl) => {
    console.log("add supplier");
    console.log("brandid", brandid);

    var auth = JSON.parse(localStorage.getItem("authUser"));
    var auth_email = auth.email;
    var auth_name = auth.username;

    var details = {
      id: id,
      brand_name: auth_name,
      brand_email: auth_email,
      brand_id: brandid,
      email: email,
      name_sup: suppliername,
      type: typeofsupplier,
      name_poc: pocname,
      terms_and_conditions: termsandcondition,
      traceable_status: "invitation sent",
      production_status: productionstatus,
      batch_id: 1223,
      location: location,
      services: service,
      image: imgurl,
    };
    console.log("supp details", details);
    instance2
      .post(`/supplier/update`, details)
      .then(function (response) {
        console.log("res update", response);
        getInstance();
        toast.success("Supplier edited successfully!", {
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
        console.log("error in updating sup", error);
      });
    tog_small();
    setEdit(!edit);
  };

  // const getBase64 = (e) => {
  //   var file = e.target.files[0];
  //   console.log("img_file",file)
  //   setfireimg(file);
  //   let reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     setsupplierimg(reader.result);
  //     console.log("base64", reader.result);
  //   };
  //   reader.onerror = function (error) {
  //     console.log("Error: ", error);
  //   };
  // };

  const uploadTofirebase = () => {

    var fireimgage = fireimg.target.files[0];
    console.log("img_file", fireimgage)
    console.log("fireimg", fireimgage.name)
    const storageRef = storage.ref(`suppliers/${fireimgage.name}`).put(fireimgage);
    storageRef.on(
      "state_changed",
      (snapShot) => {
        console.log(snapShot);
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref("suppliers")
          .child(fireimgage.name)
          .getDownloadURL()
          .then((url) => {
            var imgurl = url;
            console.log("firebase url", url)
            setsupplierimg(url);
            if(edit){
              editSupplier(imgurl);
            }
            else{
              addSupplier(imgurl);
            }
          });
      }
    );
  }

  useEffect(() => {
    getInstance();
  }, [setsupplierDetails]);

  function getInstance() {
    var tempid = localStorage.getItem("brandid");

    setbrandid(tempid);
    instance
      .get(`/supplier/getallbybrand/${tempid}`)
      .then(function (response) {
        console.log("res", response.data.data);
        setsupplierDetails(response.data.data);

        var rows = [];
              response.data.data.map((data) => {
                rows.push({
                  name: data.name_sup,
                  location: data.location,
                  type: data.type,
                  status: data.traceable_status,
                  production_status: data.production_status,
                  update: (
                    <Button
                      onClick={() => {
                        setmodal(!modal);
                        setEditdata(data);
                      }}
                      style={{ backgroundColor: "white", borderColor: "white" }}
                    >
                      <img src={editBtn} style={{ width: "20px" }} />
                    </Button>
                  ), //check here
                  delete: (
                    <Button
                      onClick={() => {
                        instance3
                          .delete(`/supplier/delete/${data._id}`)
                          .then(function (response) {
                            console.log("res del", response);
                            getInstance();
                            toast.warn("Supplier deleted successfully!", {
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
                      }}
                      style={{ backgroundColor: "white", borderColor: "white" }}
                    >
                      <img src={delBtn} style={{ width: "20px" }} />
                    </Button>
                  ), //here
                });
              })
       
        
        var table_data = {
          columns,
          rows,
        };
        console.log("temp", table_data);
        setTdata(table_data);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }

  function setEditdata(data) {
    setId(data._id);
    setEmail(data.email);
    setSuppliername(data.name_sup);
    setTypeofsupplier(data.type);
    setPOCname(data.name_poc);
    setTermsandCondition(data.terms_and_conditions);
    setProductionstatus(data.production_status);
    setSupplierlocation(data.location);
    setSupplierservice(data.services);
    setsupplierimg(data.image);
    setEdit(!edit);
  }



  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Traceabl" breadcrumbItem="Your Suppliers" />

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
                          toggleCustomJustified2("25");
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="fas fa-home"></i>
                        </span>
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
                          toggleCustomJustified2("26");
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="far fa-user"></i>
                        </span>
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
                  <TabContent
                    activeTab={activeTabJustify2}
                    className="p-3 text-muted"
                  >
                    <TabPane tabId="25">
                      <Row>
            
                        {Array.isArray(supplierDetails) 
                        ? 
                        <React.Fragment>
                          {supplierDetails.map((detail) => (
                          <Col mg={6} xl={3}>
                            <Card>
                              <Link
                                to={{
                                  pathname: "/supplierdetails",
                                  supplierprops: detail,
                                }}
                              >
                                <CardImg
                                  top
                                  className="img-fluid"
                                  src={detail.image}
                                  alt="Card image cap" 
                                />
                                {/* style={{width:"80px",height:"80px",display:'block',marginLeft:'auto',marginRight:'auto'}} */}
                              </Link>
                              <CardBody>
                                <CardTitle className="text-center h4 mt-0">
                                  {detail.name_sup}
                                </CardTitle>
                                <CardText className="text-center">
                                  {detail.type}
                                </CardText>
                                <CardText>
                                  <small>
                                    <i className="fas fa-user me-1" />
                                    {detail.traceable_status}
                                  </small>
                                  <small className="float-end">
                                    <i className="fas fa-envelope me-1" />
                                    {detail.production_status}
                                  </small>
                                </CardText>
                              </CardBody>
                            </Card>
                          </Col>
                        ))}
                        </React.Fragment>
                        : 
                        ""
                        }
                        

                        <Col mg={6} xl={3}>
                          <Card>
                            <CardImg
                              style={{ width: "80px", height: "80px", display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                              top
                              className="img-fluid"
                              src={imgPlus}
                              alt="Card image cap"
                              onClick={() => {
                                setmodal(!modal);
                              }}
                              to="#"
                            />
                            <CardBody>
                              {/* <CardTitle className="text-center h4 mt-0">WINTEXT Trims</CardTitle> */}
                              <CardText className="text-center">
                                Add Supplier
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
                              <Button
                                type="button"
                                color="success"
                                className="waves-effect waves-light mb-3"
                                onClick={() => {
                                  setmodal(!modal);
                                }}
                                to="#"
                              >
                                <i className="mdi mdi-plus me-1"></i>
                                Add suppliers
                              </Button>
                              <Modal
                                size="md"
                                isOpen={modal}
                                toggle={() => {
                                  setmodal(!modal);
                                }}
                              >
                                <ModalHeader
                                  toggle={() => {
                                    setmodal(!modal);
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
                                            onChange={(e) =>
                                              setEmail(e.target.value)
                                            }
                                            value={email}
                                          />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12}>
                                        <div className="mb-3">
                                          <label htmlFor="name">
                                            Name of Supplier
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter Supplier's Name"
                                            onChange={(e) =>
                                              setSuppliername(e.target.value)
                                            }
                                            value={suppliername}
                                          />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12}>
                                        <div className="mb-3">
                                          <label htmlFor="name">Location</label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="location"
                                            placeholder="Enter Supplier's Location"
                                            onChange={(e) =>
                                              setSupplierlocation(
                                                e.target.value
                                              )
                                            }
                                            value={location}
                                          />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12}>
                                        <div className="mb-3">
                                          <label htmlFor="name">Services</label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="location"
                                            placeholder="Enter Supplier's service"
                                            onChange={(e) =>
                                              setSupplierservice(e.target.value)
                                            }
                                            value={service}
                                          />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12}>
                                        <div className="mb-3">
                                          <label htmlFor="name">
                                            Type of Supplier
                                          </label>
                                          <select
                                            className="form-control"
                                            id="type"
                                            onChange={(e) =>
                                              setTypeofsupplier(e.target.value)
                                            }
                                            value={typeofsupplier}
                                          >
                                            <option>Select Type </option>
                                            <option value="Fabre">Fabre</option>
                                            <option value="Fabric">
                                              Fabric
                                            </option>
                                            <option value="Trims">Trims</option>
                                            <option value="Dyeing">
                                              Dyeing
                                            </option>
                                            <option value="CMT">CMT</option>
                                            <option value="Processing">
                                              Processing
                                            </option>
                                          </select>
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12}>
                                        <div className="mb-3">
                                          <label htmlFor="name">
                                            Production Status
                                          </label>
                                          <select
                                            className="form-control"
                                            id="type"
                                            onChange={(e) =>
                                              setProductionstatus(
                                                e.target.value
                                              )
                                            }
                                            value={productionstatus}
                                          >
                                            <option>Select Type </option>
                                            <option value="Inactive">
                                              Inactive
                                            </option>
                                            <option value="Active">
                                              Active
                                            </option>
                                          </select>
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12}>
                                        <div className="mb-3">
                                          <label htmlFor="password">
                                            Name of Point of Contact
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="contact"
                                            placeholder="Enter Name of Point of Contact"
                                            onChange={(e) =>
                                              setPOCname(e.target.value)
                                            }
                                            value={pocname}
                                          />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12}>
                                        <div className="mb-3">
                                          <label htmlFor="password">
                                            Upload supplier Image
                                          </label>
                                          <input
                                            className="form-control"
                                            type="file"
                                            onChange={(e) => setFireimg(e)}
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
                                            onChange={(e) =>
                                              setTermsandCondition(
                                                !termsandcondition
                                              )
                                            }
                                          />
                                          <label
                                            className="form-check-label px-2"
                                            htmlFor="terms"
                                          >
                                            I accept the terms and conditions
                                          </label>
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={12}>
                                        <div className="text-end">
                                          {edit ? (
                                            <button
                                              type="button"
                                              onClick={editSupplier}
                                              // type="submit"
                                              className="btn btn-primary w-sm waves-effect waves-light"
                                              data-toggle="modal"
                                              data-target=".bs-example-modal-sm"
                                            >
                                              Edit
                                            </button>
                                          ) : (
                                            <button
                                              type="button"
                                              onClick={uploadTofirebase}
                                              // type="submit"
                                              className="btn btn-primary w-sm waves-effect waves-light"
                                              data-toggle="modal"
                                              data-target=".bs-example-modal-sm"
                                            >
                                              Submit
                                            </button>
                                          )}

                                          <Modal
                                            size="sm"
                                            isOpen={modal_small}
                                            toggle={() => {
                                              tog_small();
                                            }}
                                          >
                                            <div className="modal-header">
                                              <h5
                                                className="modal-title mt-0"
                                                id="mySmallModalLabel"
                                              >
                                                “Invitation Sent"
                                              </h5>
                                              <button
                                                onClick={() => {
                                                  setmodal_small(false);
                                                }}
                                                type="button"
                                                className="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                              >
                                                <span aria-hidden="true">
                                                  &times;
                                                </span>
                                              </button>
                                            </div>
                                            <div className="modal-body">
                                              <p>
                                                "Supplier Added Successfully"
                                              </p>
                                            </div>
                                          </Modal>
                                        </div>
                                      </Col>
                                    </Row>
                                  </form>
                                </ModalBody>
                              </Modal>

                              <MDBDataTable
                                className="table-responsive mb-4"
                                responsive
                                striped
                                bordered
                                data={tdata}
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

export default Suppliers;
