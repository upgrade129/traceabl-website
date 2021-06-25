import React from "react"
import { Container, Row, Col } from "reactstrap"
import Facebook from "../../assets/images/footer/facebook.svg"
import Insta from "../../assets/images/footer/instagram.svg"
import  Linkedin from "../../assets/images/footer/linkedin.svg"


const Footer = () => {
  return ( 
    // #263a81
    <React.Fragment>
      <footer className="footer" style={{background:"#263a81",color:"white"}}>
        <Container >
          <Row >
            <Col lg={8} sm={6}>{new Date().getFullYear()}  © Traceabl</Col>
            {/* <Col sm={4}>
            <div>
                <a  href="/home" style={{color:"white"}}>HOME</a>
            </div>
            </Col> */}
            <Col lg={4} sm={6}>
            <div>
            {/* <a style={{color:"red"}} href="#" > <img src={Facebook}  height="25" color="red" style={{marginRight:"10px"}} /></a> */}
            <a href=" https://www.linkedin.com/company/traceablhq"><img src={Linkedin}  height="25" style={{marginRight:"10px"}} className="style.icon"/></a>
            
            <a href="https://www.instagram.com/traceabl.io/"><img src={Insta }  height="25" style={{marginRight:"10px",fill:"red"}} /></a>
            
            
 
            </div>
            </Col>
            <Col>
            </Col>
          </Row>
          
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
