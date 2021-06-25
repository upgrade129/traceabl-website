import PropTypes from 'prop-types'
import React, { useState, useEffect } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  CardBody,
  Media,
  Button,
  Form, FormGroup, Label, Input, FormText ,Modal
} from "reactstrap"


// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// Redux
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb"

import avatar from "../../assets/images/users/avatar-1.jpg"
// actions
import { editProfile, resetProfileFlag } from "../../store/actions"


const UserProfile = props => {
  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [idx, setidx] = useState(1)
  const [modal_xlarge, setmodal_xlarge] = useState(false)
  const [modal_fullscreen, setmodal_fullscreen] = useState(false)
 
  function tog_xlarge() {
    setmodal_xlarge(!modal_xlarge)
    removeBodyCss()
  }
  function tog_fullscreen() {
    setmodal_fullscreen(!modal_fullscreen)
    removeBodyCss()
  }
  function removeBodyCss() {
    document.body.classList.add("no_padding")
  }


  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"))
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        setname(obj.displayName)
        setemail(obj.email)
        setidx(obj.uid)
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        setname(obj.username)
        setemail(obj.email)
        setidx(obj.uid)
      }
      setTimeout(() => {
        props.resetProfileFlag();
      }, 3000);
    }
  }, [props.success,props])

  function handleValidSubmit(event, values) {
    props.editProfile(values)
  }
  var updatedAvatar=avatar;
 
  function uAvatar(e) {
    alert(e.target.user.value);
    e.preventDefault()
    const {name} = e.target.user.value;
    updatedAvatar=name;
    alert(updatedAvatar);
}
  return (
    
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb title="Minible" breadcrumbItem="Profile" />

          <Row>
            <Col lg="12">
              {props.error && props.error ? (
                <Alert color="danger">{props.error}</Alert>
              ) : null}
              {props.success && props.success ? (
                <Alert color="success">{props.success}</Alert>
              ) : null}
              
              <Card>
                <CardBody>
                  <Media className="d-flex">
                    <div className="ms-3">
                      <img
                        src={updatedAvatar}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <Media className="flex-1 align-self-center">
                      <div className="text-muted">
                        <h5>{name}</h5>
                        <p className="mb-1">{email}</p>
                        <p className="mb-0">Id no: #{idx}</p>
                      </div>
                    </Media>
                  </Media>
                  <div className="mt-3 text-end">
                        <button
                           onClick={() => {
                            tog_xlarge()
                          }}
                          className="btn btn-primary w-sm waves-effect waves-light"
                          type="submit"
                          data-toggle="modal"
                          data-target=".bs-example-modal-xl"
                        >
                          Update Brand Logo
                        </button>
                        <Modal
                        size="xl"
                        isOpen={modal_xlarge}
                        toggle={() => {
                          tog_fullscreen()
                        }}
                      >
                        <div className="modal-header">
                          <h5
                            className="modal-title mt-0"
                            id="myExtraLargeModalLabel"
                          >
                            <form onSubmit={{uAvatar}}>
                                <label>
                                  Logo URL
                                  <br/>
                                  <input type="text" name="name" />
                                </label>
                                <br/>
                                <input type="submit" value="Submit" />
                              </form>
                            </h5>
                          <button
                            onClick={() => {
                              setmodal_xlarge(false)
                            }}
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                      </Modal>
                      </div>

                </CardBody>
              </Card>
            </Col>
          </Row>

          <h4 className="card-title mb-4">Change User Name</h4>

          <Card>
            <CardBody>
              <AvForm
                className="form-horizontal"
                onValidSubmit={(e, v) => {
                  handleValidSubmit(e, v)
                }}
              >
                <div className="form-group">
                  <AvField
                    name="username"
                    label="User Name"
                    value={name}
                    className="form-control"
                    placeholder="Enter User Name"
                    type="text"
                    required
                  />
                  <AvField name="idx" value={idx} type="hidden" />
                </div>
                <div className="text-center mt-4">
                  <Button type="submit" color="danger">
                    Update User Name
                  </Button>
                </div>
              </AvForm>
            </CardBody>
          </Card>


          {/* Update Password  Old Password
                          New Password
Confirm New Password*/}
          <h4 className="card-title mb-4">Change/Update Password</h4>
          <Card>
            <CardBody>
              <Form>
      <Row>
          <FormGroup row>
        <Label for="examplePassword" sm={2}>Old Password</Label>
        <Col sm={5} style={{marginBottom:"5px"}}>
          <Input type="password" name="oldpassword" id="oldPassword" placeholder="Old Password" />
        </Col>
      </FormGroup>
     

      <FormGroup row>
        <Label for="examplePassword" sm={2}>New Password</Label>
        <Col sm={5} style={{marginBottom:"5px"}}>
          <Input type="password" name="newpassword" id="newPassword" placeholder="New Password" />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="examplePassword" sm={2}>Confirm Password</Label>
        <Col sm={5} style={{marginBottom:"5px"}}>
          <Input type="password" name="Confirmpassword" id="confirmPassword" placeholder="Confirm New Password" />
        </Col>
      </FormGroup>

     
      
      <FormGroup check row>
        <Col >
        <div className="text-center mt-4">
                  <Button type="submit" color="danger">
                    Update Password
                  </Button>
                </div>
        </Col>
      </FormGroup>
      </Row>
    </Form>
    </CardBody>
    </Card>
         

        </Container>
      </div>
    </React.Fragment>
  )
}

UserProfile.propTypes = {
  editProfile: PropTypes.func,
  error: PropTypes.any,
  success: PropTypes.any
}

const mapStatetoProps = state => {
  const { error, success } = state.Profile
  return { error, success }
}

export default withRouter(
  connect(mapStatetoProps, { editProfile, resetProfileFlag })(UserProfile)
)
