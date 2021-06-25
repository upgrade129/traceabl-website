import React, { useState } from "react";
import { CardTitle, Container } from "reactstrap";
import VisibilityIcon from "@material-ui/icons/Visibility";
import GetAppIcon from "@material-ui/icons/GetApp";
import SimpleDialog from "./SimpleDialog";

import { Row, Col, Card, CardBody, Button } from "reactstrap";

import { Link } from "react-router-dom";

import qrcode from "../../assets/images/small/qr-code.png";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Qrcode = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(qrcode);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Traceabl" breadcrumbItem="Qrcode" />
          <Row>
            <Col lg="12">
              <div
                className="d-flex justify-content-lg-between"
                style={{ height: "auto" }}
              >
                <Card style={{ width: "49%" }}>
                  <CardBody>
                    <Row>
                      <h4 className="card-title">Product Tracing</h4>
                    </Row>
                    <br />
                    <br />
                    <form>
                      <Row>
                        <Col xl={6}>
                          <Row>
                            <Col lg={12}>
                              <div className="mb-3">
                                <label htmlFor="name">Select Batch Id</label>
                                <select className="form-control" id="type">
                                  <option>Select Batch Id </option>
                                  <option value="987654"># 987654</option>
                                  <option value="654321"># 654321</option>
                                </select>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </form>
                  </CardBody>
                </Card>
                <Card style={{ width: "49%" }}>
                  <CardBody>
                    <CardTitle className="text-start">QR CODE</CardTitle>
                    <form>
                      <Row>
                        {/* <Col xl={6}>
                        <Row>
                          <Col xl={3}></Col> */}
                        {/* <Col xl={6}>  */}
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                          <Card
                            className="align-item-lg-center"
                            style={{
                              width: "240px",
                              marginTop: "1.5rem",
                              marginBottom: "1.5rem",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          >
                            <CardBody className="align-items-lg-center">
                              <Row>
                                <img
                                  className="rounded mr-2"
                                  alt=""
                                  width="60"
                                  src={qrcode}
                                />
                              </Row>
                            </CardBody>
                          </Card>
                          <div className="d-flex justify-content-lg-center">
                            <Button
                              type="button"
                              color=""
                              className="mt-2 me-2 waves-effect waves-light shadow p-1 mb-3 bg-body rounded"
                            >
                              <GetAppIcon color="primary" />{" "}
                              <span className="text-primary">Download</span>
                            </Button>
                            <Button
                              type="button"
                              color=""
                              className="mt-2 me-2 waves-effect waves-light shadow p-1 mb-3 bg-body rounded"
                              onClick={handleClickOpen}
                            >
                              <VisibilityIcon color="primary" />{" "}
                              <span className="text-primary"> View </span>
                            </Button>
                          </div>
                        </Col>
                        {/* <Col xl={3}></Col>
                        </Row>
                        </Col> */}
                      </Row>
                    </form>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </div>
    </React.Fragment>
  );
};

export default Qrcode;

// import React from "react"
// import { CardTitle, Container } from "reactstrap"

// import {
//   Row,
//   Col,
//   Card,
//   CardBody,
//   Button
// } from "reactstrap"

// import { Link } from "react-router-dom"

// import qrcode from "../../assets/images/small/qr-code.png"

// //Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"

// const Qrcode = () => {

//   return (
//     <React.Fragment>
//       <div className="page-content">
//         <Container fluid>
//           <Breadcrumbs title="Traceabl" breadcrumbItem="Qrcode" />
//           <Row>
//             <Col lg="12">
//               <Card>
//                 <CardBody>
//                   <Row>
//                     <h4 className="card-title">Product Tracing</h4>
//                   </Row><br /><br />
//                   <form>
//                     <Row>
//                       <Col xl={6}>
//                         <Row>
//                           <Col lg={12}>
//                             <div className="mb-3">
//                               <label htmlFor="name">Select Batch Id</label>
//                               <select className="form-control" id="type">
//                                 <option>Select Batch Id </option>
//                                 <option value="987654" ># 987654</option>
//                                 <option value="654321" ># 654321</option>
//                               </select>
//                             </div>
//                           </Col>
//                         </Row>
//                       </Col>
//                       <Col xl={6}>

//                         <Row>
//                           <Col xl={3}></Col>
//                           <Col xl={6}>
//                           <CardTitle className="text-center">QR CODE</CardTitle>
//                             <Card>
//                               <CardBody className="align-items-center">
//                                 <Row>

//                                   <img
//                                     className="rounded mr-2"
//                                     alt=""
//                                     width="200"
//                                     src={qrcode}
//                                   />

//                                 </Row>
//                                 <Row>

//                                   <Button type="button" color="primary" className="mt-2 me-2 waves-effect waves-light">Print</Button>{" "}
//                                   <Button type="button" color="success" className="mt-2 waves-effect waves-light">Download</Button>
//                                 </Row>

//                               </CardBody>
//                             </Card>
//                           </Col>
//                           <Col xl={3}></Col>
//                         </Row>
//                       </Col>
//                     </Row>
//                   </form>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>

//         </Container>
//       </div>
//     </React.Fragment>
//   )
// }

// export default Qrcode;
