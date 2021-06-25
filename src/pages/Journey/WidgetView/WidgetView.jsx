import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "../styles.css";
import { products } from "./widgetData";
import { Row, Col, Card } from "reactstrap";
import { Link } from "react-router-dom";
import {
  PaginationContainer,
  ProductImage,
  ProductName,
  ProductNumber,
  ProductType,
  SkuId,
} from "./widgetStyles";
const axios = require("axios");

require("dotenv").config();
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`,
});

const WidgetView = () => {
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
  ];

  // // pagination logic
  // const [pageNumber, setPageNumber] = useState(0);
  // const dataPerPage = 8;
  // const pageVisited = pageNumber * dataPerPage;

  // const pageCount = Math.ceil(datas.length / dataPerPage);
  // const pageChange = ({ selected }) => {
  //   setPageNumber(selected);
  // };

  const [modal, setmodal] = useState(false);
  const [productDetails, setProductDetails] = useState([]);
  const [tdata, setTdata] = useState([]);

  useEffect(() => {
    var brandid = localStorage.getItem("brandid");
    instance
      .get(`/prod/getallbybrand/${brandid}`)
      .then(function (response) {
        console.log("journey res", response.data.data);
        setProductDetails(response.data.data);

        if (Array.isArray(response.data.data)) {
          var rows = [];
          response.data.data.map((data) => {
            rows.push({
              pid: data.batch_id,
              pname: data.prod_name,
              date: data.timestamp,
              currentstage: "inprocess",
              category: data.apparel_category,
              etho: data.etho_coin,
            });
          });
        }

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
  }, [setProductDetails]);

  // items to display per page
  
  const displayDatas = () =>{
    if(Array.isArray(productDetails)){
      productDetails.map((data, index) => {
        return (
          <Col lg={3} key={index}>
            <Link
              to={{
                pathname: "/journeyview",
                prod_details: data,
              }}
            >
              <Card>
                <Row className="g-0 align-items-end ">
                  <Col md={6}>
                    <ProductImage
                      loading="lazy"
                      decoding="async"
                      className="img-fluid px-3"
                      src={data.images[1]}
                      alt="Card image cap"
                    />
                  </Col>
                  <Col md={6}>
                    <div className="pb-3 px-2">
                      <ProductName>{data.prod_name}</ProductName>
                      <SkuId>SKU ID : {data.batch_id}</SkuId>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-around text-center pb-3 pt-3">
                  <Col>
                    <ProductNumber>{data.prod_code}</ProductNumber>
                  </Col>
                  <Col>
                    <ProductType>{data.apparel_category}</ProductType>
                  </Col>
                </Row>
              </Card>
            </Link>
            {/* <a href="/journeyview">
                
              </a> */}
          </Col>
        );
      });
    
    }
  } 
  return (
    <>
      {/* displaying data */}
      <Row>{displayDatas}</Row>

      {/* pagination component */}
      <Row>
        <PaginationContainer className="pg_btm">
          {/* <Col>
            showing {pageVisited} to {pageVisited * 2} of
            {datas.length} entries
          </Col> */}
          <Col>
            {/* <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={pageChange}
              containerClassName={"pg_btns"}
              previousLinkClassName={"prev_btn"}
              nextLinkClassName={"prev_next"}
              disabledClassName={"pg_disable"}
              activeClassName={"pg_active"}
            /> */}
          </Col>
        </PaginationContainer>
      </Row>
    </>
  );
};

export default WidgetView;
