import React from "react"
import { Container } from "reactstrap"

import { 
   Row,
   Col,
   Card,
   CardTitle,
   CardText,
   CardBody,
   CardSubtitle

 } from "reactstrap"
 
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import MiniWidget from "./mini-widget"

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"
import { connect } from "react-redux"


const series1 = [{
  data: [25, 66, 41, 89, 63, 25, 44, 20, 36, 40, 54]
}]

const options1 = {
  fill: {
    colors: ['#5b73e8']
  },
  chart: {
    width: 70,
    sparkline: {
      enabled: !0
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    fixed: {
      enabled: !1
    },
    x: {
      show: !1
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: !1
    }
  }
};

const series2 = [70]

const options2 = {
  fill: {
    colors: ['#34c38f']
  },
  chart: {
    sparkline: {
      enabled: !0
    }
  },
  dataLabels: {
    enabled: !1
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '60%'
      },
      track: {
        margin: 0
      },
      dataLabels: {
        show: !1
      }
    }
  }
};

const series3 = [55]

const options3 = {
  fill: {
    colors: ['#5b73e8']
  },
  chart: {
    sparkline: {
      enabled: !0
    }
  },
  dataLabels: {
    enabled: !1
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '60%'
      },
      track: {
        margin: 0
      },
      dataLabels: {
        show: !1
      }
    }
  }
};

const LoadingContainer = () => <div>Loading...</div>

const Dashboard = (props) => {
  const selectedPlace = {}

  // function onMarkerClick() {
  //   alert("You clicked in this marker")
  // }

  const reports = [
    {
      id: 1,
      icon: "mdi mdi-arrow-up-bold",
      title: "Products",
      value: 34152,
      prefix: "",
      suffix: "",
      badgeValue: "2.65%",
      decimal: 0,
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "success",
      desc: "since last week",
      series: series1,
      options: options1,

    },
    {
      id: 2,
      icon: "mdi mdi-arrow-down-bold",
      title: "Suppliers",
      value: 5643,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      prefix: "",
      suffix: "",
      badgeValue: "0.82%",
      color: "danger",
      desc: "since last week",
      series: series2,
      options: options2,
    },
    {
      id: 3,
      icon: "mdi mdi-arrow-down-bold",
      title: "Badgets",
      value: 45254,
      decimal: 0,
      prefix: "",
      suffix: "",
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      badgeValue: "6.24%",
      color: "danger",
      desc: "since last week",
      series: series3,
      options: options3,
    },  
  ];

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
                <CardTitle className="h3 mt-0">Welcome John,</CardTitle>
                <CardText>
                       With supporting text below as a natural lead-in to additional
                  content.    With supporting text below as a natural lead-in to additional
                  content.    With supporting text below as a natural lead-in to additional
                  content.   With supporting text below as a natural lead-in to additional
                  content.   With supporting text below as a natural lead-in to additional
                  content.   With supporting text below as a natural lead-in to additional
                  content.   With supporting text below as a natural lead-in to additional
                  content.   With supporting text below as a natural lead-in to additional
                  content.
                </CardText>               
              </Card>
            </Col>         
          </Row>

          <Row>
            <MiniWidget reports={reports} />
          </Row>

          <Row>
            <Col lg={8}>
               <Card>
                <CardBody>
                  <CardTitle>Company Location</CardTitle>
                  <CardSubtitle className="mb-3">
                    Example of google maps.Example of google maps.Example of google maps.Example of google maps.Example of google maps.
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
                        title={"The marker`s title will appear as a tooltip."}
                        name={"SOMA"}
                        position={{ lat: 37.778519, lng: -122.40564 }}
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

            <Col lg={4}>
              <Card>
                <CardBody>
                  <CardTitle>Company Preview</CardTitle>
                  <CardSubtitle className="mb-3">
                    Example of google maps.
                  </CardSubtitle>
                  {/* <div
                    id="gmaps-overlay"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    <Map
                      google={props.google}
                      zoom={14}
                      style={{ width: "100%", height: "100%" }}
                      initialCenter={{
                        lat: 40.854885,
                        lng: -88.081807,
                      }}
                    >
                      <Marker
                        onClick={(a, b, c) => {
                          onMarkerClick(a, b, c)
                        }}
                      />
                      <InfoWindow>
                        <div>
                          <h1>{selectedPlace.name}</h1>
                        </div>
                      </InfoWindow>
                    </Map>
                  </div> */}
                </CardBody>
              </Card>
            </Col>
          </Row>

       
        </Container>
      </div>
    </React.Fragment>
  )
}

export default connect(
  null,
  {}
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
    v: "3",
  })(Dashboard)
)