import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 3px 5px 2px rgba(255, 255, 255, 0.3);
  background: #fff;
  /* position: fixed; */
  position: static;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalWrapper1 = styled.div`
  height: 550px;
  width: 530px;
  background-color: #fff;
  /* padding-top: 2rem; */
  color: #111;
  overflow-y: scroll;
`;

export const ImgWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 10px;
`;

export const ImgContent = styled.img`
  height: 140px;
  width: 120px;
  background-size: cover;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CloseIcon = styled(GrClose)`
  height: 25px;
  width: 25px;
  color: #111;
  cursor: pointer;
`;
