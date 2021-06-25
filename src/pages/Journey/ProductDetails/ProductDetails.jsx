import React, { useState, useEffect } from "react";
import { listDatas } from "./listData";
import PlusIcon from "../plus-icon.png";
import "../styles.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Col, Row } from "reactstrap";
import ImagePopup from "../ImageModal/ImagePopup";
import { ToastContainer, toast } from "react-toastify";

const axios = require("axios");

require("dotenv").config();
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`,
});

const instance1 = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`,
});

const instance2 = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`,
});

const instance3 = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`,
});

const instance4 = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`,
});

const ProductDetails = (props) => {
  const [characters, updateCharacters] = useState([]);
  const [image, setImage] = useState(PlusIcon);
  const [open, setOpen] = useState(false);
  const [supplierImg, setSupplierImg] = useState([]);
  const [tempdata, setTempdata] = useState([]);
  const [batch_id, setBatchId] = useState(props.prod_details.batch_id);
  const [prod_details, setProd_details] = useState(props.prod_details);
  const [isedit, setisedit] = useState(false);
  const [publish_id, setPublish_id] = useState("");

  const plus =
    "https://firebasestorage.googleapis.com/v0/b/traceabl.appspot.com/o/products%2Fplus.png?alt=media&token=4beea856-f092-4576-83e6-17cccde7639f";

  //   Adjustable list
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    var batch = props.prod_details.batch_id;
    var brand = localStorage.getItem("id");

    //get the joureny details if available
    instance3
      .get(`/publish/getpublishdetails/${brand}/${batch}`)
      .then(function (response) {
        console.log("get publish details response", response);
        if (!response.data.length) var isempty = true;

        if (isempty) {
          console.log("empty");
          instance
            .get(`/publish/getsuppliers/${batch}`)
            .then(function (response) {
              console.log("publish details res", response.data.data);

              var details = {
                supplier_id: response.data.data[0].supplier_id,
              };
              console.log("details", details);
              instance1
                .post(`/publish/suppdetail`, details)
                .then(function (response) {
                  console.log("supplier details on publish res", response.data);
                  var suppdetails = response.data.data;
                  var imagedetails = response.data.imgurl;
                  var alldetails = suppdetails.map((t1) => ({
                    ...t1,
                    ...imagedetails.find((t2) => t2.supp_id === t1._id),
                  }));
                  const withindex = alldetails.map((t1, index) => ({
                    ...t1,
                    id: `${index + 1}`,
                    bannerImg: plus,
                  }));
                  console.log("with index", withindex);
                  updateCharacters(withindex);
                })
                .catch(function (error) {
                  console.log("error", error);
                });
            })
            .catch(function (error) {
              console.log("error", error);
            });
        } else {
          updateCharacters(response.data[0].publishdetails);
          setisedit(true);
          setPublish_id(response.data[0]._id);
        }
      });
  }, []);
  return (
    <>
     <ToastContainer />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {characters.map((character, index) => {
                return (
                  <Draggable
                    key={character.id}
                    draggableId={character.id}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Row className="mb-4">
                          <div className="grr">
                            <Col
                              lg="6"
                              onClick={() => {
                                handleOpen();
                                setSupplierImg(character.images);
                                setTempdata(character);
                              }}
                            >
                              <img
                                src={character.bannerImg}
                                defaultValue={character.bannerImg}
                                style={{
                                  width: "120px",
                                  height: "110px",
                                  cursor: "pointer",
                                }}
                                alt="+ Uplaod Image"
                              />
                            </Col>
                            <Col lg="12">
                              <div>
                                <h5>
                                  {index + 1} . {character.type}
                                </h5>
                                <p>Services : {character.services}</p>
                              </div>
                            </Col>
                          </div>
                        </Row>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      {isedit ? 
        <button
          type="button"
          onClick={() => {
            console.log("final details", characters);
            var publishArray = [];
            //characters.map((character)=>{ publishArray.push([{step:character.type,services:character.services}])})
            var details = {
              publish_id : publish_id,
              publishdetails: characters,
              batch_id: batch_id,
              prod_details: prod_details,
              brand_id: localStorage.getItem("id"),
            };
            console.log("details", details);
            instance4
              .post(`/publish/updatepublishDetails`, details)
              .then(function (response) {
                console.log("publish response", response);
                toast.success("Your Journey was edited successfully!", {
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: 0,
                });
              })
              .catch(function (error) {
                console.log("error", error);
              });
          }}
          className="btn btn-success w-sm waves-effect waves-light"
          data-toggle="modal"
          data-target=".bs-example-modal-sm"
        >
          Edit My Journey
        </button>
       : 
        <button
          type="button"
          onClick={() => {
            console.log("final details", characters);
            var publishArray = [];
            //characters.map((character)=>{ publishArray.push([{step:character.type,services:character.services}])})
            var details = {
              publishdetails: characters,
              batch_id: batch_id,
              prod_details: prod_details,
              brand_id: localStorage.getItem("id"),
            };
            console.log("details", details);
            instance2
              .post(`/publish/pubblishDetails`, details)
              .then(function (response) {
                console.log("publish response", response);
                toast.success("Your is published successfully!", {
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: 0,
                });
              })
              .catch(function (error) {
                console.log("error", error);
                toast.error("Error in Publishing the journey", {
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: 0,
                });
              });
          }}
          className="btn btn-success w-sm waves-effect waves-light"
          data-toggle="modal"
          data-target=".bs-example-modal-sm"
        >
          Publish My Journey
        </button>
      }

      {/* popup for images */}
      <ImagePopup
        open={open}
        handleClose={handleClose}
        setImage={setImage}
        supplierImages={supplierImg}
        tempdata={tempdata}
        characters={characters}
        updateCharacters={updateCharacters}
      />
    </>
  );
};

export default ProductDetails;
