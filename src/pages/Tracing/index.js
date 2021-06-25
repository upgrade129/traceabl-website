import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";

import { Row, Col, Card, CardBody } from "reactstrap";

import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Path } from "leaflet";
import { Button } from "bootstrap";

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

const Tracing = () => {
  const [batchDetail, setBatchDetail] = useState([]);
  const [batchid, setBatchid] = useState("1");
  const [prodDetail, setProdDetail] = useState([]);
  const [supplyDetail, setSupplyDetail] = useState([]);

  useEffect(() => {
    instance
      .get(`/prod/getProdID`)
      .then(function (response) {
        console.log("badge res", response.data.data);
        setBatchDetail(response.data.data);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, [setBatchDetail]);

  // const handleBatch = () =>{
  //   console.log("batch_id",batchid)
  //   instance2.get(`/prod/getProductById/${batchid}`)
  //   .then(function (response) {
  //     console.log("prod res",response.data.data);
  //     setProdDetail(response.data.data);
  //   })
  //   .catch(function (error) {
  //     console.log("error",error);
  //   });

  //   instance3.get(`/prod/supplychainById/${batchid}`)
  //   .then(function (response) {
  //     console.log("chain res",response.data.data);
  //     setSupplyDetail(response.data.data);
  //   })
  //   .catch(function (error) {
  //     console.log("error",error);
  //   });
  // }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Traceabl" breadcrumbItem="Tracing" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <Row>
                    <h4 className="card-title">Product Tracing 1</h4>
                  </Row>
                  <br />
                  <br />
                  <form>
                    <Row>
                      <Col xl={3}>Product ID</Col>
                      <Col xl={6}>
                        <div className="col-md-10">
                          <select
                            className="form-control"
                            onChange={(e) => {
                              setBatchid(e.target.value);
                            }}
                          >
                            <option>Select Batch ID</option>
                            {Array.isArray(batchDetail) ? 

                            batchDetail.map((batch) => (
                              <option value={batch.batch_id}>
                                {batch.batch_id}
                              </option>
                            ))
                            :
                            ""
                            }
                            
                            {batchid}
                          </select>
                          <br />
                          {console.log("batch..",batchid)}
                          {batchid == 1 ? 
                          
                          <Link
                            className="btn btn-success"
                          >
                            Select the batchId
                          </Link>

                          :
                          <Link
                            to={{
                              pathname: "/tracedetails",
                              batchid: batchid,
                            }}
                            className="btn btn-success"
                          >
                            Search
                          </Link>
                          }
                          
                        </div>
                      </Col>
                    </Row>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Tracing;
