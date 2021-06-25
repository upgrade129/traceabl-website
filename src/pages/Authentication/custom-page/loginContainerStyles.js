import { Row, Col, Alert, Container, CardBody, Card } from "reactstrap";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 0.5rem;
  width: 100%;
  height: 100vh;
`;

export const CardContainer = styled(Card)`
  width: 750px;
  /* height: 520px; */
  background-color: rgba(255, 255, 255, 0.7);
`;
export const CardWrapper = styled(CardBody)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 !important;
`;
export const ImageContainer = styled.div`
  background-image: url("https://images.pexels.com/photos/3536991/pexels-photo-3536991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  background-size: cover;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h3 {
    font-size: 1rem;
    color: #fff !important;
    font-weight: 400;
    letter-spacing: 1px;
  }
`;

export const FormContainer = styled.div`
  margin-top: 1.3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  h5 {
    font-size: 1rem !important;
    text-align: center;
  }
  p {
    font-size: 0.9rem !important;
    letter-spacing: 1px;
    text-align: center;
  }
`;

export const SocialIcons = styled.div`
  .facebook {
    font-size: 1.5rem;
    color: blue;
    margin-right: 7px;
    cursor: pointer;
  }
  .twitter {
    font-size: 1.75rem;
    color: skyblue;
    cursor: pointer;
  }
  .google {
    font-size: 1.7rem;
    color: red;
    margin-left: 7px;
    cursor: pointer;
  }
`;

export const LogoContainer = styled.div`
  width: 750px;
  margin: 0 auto;
  padding-top: 3rem;
  display: flex;
  justify-content: flex-end;
  img {
    margin-right: 6rem;
  }
`;

export const ParentContainer = styled.div`
  background-color: white;
`;
