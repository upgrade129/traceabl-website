import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import {
  ImgWrapper,
  ModalWrapper1,
  ImgContent,
  CloseIcon,
} from "./modalStyles";
import "../styles.css";

// material ui styling
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:focus": {
      outline: "none",
      border: "none",
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    boxShadow:
      "0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.06), 0 0 2px rgba(0, 0, 0, 0.07)",
  },
}));

const ImagePopup = ({
  handleClose,
  open,
  setImage,
  characters,
  supplierImages,
  tempdata,
  updateCharacters,
}) => {
  console.log("supplier images in IMG", supplierImages);
  const classes = useStyles();

  return (
    <>
      <Modal
        disableScrollLock
        hideBackdrop
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableAutoFocus
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <ModalWrapper1 className="modal1">
              <div className="close_icon" onClick={handleClose}>
                <CloseIcon />
              </div>
              <ImgWrapper>
                {supplierImages.map((image) => (
                  <React.Fragment>
                    <ImgContent
                      onClick={(e) => {
                        var update = { ...tempdata, bannerImg: e.target.src };
                        characters.map((t1,index) => {
                          if(t1.supp_id == update.supp_id){ 
                            characters[index] = update
                        } });

                        console.log(characters);
                        updateCharacters(characters);
                        handleClose();
                        
                      }}
                      src={image}
                      effect="blur"
                      alt="loading_images"
                      height="140px"
                      width="120px"
                    />
                  </React.Fragment>
                ))}
              </ImgWrapper>
            </ModalWrapper1>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ImagePopup;
