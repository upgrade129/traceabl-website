import React from "react";
import {
  CardContainer,
  CardWrapper,
  MainContainer,
  ImageContainer,
  FormContainer,
  LogoContainer,
  ParentContainer,
} from "./loginContainerStyles";
import logo from "../../../assets/images/tlogo.jpg";

const LoginContainer = ({ children }) => {
  return (
    <ParentContainer>
      <LogoContainer>
        <img
          src={logo}
          alt="main_logo"
          height="50"
          className="logo logo-dark"
        />
      </LogoContainer>
      <MainContainer>
        <CardContainer>
          <CardWrapper className="p-4">
            <ImageContainer>
              <h3>
                Your Journey. Retold With Transparency.
                <br />
                Via Digitally Verified Supply Chain
                <br />
                Tracing
              </h3>
            </ImageContainer>
            <FormContainer className="pl-2 pr-2">{children}</FormContainer>
          </CardWrapper>
        </CardContainer>
      </MainContainer>
    </ParentContainer>
  );
};

export default LoginContainer;
