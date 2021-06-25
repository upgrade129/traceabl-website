import React from "react";
import {
  ImgWrapper,
  Background,
  ModalWrapper1,
  ImgContent,
  CloseIcon,
} from "./modalStyles";
import "../styles.css";
import axios from "axios";

const ImageModal = ({ showModal, setShowModal }) => {
  return <div>{!showModal ? <Background></Background> : null}</div>;
};

export default ImageModal;
