import React, { useState, useEffect } from "react"
import { Container } from "reactstrap"

import {
    Row,
    Col,
    Card,
    CardTitle,
    CardText,
    CardBody,
    CardImg,
    NavLink,
    NavItem,
    Nav,
    TabPane,
    TabContent,
    Table,

} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import classnames from "classnames"
import './supplier.css';
// import images
import img1 from "../../assets/images/small/img-1.jpg"
import img4 from "../../assets/images/small/img-4.jpg"
import imgA from "../../assets/images/small/C.jpg"
import imgB from "../../assets/images/small/R.jpg"
import imgB2 from "../../assets/images/small/E.jpg"
import imgC from "../../assets/images/small/I3.jpg"
import ProductDetails from "./productDetails"
import axios from 'axios'

const ProductExist = (props) => {
    const [activeTabJustify, setactiveTabJustify] = useState("5")
    const [productDetail, setProductDetail] = useState(props.location.productprops)

    
  

    useEffect(()=>{
        
        console.log(productDetail)
        
    },[])

    function toggleCustomJustified(tab) {
        if (activeTabJustify !== tab) {
            setactiveTabJustify(tab)
        }
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title="Traceabl" breadcrumbItem="Product Details" />

                    <div>
                        <a href='/products'><button className='buttonFix'> Back</button></a>

                    </div>
                    <Row>
                        <Col xl={4}>
                            <Card>
                                <CardImg top  className="img-fluid" src={productDetail.images} alt="Card image cap" />

                                <CardBody>

                                    <CardTitle className="text-center h4 mt-0">PRODUCT NAME</CardTitle>

                                    <CardText className="text-center">
                                    {productDetail.prod_name}
                                    </CardText>

                                    <CardTitle className="h4">Product Name</CardTitle>
                                    <p className="card-title-desc">
                                    {productDetail.prod_name}
                                    </p>

                                    <CardTitle className="h4">Manufacturer Name</CardTitle>
                                    <p className="card-title-desc">
                                        WINTEXT Trims Pvt. Ltd.
                                    </p>

                                    <CardTitle className="h4">Manufacturer Brand</CardTitle>
                                    <p className="card-title-desc">
                                        Buttons, Rivets , Labels
                                    </p>

                                    <CardTitle className="h4">Price</CardTitle>
                                    <p className="card-title-desc">
                                        $400
                                    </p>

                                    <CardTitle className="h4">Category</CardTitle>
                                    <p className="card-title-desc">
                                        {productDetail.apparel_category}
                                    </p>

                                    <CardTitle className="h4">Product Description</CardTitle>
                                    <p className="card-title-desc">
                                    {productDetail.product_description}
                                    </p>

                                </CardBody>

                            </Card>
                        </Col>
                        <Col xl={8}>
                            <Card>
                                <CardBody>
                                    {/* <CardTitle className="h4">Custom Tabs</CardTitle>
                                    <p className="card-title-desc">
                                        Example of custom tabs
                                    </p> */}

                                    <Nav tabs className="nav-tabs-custom nav-justified">
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabJustify === "5",
                                                })}
                                                onClick={() => {
                                                    toggleCustomJustified("5")
                                                }}
                                            >
                                                <span className="d-block"><i className="fas fa-stamp"></i></span>
                                                <span className="d-none d-sm-block">
                                                    Certifications</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabJustify === "6",
                                                })}
                                                onClick={() => {
                                                    toggleCustomJustified("6")
                                                }}
                                            >
                                                <span className="d-block"><i className="fas fa-tasks"></i></span>
                                                <span className="d-none d-sm-block">Tasks</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabJustify === "7",
                                                })}
                                                onClick={() => {
                                                    toggleCustomJustified("7")
                                                }}
                                            >
                                                <span className="d-block"><i className="fas fa-images"></i></span>
                                                <span className="d-none d-sm-block">Badges</span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={activeTabJustify}>
                                        <TabPane tabId="5" className="p-3">
                                            <Row>
                                                <Col lg={12}>
                                                    <Card>
                                                        <CardBody>
                                                            {/* <CardTitle className="h4">Responsive tables </CardTitle>
                                                            <p className="card-title-desc">
                                                                Create responsive tables by wrapping any <code>.table</code>{" "}
                                                                in <code>.table-responsive</code>
                                                                to make them scroll horizontally on small devices (under
                                                                768px).
                                                            </p> */}
                                                            <div className="table-responsive">
                                                                <Table className="table mb-0">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>#</th>
                                                                            <th>Name</th>
                                                                            <th>Type</th>
                                                                            <th>Expiration Date</th>
                                                                            <th>Document No.</th>
                                                                            <th>Issue Date</th>
                                                                            <th>Issue By</th>
                                                                            <th>Attachments</th>
                                                                            <th>Status</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>Gots</td>
                                                                            <td>Certificate</td>
                                                                            <td>19-03-2021</td>
                                                                            <td>VVD32ND</td>
                                                                            <td>19-03-2021</td>
                                                                            <td>Omicert</td>
                                                                            <td><a href="#">Show</a></td>
                                                                            <td>Verified</td>
                                                                        </tr>
                                                                        <tr>
                                                                        <th scope="row">2</th>
                                                                            <td>SEDEX</td>
                                                                            <td>Membership</td>
                                                                            <td>19-03-2021</td>
                                                                            <td>DS234BS</td>
                                                                            <td>19-03-2021</td>
                                                                            <td>Breus</td>
                                                                            <td><a href="#">Show</a></td>
                                                                            <td>Verified</td>
                                                                        </tr>
                                                                        <tr>
                                                                        <th scope="row">3</th>
                                                                            <td>OCS</td>
                                                                            <td>Certificate</td>
                                                                            <td>19-03-2021</td>
                                                                            <td>RTW69LA</td>
                                                                            <td>19-03-2021</td>
                                                                            <td>BSI</td>
                                                                            <td><a href="#">Show</a></td>
                                                                            <td>Pending</td>
                                                                        </tr>                                                                        
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="6" className="p-3">
                                        <Row>
                                                <Col lg={12}>
                                                    <Card>
                                                        <CardBody>
                                                            {/* <CardTitle className="h4">Responsive tables </CardTitle>
                                                            <p className="card-title-desc">
                                                                Create responsive tables by wrapping any <code>.table</code>{" "}
                                                                in <code>.table-responsive</code>
                                                                to make them scroll horizontally on small devices (under
                                                                768px).
                                                                </p> */}
                                                            <div className="table-responsive">
                                                                <Table className="table mb-0">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>#</th>
                                                                            <th>Task</th>
                                                                            <th>Status</th>
                                                                            <th>Action</th>
                                                                            <th>Date Assigned</th>
                                                                            <th>Last Update</th>                                                                            
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <th scope="row">1</th>                                                                            
                                                                            <td>Task 1</td>
                                                                            <td>Completed</td>
                                                                            <td><a href="#">Click here to verify</a></td>
                                                                            <td>12-03-2021</td>
                                                                            <td>1 Day Ago</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">2</th>                                                                            
                                                                            <td>Task 2</td>
                                                                            <td>Completed</td>
                                                                            <td><a href="#">Click here to verify</a></td>
                                                                            <td>12-02-2021</td>
                                                                            <td>2 Day Ago</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">3</th>                                                                            
                                                                            <td>Task 3</td>
                                                                            <td>Assigned</td>
                                                                            <td><a href="#">Send A Reminder</a></td>
                                                                            <td>18-04-2021</td>
                                                                            <td>3 Day Ago</td>
                                                                        </tr>   
                                                                        <tr>
                                                                            <th scope="row">4</th>                                                                            
                                                                            <td>Task 3</td>
                                                                            <td>Verified</td>
                                                                            <td><a href="#">N/A</a></td>
                                                                            <td>18-04-2021</td>
                                                                            <td>8 Day Ago</td>
                                                                        </tr>                                                                   
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </TabPane> 
                                        <TabPane tabId="7" className="p-3">
                                            <Row className="row mb-4">
                                                <Col lg={4}>
                                                    <img
                                                        className="rounded mr-2"
                                                        alt=""
                                                        width="200"
                                                        src={imgA}
                                                    />
                                                </Col>
                                                <Col lg={4}>
                                                    <img
                                                        className="rounded mr-2"
                                                        alt=""
                                                        width="200"
                                                        src={imgB2}
                                                    />
                                                </Col>
                                               
                                                <Col lg={4}>
                                                    <img
                                                        className="rounded mr-2"
                                                        alt=""
                                                        width="200"
                                                        src={imgC}
                                                    />
                                                </Col>
                                                
                                            </Row>
                                            <Row className="row mb-4">
                                            <Col lg={4}>
                                                    <img
                                                        className="rounded mr-2"
                                                        alt=""
                                                        width="200"
                                                        src={imgB}
                                                    />
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






















export default ProductExist;