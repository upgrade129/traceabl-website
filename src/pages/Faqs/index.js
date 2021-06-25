import React, { useState } from "react"

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Media,
  Collapse
} from "reactstrap"

import { Link } from "react-router-dom"

//Import Images
import faqimg from "../../assets/images/faqs-img.png"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// import Select from "react-select"
// import Dropzone from "react-dropzone"
// import images
// import img1 from "../../assets/images/small/img-1.jpg"

const Faqs = () => {
  
  // const [singlebtn1, setSinglebtn1] = useState(false)
  // const [singlebtn2, setSinglebtn2] = useState(false)
  // const [singlebtn3, setSinglebtn3] = useState(false)
  // const [singlebtn4, setSinglebtn4] = useState(false)

  // const [singlebtn5, setSinglebtn5] = useState(false)

  // const [singlebtn6, setSinglebtn6] = useState(false)
  // const [singlebtn7, setSinglebtn7] = useState(false)

  // const [singlebtn8, setSinglebtn8] = useState(false)
  // const [singlebtn9, setSinglebtn9] = useState(false)

  // const [singlebtn10, setSinglebtn10] = useState(false)
  // const [singlebtn11, setSinglebtn11] = useState(false)


  // const [selectedFiles, setselectedFiles] = useState([])
  // const [isOpen, setIsOpen] = useState(true);

  // const toggle = () => setIsOpen(!isOpen);

  // const [isOpenAddproduct, setIsOpenAddproduct] = useState(false);

  // const toggleAddproduct = () => setIsOpenAddproduct(!isOpenAddproduct);

  // const [isOpenTechPacks, setIsOpenTechPacks] = useState(false);

  // const toggleTechPacks = () => setIsOpenTechPacks(!isOpenTechPacks);

  // const [isOpenBOM, setIsOpenBOM] = useState(false);

  // const toggleBOM = () => setIsOpenBOM(!isOpenBOM);

  // const [isOpenSupplyChain, setIsOpenSupplyChain] = useState(false);

  // const toggleSupplyChain = () => setIsOpenSupplyChain(!isOpenSupplyChain);

  // const [isOpenAddSupplier, setIsOpenAddSupplier] = useState(false);

  // const toggleAddSupplier = () => setIsOpenAddSupplier(!isOpenAddSupplier);

  // const [isOpenBadges, setIsOpenBadges] = useState(false);

  // const toggleBadges = () => setIsOpenBadges(!isOpenBadges);

  // //  const [isOpenMetadata, setIsOpenMetadata] = useState(false);

  // //  const toggleMetadata = () => setIsOpenMetadata(!isOpenMetadata);

  // const options = [
  //   { value: "AK", label: "Alaska" },
  //   { value: "HI", label: "Hawaii" },
  //   { value: "CA", label: "California" },
  //   { value: "NV", label: "Nevada" },
  //   { value: "OR", label: "Oregon" },
  //   { value: "WA", label: "Washington" }
  // ]

  // function handleAcceptedFiles(files) {
  //   files.map(file =>
  //     Object.assign(file, {
  //       preview: URL.createObjectURL(file),
  //       formattedSize: formatBytes(file.size)
  //     })
  //   )

  //   setselectedFiles(files)
  // }

  // function formatBytes(bytes, decimals = 2) {
  //   if (bytes === 0) return "0 Bytes"
  //   const k = 1024
  //   const dm = decimals < 0 ? 0 : decimals
  //   const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

  //   const i = Math.floor(Math.log(bytes) / Math.log(k))
  //   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  // }

  // return (
  //   <React.Fragment>
  //     <div className="page-content">
  //       <Container fluid>
  //         {/* Render Breadcrumb */}
  //         <Breadcrumbs title="Ecommerce" breadcrumbItem="Product Details" />

  //         <Row>
  //           <Col lg="12">
  //             <div id="addproduct-accordion" className="custom-accordion">
  //               <Card>
  //                 <Link to="#" onClick={toggle} className="text-dark">
  //                   <div className="p-4">

  //                     <Media className="d-flex align-items-center">
  //                       <div className="me-3">
  //                         <div className="avatar-xs">
  //                           <div className="avatar-title rounded-circle bg-soft-primary text-primary">
  //                             01
  //                                                           </div>
  //                         </div>
  //                       </div>
  //                       <div className="flex-1 overflow-hidden">
  //                         <h5 className="font-size-16 mb-1">Question1</h5>
  //                         {/* <p className="text-muted text-truncate mb-0">Fill all information below</p> */}
  //                       </div>
  //                       <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
  //                     </Media>

  //                   </div>
  //                 </Link>
  //                 <Collapse isOpen={isOpen}>
  //                   <div className="p-4 border-top">
  //                     <p>lorem2</p>
  //                   </div>
  //                 </Collapse>
  //               </Card>
  //               <Card>
  //                 <Link to="#" className="text-dark collapsed" onClick={toggleAddproduct}>
  //                   <div className="p-4">

  //                     <Media className="d-flex align-items-center">
  //                       <div className="me-3">
  //                         <div className="avatar-xs">
  //                           <div className="avatar-title rounded-circle bg-soft-primary text-primary">
  //                             02
  //                                                           </div>
  //                         </div>
  //                       </div>
  //                       <div className="flex-1 overflow-hidden">
  //                         <h5 className="font-size-16 mb-1">Question 2</h5>
  //                         {/* <p className="text-muted text-truncate mb-0">Fill all information below</p> */}
  //                       </div>
  //                       <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
  //                     </Media>

  //                   </div>
  //                 </Link>
  //                 <Collapse isOpen={isOpenAddproduct}>
  //                   <div className="p-4 border-top">
  //                   <p>lorem2</p>
  //                   </div>
  //                 </Collapse>
  //               </Card>
  //               <Card>
  //                 <Link to="#" className="text-dark collapsed" onClick={toggleTechPacks}>
  //                   <div className="p-4">

  //                     <Media className="d-flex align-items-center">
  //                       <div className="me-3">
  //                         <div className="avatar-xs">
  //                           <div className="avatar-title rounded-circle bg-soft-primary text-primary">
  //                             03
  //                                                           </div>
  //                         </div>
  //                       </div>
  //                       <div className="flex-1 overflow-hidden">
  //                         <h5 className="font-size-16 mb-1">Question 3</h5>
  //                         {/* <p className="text-muted text-truncate mb-0">Upload product tech packs</p> */}
  //                       </div>
  //                       <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
  //                     </Media>

  //                   </div>
  //                 </Link>
  //                 <Collapse isOpen={isOpenTechPacks}>
  //                   <div className="p-4 border-top">
  //                   <p>lorem2</p>
  //                   </div>
  //                 </Collapse>
  //               </Card>
  //               <Card>
  //                 <Link to="#" className="text-dark collapsed" onClick={toggleBOM}>
  //                   <div className="p-4">

  //                     <Media className="d-flex align-items-center">
  //                       <div className="me-3">
  //                         <div className="avatar-xs">
  //                           <div className="avatar-title rounded-circle bg-soft-primary text-primary">
  //                             04
  //                                                           </div>
  //                         </div>
  //                       </div>
  //                       <div className="flex-1 overflow-hidden">
  //                         <h5 className="font-size-16 mb-1">Question 4</h5>
  //                         {/* <p className="text-muted text-truncate mb-0">Upload bill of materials</p> */}
  //                       </div>
  //                       <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
  //                     </Media>

  //                   </div>
  //                 </Link>
  //                 <Collapse isOpen={isOpenBOM}>
  //                   <div className="p-4 border-top">
  //                    <p>Lorem</p>
  //                   </div>
  //                 </Collapse>
  //               </Card>
  //               <Card>
  //                 <Link to="#" className="text-dark collapsed" onClick={toggleSupplyChain}>
  //                   <div className="p-4">

  //                     <Media className="d-flex align-items-center">
  //                       <div className="me-3">
  //                         <div className="avatar-xs">
  //                           <div className="avatar-title rounded-circle bg-soft-primary text-primary">
  //                             05
  //                           </div>
  //                         </div>
  //                       </div>
  //                       <div className="flex-1 overflow-hidden">
  //                         <h5 className="font-size-16 mb-1">Question 5</h5>
  //                         {/* <p className="text-muted text-truncate mb-0">Create Product Supply Chain</p> */}
  //                       </div>
  //                       <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
  //                     </Media>

  //                   </div>
  //                 </Link>
  //                 <Collapse isOpen={isOpenSupplyChain}>
  //                   <div className="p-4 border-top">
  //                   <p>lorem2</p>

  //                   </div>
  //                 </Collapse>
  //               </Card>

  //               <Card>
  //                 <Link to="#" className="text-dark collapsed" onClick={toggleAddSupplier}>
  //                   <div className="p-4">

  //                     <Media className="d-flex align-items-center">
  //                       <div className="me-3">
  //                         <div className="avatar-xs">
  //                           <div className="avatar-title rounded-circle bg-soft-primary text-primary">
  //                             06
  //                                                           </div>
  //                         </div>
  //                       </div>
  //                       <div className="flex-1 overflow-hidden">
  //                         <h5 className="font-size-16 mb-1">Question 6</h5>
  //                         {/* <p className="text-muted text-truncate mb-0">Enlist supplier for product</p> */}
  //                       </div>
  //                       <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
  //                     </Media>

  //                   </div>
  //                 </Link>
  //                 <Collapse isOpen={isOpenAddSupplier}>
  //                   <div className="p-4 border-top">
  //                   <p>lorem2</p>
  //                   </div>
  //                 </Collapse>
  //               </Card>

  //               <Card>
  //                 <Link to="#" className="text-dark collapsed" onClick={toggleBadges}>
  //                   <div className="p-4">

  //                     <Media className="d-flex align-items-center">
  //                       <div className="me-3">
  //                         <div className="avatar-xs">
  //                           <div className="avatar-title rounded-circle bg-soft-primary text-primary">
  //                             07
  //                                                           </div>
  //                         </div>
  //                       </div>
  //                       <div className="flex-1 overflow-hidden">
  //                         <h5 className="font-size-16 mb-1">Questions 7</h5>
  //                         {/* <p className="text-muted text-truncate mb-0">View obtained batches</p> */}
  //                       </div>
  //                       <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
  //                     </Media>

  //                   </div>
  //                 </Link>
  //                 <Collapse isOpen={isOpenBadges}>
  //                   <div className="p-4 border-top">
  //                   <p>lorem2</p>

  //                   </div>
  //                 </Collapse>
  //               </Card>
  //             </div>

  //             {/* <Card>
  //               <Link to="#" className="text-dark collapsed" onClick={toggleMetadata}>
  //                 <div className="p-4">

  //                   <Media className="d-flex align-items-center">
  //                     <div className="me-3">
  //                       <div className="avatar-xs">
  //                         <div className="avatar-title rounded-circle bg-soft-primary text-primary">
  //                           03
  //                                                           </div>
  //                       </div>
  //                     </div>
  //                     <div className="flex-1 overflow-hidden">
  //                       <h5 className="font-size-16 mb-1">Meta Data</h5>
  //                       <p className="text-muted text-truncate mb-0">Fill all information below</p>
  //                     </div>
  //                     <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
  //                   </Media>
  //                 </div>
  //               </Link>
  //               <Collapse isOpen={isOpenMetadata}>
  //                 <div className="p-4 border-top">
  //                   <Form>
  //                     <Row>
  //                       <Col sm={6}>
  //                         <div className="mb-3">
  //                           <Label htmlFor="metatitle">Meta title</Label>
  //                           <Input
  //                             id="metatitle"
  //                             name="productname"
  //                             type="text"
  //                             className="form-control"
  //                           />
  //                         </div>
  //                       </Col>
  //                       <Col sm={6}>
  //                         <div className="mb-3">
  //                           <Label htmlFor="metakeywords">Meta Keywords</Label>
  //                           <Input
  //                             id="metakeywords"
  //                             name="manufacturername"
  //                             type="text"
  //                             className="form-control"
  //                           />
  //                         </div>
  //                       </Col>
  //                     </Row>
  //                     <div className="mb-0">
  //                       <Label htmlFor="metadescription">
  //                         Meta Description
  //                         </Label>
  //                       <textarea
  //                         className="form-control"
  //                         id="metadescription"
  //                         rows="5"
  //                       />
  //                     </div>
  //                   </Form>

  //                 </div>
  //               </Collapse>
  //             </Card> */}
  //           </Col>
  //         </Row>
  //         {/* <Row className="row mb-4">
  //           <div className="col text-end">
  //             <Link to="#" className="btn btn-danger"> <i className="uil uil-times me-1"></i> Cancel </Link>{" "}
  //             <Link to="#" className="btn btn-success"> <i className="uil uil-file-alt me-1"></i> Save </Link>
  //           </div>
  //         </Row> */}
  //       </Container>
  //     </div>
  //   </React.Fragment>
 // )

//  ~~~~~~~~~~~~~~~~~~~~~~~~ Code from admin page ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const [isOpenCollapse1, setIsOpenCollapse1] = useState(true);

  const toggleCollapse1 = () => setIsOpenCollapse1(!isOpenCollapse1);

  const [isOpenCollapse2, setIsOpenCollapse2] = useState(false);

  const toggleCollapse2 = () => setIsOpenCollapse2(!isOpenCollapse2);

  const [isOpenCollapse3, setIsOpenCollapse3] = useState(false);

  const toggleCollapse3 = () => setIsOpenCollapse3(!isOpenCollapse3);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Utility" breadcrumbItem="FAQs" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <Row className="justify-content-center mt-4">
                    <Col lg={5}>
                      <div className="text-center">
                        <h5>Can't find what you are looking for?</h5>
                        <p className="text-muted"></p>

                        <div>
                          <Button type="button" color="primary" className="mt-2 me-2 waves-effect waves-light">Email Us</Button>{" "}
                          <Button type="button" color="success" className="mt-2 waves-effect waves-light">Send us a tweet</Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col xl={3} sm={5} className="mx-auto">
                      <div>
                        <img src={faqimg} alt="" className="img-fluid mx-auto d-block" />
                      </div>
                    </Col>
                    <Col xl={8}>
                      <div id="faqs-accordion" className="custom-accordion mt-5 mt-xl-0">
                        <Card className="border shadow-none">
                          <Link to="#" className="text-dark" onClick={toggleCollapse1}>
                            <div className="bg-light p-3">

                              <div className="d-flex align-items-center">
                                <div className="me-3">
                                  <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle font-size-22">
                                      <i className="uil uil-question-circle"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                  <h5 className="font-size-16 mb-1">General Questions</h5>
                                  {/* <p className="text-muted text-truncate mb-0">General Questions</p> */}
                                </div>
                                <i className="mdi mdi-chevron-up accor-down-icon font-size-16"></i>
                              </div>

                            </div>
                          </Link>
                          <Collapse isOpen={isOpenCollapse1} id="faqs-gen-ques-collapse">
                            <div className="p-4">
                              <Row>
                                <Col md="12">
                                  <div>
                                    <Media className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">What are the benefits of supply chain transparency?</h5>
                                        <p className="text-muted">Supply chain transparency can help increase the values of PR and sales
                                                                  in a never imagined way. By showcasing what the supply chain is,
                                                                  traceabl enables you to have a one stop location to handle all the
                                                                  discrepancies arising in the supply chain.</p>
                                      </div>
                                    </Media>

                                    <Media className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">Why can’t I trace my product?</h5>
                                        <p className="text-muted">Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.</p>
                                      </div>
                                      
                                    </Media>

                                    <Media className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                    <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">How does Blockchain help in Supply Chain Transparency?</h5>
                                        <p className="text-muted">Supply Chain Transparency is an absolute necessary in the current
                                                                  circumstances where every entity and stake holder involved in the supply
                                                                  chain will be aware of the origins of the materials involved in the making
                                                                  of their favorite products.</p>
                                      </div>
                                      </Media>
                                  </div>
                                </Col>

                                {/* <Col md="6">
                                  <div>
                                    <Media className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">Why do we use it ?</h5>
                                        <p className="text-muted">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. </p>
                                      </div>
                                    </Media>

                                  </div>
                                </Col> */}
                              </Row>
                            </div>
                          </Collapse>
                        </Card>
{/* 
                        <Card className="border shadow-none">
                          <Link to="#" className="text-dark" onClick={toggleCollapse2}>
                            <div className="bg-light p-3">

                              <div className="d-flex align-items-center">
                                <div className="me-3">
                                  <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle font-size-22">
                                      <i className="uil uil-question-circle"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                  <h5 className="font-size-16 mb-1">Privacy Policy</h5>
                                  <p className="text-muted text-truncate mb-0">Privacy Policy Questions</p>
                                </div>
                                <i className="mdi mdi-chevron-up accor-down-icon font-size-16"></i>
                              </div>

                            </div>
                          </Link>
                          <Collapse isOpen={isOpenCollapse2}>
                            <div className="p-4">
                              <Row>
                                <Col md="6">
                                  <div>
                                    <Media className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">Where can I get some ?</h5>
                                        <p className="text-muted">If several languages coalesce, the grammar of the resulting language is more simple</p>
                                      </div>
                                    </Media>

                                    <Media className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">Why do we use it ?</h5>
                                        <p className="text-muted">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. </p>
                                      </div>
                                    </Media>

                                  </div>
                                </Col>

                                <Col md="6">
                                  <div>
                                    <Media className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">Where does it come from ?</h5>
                                        <p className="text-muted">Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.</p>
                                      </div>
                                    </Media>

                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Collapse>
                        </Card>

                        <Card className="border shadow-none">
                          <Link to="#" className="text-dark" onClick={toggleCollapse3}>
                            <div className="bg-light p-3">

                              <div className="d-flex align-items-center">
                                <div className="me-3">
                                  <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle font-size-22">
                                      <i className="uil uil-question-circle"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                  <h5 className="font-size-16 mb-1">Pricing & Plans</h5>
                                  <p className="text-muted text-truncate mb-0">Pricing & Plans Questions</p>
                                </div>
                                <i className="mdi mdi-chevron-up accor-down-icon font-size-16"></i>
                              </div>

                            </div>
                          </Link>
                          <Collapse isOpen={isOpenCollapse3}>
                            <div className="p-4">
                              <Row>
                                <Col md="6">
                                  <div>
                                    <Media className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">Where does it come from ?</h5>
                                        <p className="text-muted">Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.</p>
                                      </div>
                                    </Media>

                                    <div className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">What is Lorem Ipsum ?</h5>
                                        <p className="text-muted">If several languages coalesce, the grammar of the resulting language is more simple</p>
                                      </div>
                                    </div>

                                  </div>
                                </Col>

                                <Col md="6">
                                  <div>
                                    <div className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">Why do we use it ?</h5>
                                        <p className="text-muted">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. </p>
                                      </div>
                                    </div>

                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Collapse>
                        </Card> */}
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  )














}

export default Faqs;