import React from "react";
import { Row, Col, Card, Progress, CardBody } from "reactstrap";
import { tableData } from "./tableData";

const TableView = () => {
  return (
    <>
      <Col className="col-12">
        <Card>
          <CardBody>
            <Row>
              {tableData.map((tData, index) => {
                return (
                  <div className="table_data">
                    <Col>
                      <a href="/journeyview">#{tData.pro_Id}</a>
                    </Col>
                    <Col>{tData.pro_name}</Col>
                    <Col>{tData.dt_update}</Col>
                    <Col>{tData.stage}</Col>
                    <Col>{tData.category}</Col>
                    <Col>{tData.season}</Col>
                    <Col>
                      <Progress color="primary" value={tData.progress}>
                        {tData.progress}
                      </Progress>
                    </Col>
                  </div>
                );
              })}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default TableView;
