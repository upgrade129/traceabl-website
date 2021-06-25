import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Alert,
  Card,
  CardTitle,
  Col,
  Container,
  Table,
  Form,
  Media,
  Input,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Collapse,
  CardImg,
  CardBody,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  CardText,
} from "reactstrap";
import { storage, firebase } from "../../firbaseConfig";

// style components for fabric comp and percentage
import {
  FabricInputFields,
  RemoveButton,
  AddButton,
  FabricInputLabels,
} from "./fabricCompStyles";

import Select from "react-select";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Dropzone from "react-dropzone";
import imgPlus from "../../assets/images/small/plus.png";
import { ToastContainer, toast } from "react-toastify";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

// import images
import img1 from "../../assets/images/small/img-1.jpg";
import "react-toastify/dist/ReactToastify.css";
import { map } from "lodash";

const axios = require("axios");
//const instance = axios.create();

require("dotenv").config();

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`,
});

const instance2 = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`,
});

const instance3 = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

const instance4 = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`,
});

const instance5 = axios.create({
  baseURL: `${process.env.REACT_APP_APIKEY}`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

const ProductDetails = (props) => {
  const [modal, setmodal] = useState(false);
  const [singlebtn1, setSinglebtn1] = useState(false);
  const [singlebtn2, setSinglebtn2] = useState(false);
  const [singlebtn3, setSinglebtn3] = useState(false);
  const [singlebtn4, setSinglebtn4] = useState(false);

  const [singlebtn5, setSinglebtn5] = useState(false);

  const [singlebtn6, setSinglebtn6] = useState(false);
  const [singlebtn7, setSinglebtn7] = useState(false);

  const [singlebtn8, setSinglebtn8] = useState(false);
  const [singlebtn9, setSinglebtn9] = useState(false);

  const [singlebtn10, setSinglebtn10] = useState(false);
  const [singlebtn11, setSinglebtn11] = useState(false);

  const [singlebtn14, setSinglebtn14] = useState(false);
  const [singlebtn12, setSinglebtn12] = useState(false);
  const [singlebtn13, setSinglebtn13] = useState(false);

  const [singlebtn15, setSinglebtn15] = useState(false);
  const [singlebtn16, setSinglebtn16] = useState(false);
  const [singlebtn17, setSinglebtn17] = useState(false);

  const [selectedImgFiles, setselectedImgFiles] = useState([]);
  const [ImgFiles, setImgFiles] = useState([]);
  const [selectedBOMFiles, setselectedBOMFiles] = useState([]);
  const [BOMFiles, setBOMFiles] = useState([]);
  const [selectedTpFiles, setselectedTpFiles] = useState([]);
  const [TpFiles, setTpFiles] = useState([]);

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  const [isOpenAddproduct, setIsOpenAddproduct] = useState(false);

  const toggleAddproduct = () => setIsOpenAddproduct(!isOpenAddproduct);

  const [isOpenTechPacks, setIsOpenTechPacks] = useState(false);

  const toggleTechPacks = () => setIsOpenTechPacks(!isOpenTechPacks);

  const [isOpenBOM, setIsOpenBOM] = useState(false);

  const toggleBOM = () => setIsOpenBOM(!isOpenBOM);

  const [isOpenSupplyChain, setIsOpenSupplyChain] = useState(false);

  const toggleSupplyChain = () => setIsOpenSupplyChain(!isOpenSupplyChain);

  const [isOpenAddSupplier, setIsOpenAddSupplier] = useState(false);

  const toggleAddSupplier = () => setIsOpenAddSupplier(!isOpenAddSupplier);

  const [isOpenBadges, setIsOpenBadges] = useState(false);

  const toggleBadges = () => setIsOpenBadges(!isOpenBadges);

  //  const [isOpenMetadata, setIsOpenMetadata] = useState(false);

  //  const toggleMetadata = () => setIsOpenMetadata(!isOpenMetadata);

  const options = [
    { value: "Fabre", label: "Fabre" },
    { value: "Fabric", label: "Fabric" },
    { value: "Trims", label: "Trims" },
    { value: "Dyeing", label: "Dyeing" },
    { value: "CMT", label: "CMT" },
    { value: "Processing", label: "Processing" },
  ];

  const [prodname, setProdname] = useState("");
  const [prodcode, setProdcode] = useState("");
  const [season, setSeason] = useState("");
  const [apparel, setApparel] = useState("");
  const [specification, setSpecification] = useState("");
  const [proddes, setProddes] = useState("");
  const [fabcomp1, setFabcomp1] = useState("fabcomp1");
  const [fabcomp2, setFabcomp2] = useState("fabcomp2");
  const [fabper1, setFabper1] = useState("fabper1");
  const [fabper2, setFabper2] = useState("fabper2");
  const [supplierdetail, setSupplierdetail] = useState([]);
  const [fabredetail, setFabredetail] = useState([]);
  const [fabricdetail, setFabricdetail] = useState([]);
  const [trimsdetail, setTrimsdetail] = useState([]);
  const [dyeingdetail, setDyeingdetail] = useState([]);
  const [cmtdetail, setCmtdetail] = useState([]);
  const [processingdetail, setProcessingdetail] = useState([]);

  const [supplier_id, setSupplier_id] = useState([]);
  const [fabre1, setFabre1] = useState("Assign to supplier");
  const [fabre2, setFabre2] = useState("Choose status");
  const [fabric1, setFabric1] = useState("Assign to supplier");
  const [fabric2, setFabric2] = useState("Choose status");
  const [trim1, setTrim1] = useState("Assign to supplier");
  const [trim2, setTrim2] = useState("Choose status");
  const [dye1, setDye1] = useState("Assign to supplier");
  const [dye2, setDye2] = useState("Choose status");
  const [cmt1, setCmt1] = useState("Assign to supplier");
  const [cmt2, setCmt2] = useState("Choose status");
  const [pro1, setPro1] = useState("Assign to supplier");
  const [pro2, setPro2] = useState("Choose status");
  const [image, setImage] = useState([]);
  const [techpack, setteckpack] = useState([]);
  const [bom, setbom] = useState([]);
  const [fireimg, setfireimg] = useState([]);
  const [isEdit, setisEdit] = useState(false);
  const [prodId, setprodId] = useState("");

  // ============================
  // logic to add new input field to fabric and percentage
  const [inputList, setInputList] = useState([
    { fabricComp: "", percentage: "" },
  ]);
  // handle input change for fabric and percentage
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  // handle click event to add a new input field
  const addInputField = () => {
    setInputList([...inputList, { fabricComp: "", percentage: "" }]);
  };
  // handle click event to remove input field
  const removeInputField = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // ==========================

  useEffect(() => {
    var editdet = props.location.ProdProps;
    var iseditdet = props.location.isEdit;
    if (iseditdet) {
      console.log("its working");
      getchain(editdet.batch_id);
    }
    setisEdit(iseditdet);
    if (editdet) {
      setProdname(editdet.prod_name);
      setProdcode(editdet.prod_code);
      setSeason(editdet.season);
      setFabcomp1(editdet.fabcomp1);
      setFabcomp2(editdet.fabcomp2);
      setFabper1(editdet.fabper1);
      setFabper2(editdet.fabper2);
      setApparel(editdet.apparel_category);
      setSpecification(editdet.specification);
      setProddes(editdet.product_description);
      setImage(editdet.image);
      setTpFiles(editdet.tech_packs);
      setbom(editdet.bom);
      setprodId(editdet._id);
    }

    instance
      .get(`/supplier/getall`)
      .then(function (response) {
        console.log("res", response.data.data);
        setSupplierdetail(response.data.data);

        var fabrtemp = response.data.data.filter((sup) => sup.type == "Fabre");
        setFabredetail(fabrtemp);

        var fabrictemp = response.data.data.filter(function (fa) {
          return fa.type == "Fabric";
        });
        setFabricdetail(fabrictemp);
        console.log(fabrictemp);

        var trimtemp = response.data.data.filter(function (fa) {
          return fa.type == "Trims";
        });
        setTrimsdetail(trimtemp);

        var dyetemp = response.data.data.filter(function (fa) {
          return fa.type == "Dyeing";
        });
        setDyeingdetail(dyetemp);

        var cmttemp = response.data.data.filter(function (fa) {
          return fa.type == "CMT";
        });
        setCmtdetail(cmttemp);

        var protemp = response.data.data.filter(function (fa) {
          return fa.type == "Processing";
        });
        setProcessingdetail(protemp);
      })
      .catch(function (error) {
        console.log("error in getall suppliers", error);
      });
  }, [setSupplierdetail]);

  function getchain(batch_id) {
    instance3
      .get(`/prod/supplychainById/${batch_id}`)
      .then(function (response) {
        console.log("chain res in edit", response.data.data);
        if (response.data.data) {
          var supedt = response.data.data.stages;
          setFabre1(supedt[0].supplier1);
          setFabric1(supedt[1].supplier1);
          setTrim1(supedt[2].supplier1);
          setDye1(supedt[3].supplier1);
          setCmt1(supedt[4].supplier1);
          setPro1(supedt[5].supplier1);

          setFabre2(supedt[0].timestamp);
          setFabric2(supedt[2].timestamp);
          setTrim2(supedt[2].timestamp);
          setDye2(supedt[3].timestamp);
          setCmt2(supedt[4].timestamp);
          setPro2(supedt[5].timestamp);
        }
      })
      .catch(function (error) {
        console.log("error in getting supplychain", error);
      });
  }

  const saveProduct = () => {
    uploadTofirebase();
  };

  const editProduct = () => {
    uploadTofirebase();
  };

  const editProd = () => {
    var brandid = localStorage.getItem("brandid");
    var temp = [
      {
        [fabcomp1]: fabper1,
        [fabcomp2]: fabper2,
      },
    ];
    var random = Math.floor(Math.random() * 1000 + 1);
    var detail = {
      productId: prodId,
      brand_id: brandid,
      batch_id: random,
      prod_name: prodname,
      prod_code: parseInt(prodcode),
      season: season,
      fabric_comp: temp,
      fabcomp1: fabcomp1,
      fabcomp2: fabcomp2,
      fabper1: fabper1,
      fabper2: fabper2,
      apparel_category: "jeans",
      specification: parseInt(specification),
      product_description: proddes,
      images: fireimg,
      //images : selectedFiles,
      current_product_stage: "inprocess",
      tech_packs: techpack,
      bom: bom,
    };

    console.log("check prod update details", detail);
    instance4
      .post(`/prod/updateprod`, detail)
      .then(function (response) {
        console.log("res prod update", response);
        toast.success("Product added successfully!", {
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
        toast.error("please fill all the product details", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
        });
      });
    setisEdit(false);
    saveSupply(random);
    //saveImg(random)
    //saveBOM(random)
    //savetp(random)
  };

  const saveProd = () => {
    var brandid = localStorage.getItem("brandid");
    var temp = [
      {
        [fabcomp1]: fabper1,
        [fabcomp2]: fabper2,
      },
    ];
    var random = Math.floor(Math.random() * 1000 + 1);
    var detail = {
      brand_id: brandid,
      batch_id: random,
      prod_name: prodname,
      prod_code: parseInt(prodcode),
      season: season,
      fabric_comp: temp,
      fabcomp1: fabcomp1,
      fabcomp2: fabcomp2,
      fabper1: fabper1,
      fabper2: fabper2,
      apparel_category: "jeans",
      specification: parseInt(specification),
      product_description: proddes,
      images: fireimg,
      //images : selectedFiles,
      current_product_stage: "inprocess",
      tech_packs: techpack,
      bom: bom,
    };

    console.log("check prod details", detail);
    instance
      .post(`/prod/add`, detail)
      .then(function (response) {
        console.log("res prod add", response);
        toast.success("Product added successfully!", {
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
        toast.error("please fill all the product details", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
        });
      });

    saveSupply(random);
    //saveImg(random)
    //saveBOM(random)
    //savetp(random)
  };

  function uploadTofirebase() {
    //const db = firebase.firestore();

    console.log("fireimg", fireimg);
    fireimg.map((fire) => {
      const storageRef = storage.ref(`products/${fire.name}`).put(fire);
      storageRef.on(
        "state_changed",
        (snapShot) => {
          console.log(snapShot);
        },
        (err) => {
          console.log(err);
        },
        () => {
          storage
            .ref("products")
            .child(fire.name)
            .getDownloadURL()
            .then((url) => {
              console.log("firebase url", url);
              var tempimg = fireimg;
              tempimg.push(url);
              setfireimg(tempimg);
              if (isEdit) {
                editProd();
              } else {
                saveProd();
              }

              // db.collection("Product")
              //   .add({
              //     CurTime: Date.now(),
              //     Image: url,
              //     Name: name,
              //     Brand: brand,
              //     Description: description,
              //     Price: price,
              //     Category: category,
              //   })
              //   .then((e) => {
              //     setLoading(false);
              //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
              //   })
              //   .catch((error) => {
              //     console.log(error);
              //   });
            });
        }
      );
    });
  }

  const saveSupply = (b_id) => {
    console.log("id's in console", supplier_id);
    var brandid = localStorage.getItem("brandid");
    var temp_detail = {
      supplier_id: supplier_id,
      brand_id: brandid,
      batch_id: b_id,
      stages: [
        { stage: 1, supplier1: fabre1, timestamp: fabre2, status: "done" },
        { stage: 2, supplier1: fabric1, timestamp: fabric2, status: "done" },
        { stage: 3, supplier1: trim1, timestamp: trim2, status: "done" },
        { stage: 4, supplier1: dye1, timestamp: dye2, status: "done" },
        { stage: 5, supplier1: cmt1, timestamp: cmt2, status: "done" },
        { stage: 6, supplier1: pro1, timestamp: pro2, status: "done" },
      ],
    };

    //console.log("supply",temp_detail)

    instance2
      .post(`/prod/supplychain`, temp_detail)
      .then(function (response) {
        console.log("res supply add", response);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };

  // const saveImg = (b_id) => {
  //   if(ImgFiles){
  //     const formData = new FormData();
  //     formData.append('file',ImgFiles);
  //     formData.append('batch_id',b_id)
  //     instance3.post(`prod/uploadimg`,formData)
  //     .then(function (response) {
  //      console.log("res img add",response);
  //      })
  //     .catch(function (error) {
  //       console.log("error",error);
  //    });
  //   }
  // }

  // const saveBOM = (b_id) => {
  //   if(BOMFiles){
  //     const formData = new FormData();
  //     formData.append('file',BOMFiles);
  //     formData.append('batch_id',b_id)
  //     instance4.post(`prod/uploadbom`,formData)
  //     .then(function (response) {
  //      console.log("res bom add",response);
  //      })
  //     .catch(function (error) {
  //       console.log("error",error);
  //    });
  //   }
  // }

  // const savetp = (b_id) => {
  //   if(TpFiles){
  //     const formData = new FormData();
  //     formData.append('file',TpFiles);
  //     formData.append('batch_id',b_id)
  //     instance5.post(`prod/uploadtp`,formData)
  //     .then(function (response) {
  //      console.log("res tp add",response);
  //      })
  //     .catch(function (error) {
  //       console.log("error",error);
  //    });
  //   }
  // }

  function handleAcceptedFiles(files) {
    //const [uploadimg] = files;
    //setImgFiles(uploadimg)

    files.map((file) => {
      fireimg.push(file);
      setfireimg(fireimg);
      // let reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onload = () => {
      //   image.push(reader.result);
      //   setImage(image);
      // };
    });
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    var tempdata = [...selectedImgFiles, ...files];
    console.log("push", tempdata);
    setselectedImgFiles(tempdata);
  }

  function handleTpFiles(files) {
    //const [uploadTp] = files;
    // setTpFiles(uploadTp)
    files.map((file) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        techpack.push(reader.result);
        setteckpack(techpack);
      };
    });

    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    var tempdata = [...selectedTpFiles, ...files];
    console.log("push", tempdata);
    setselectedTpFiles(tempdata);
  }

  function handleBOMFiles(files) {
    // const [uploadBOM] = files;
    // setBOMFiles(uploadBOM)
    files.map((file) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        bom.push(reader.result);
        setbom(bom);
      };
    });
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    var tempdata = [...selectedBOMFiles, ...files];
    console.log("push", tempdata);
    setselectedBOMFiles(tempdata);
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const cancelProd = () => {};

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Traceabl" breadcrumbItem="Add New Product" />
          <Row>
            <ToastContainer />
            <Col lg="12">
              <div id="addproduct-accordion" className="custom-accordion">
                <Card>
                  <Link to="#" onClick={toggle} className="text-dark">
                    <div className="p-4">
                      <Media className="d-flex align-items-center">
                        <div className="me-3">
                          <div className="avatar-xs">
                            <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                              01
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <h5 className="font-size-16 mb-1">Overview</h5>
                          <p className="text-muted text-truncate mb-0">
                            Fill all information below
                          </p>
                        </div>
                        <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                      </Media>
                    </div>
                  </Link>
                  <Collapse isOpen={isOpen}>
                    <div className="p-4 border-top">
                      <Form>
                        <div className="mb-3">
                          <Label htmlFor="productname">Product Name</Label>
                          <Input
                            id="productname"
                            name="productname"
                            type="text"
                            className="form-control"
                            onChange={(e) => setProdname(e.target.value)}
                            value={prodname}
                          />
                        </div>
                        <Row>
                          <Col lg="3">
                            <div className="mb-3">
                              <Label htmlFor="manufacturername">
                                Product Code
                              </Label>
                              <Input
                                id="manufacturername"
                                name="manufacturername"
                                type="text"
                                className="form-control"
                                onChange={(e) => setProdcode(e.target.value)}
                                value={prodcode}
                              />
                            </div>
                          </Col>
                          <Col lg="3">
                            <div className="mb-3">
                              <Label htmlFor="manufacturerbrand">Season</Label>
                              <Input
                                id="manufacturerbrand"
                                name="manufacturerbrand"
                                type="text"
                                className="form-control"
                                onChange={(e) => setSeason(e.target.value)}
                                value={season}
                              />
                            </div>
                          </Col>

                          <Col>
                            <FabricInputLabels>
                              <Label htmlFor="Fabric Composition">
                                Fabric Composition
                              </Label>
                              <Label htmlFor="percentage">Percentage</Label>
                            </FabricInputLabels>
                            {inputList.map((val, id) => {
                              return (
                                <>
                                  <FabricInputFields>
                                    <Input
                                      type="text"
                                      className=" fabric"
                                      value={val.fabricComp}
                                      onChange={(e) => handleInputChange(e, id)}
                                      required
                                    />
                                    <Input
                                      type="text"
                                      className=" percentage"
                                      value={val.percentage}
                                      onChange={(e) => handleInputChange(e, id)}
                                      required
                                    />
                                    {inputList.length !== 1 && (
                                      <RemoveButton
                                        onClick={() => removeInputField(id)}
                                      />
                                    )}
                                  </FabricInputFields>
                                </>
                              );
                            })}
                            <AddButton
                              type="button"
                              color="light"
                              className="waves-effect waves-light mb-3 mt-1 btn btn-outline-dark"
                              onClick={addInputField}
                            >
                              <i className="mdi mdi-plus me-1"></i>
                              ADD NEW
                            </AddButton>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">
                            <div className="mb-3 mt-0">
                              <label htmlFor="name">Apparel Type </label>
                              <select
                                className="form-control"
                                id="type"
                                onChange={(e) => setApparel(e.target.value)}
                                value={apparel}
                              >
                                <option>Select Apparel Type </option>
                                <option value="Jeans">Jeans</option>
                              </select>
                            </div>
                          </Col>
                        </Row>
                        <Col lg="6">
                          <div className="mb-3">
                            <Label htmlFor="price">Specification</Label>
                            <Input
                              id="price"
                              name="price"
                              type="text"
                              className="form-control"
                              onChange={(e) => setSpecification(e.target.value)}
                              value={specification}
                            />
                          </div>
                        </Col>
                        {/* <Col lg="6" >
                        <div className="mb-3">
                            <Label htmlFor="price">Image url</Label>
                            <Input
                              id="price"
                              name="price"
                              type="text"
                              className="form-control"
                              onChange = {(e) => setImage(e.target.value)}
                              value={image}
                            /></div>  
                        </Col> */}

                        <div className="mb-0">
                          <Label htmlFor="productdesc">
                            Product Description
                          </Label>
                          <textarea
                            className="form-control"
                            id="productdesc"
                            rows="4"
                            onChange={(e) => setProddes(e.target.value)}
                            value={proddes}
                          />
                        </div>
                      </Form>
                    </div>
                  </Collapse>
                </Card>
                <Card>
                  <Link
                    to="#"
                    className="text-dark collapsed"
                    onClick={toggleAddproduct}
                  >
                    <div className="p-4">
                      <Media className="d-flex align-items-center">
                        <div className="me-3">
                          <div className="avatar-xs">
                            <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                              02
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <h5 className="font-size-16 mb-1">Product Image</h5>
                          <p className="text-muted text-truncate mb-0">
                            Upload Product Image Or Sketches
                          </p>
                        </div>
                        <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                      </Media>
                    </div>
                  </Link>
                  <Collapse isOpen={isOpenAddproduct}>
                    <div className="p-4 border-top">
                      <Form>
                        <Dropzone
                          onDrop={(acceptedFiles) => {
                            handleAcceptedFiles(acceptedFiles);
                          }}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <div className="dropzone">
                              <div
                                className="dz-message needsclick"
                                {...getRootProps()}
                              >
                                <input {...getInputProps()} />
                                <div className="dz-message needsclick">
                                  <div className="mb-3">
                                    <i className="display-4 text-muted uil uil-cloud-upload"></i>
                                  </div>
                                  <h4>Drop files here or click to upload.</h4>
                                </div>
                              </div>
                            </div>
                          )}
                        </Dropzone>
                        <div
                          className="dropzone-previews mt-3"
                          id="file-previews"
                        >
                          {selectedImgFiles.map((f, i) => {
                            return (
                              <Card
                                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                key={i + "-file"}
                              >
                                <div className="p-2">
                                  <Row className="align-items-center">
                                    <Col className="col-auto">
                                      <img
                                        data-dz-thumbnail=""
                                        height="80"
                                        className="avatar-sm rounded bg-light"
                                        alt={f.name}
                                        src={f.preview}
                                      />
                                    </Col>
                                    <Col>
                                      <Link
                                        to="#"
                                        className="text-muted font-weight-bold"
                                      >
                                        {f.name}
                                      </Link>
                                      <p className="mb-0">
                                        <strong>{f.formattedSize}</strong>
                                      </p>
                                    </Col>
                                  </Row>
                                </div>
                              </Card>
                            );
                          })}
                        </div>
                      </Form>
                    </div>
                  </Collapse>
                </Card>
                <Card>
                  <Link
                    to="#"
                    className="text-dark collapsed"
                    onClick={toggleTechPacks}
                  >
                    <div className="p-4">
                      <Media className="d-flex align-items-center">
                        <div className="me-3">
                          <div className="avatar-xs">
                            <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                              03
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <h5 className="font-size-16 mb-1">
                            Product Tech Packs
                          </h5>
                          <p className="text-muted text-truncate mb-0">
                            Upload product tech packs
                          </p>
                        </div>
                        <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                      </Media>
                    </div>
                  </Link>
                  <Collapse isOpen={isOpenTechPacks}>
                    <div className="p-4 border-top">
                      <Form>
                        <Dropzone
                          onDrop={(acceptedFiles) => {
                            handleTpFiles(acceptedFiles);
                          }}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <div className="dropzone">
                              <div
                                className="dz-message needsclick"
                                {...getRootProps()}
                              >
                                <input {...getInputProps()} />
                                <div className="dz-message needsclick">
                                  <div className="mb-3">
                                    <i className="display-4 text-muted uil uil-cloud-upload"></i>
                                  </div>
                                  <h4>Drop files here or click to upload.</h4>
                                </div>
                              </div>
                            </div>
                          )}
                        </Dropzone>
                        <div
                          className="dropzone-previews mt-3"
                          id="file-previews"
                        >
                          {selectedTpFiles.map((f, i) => {
                            return (
                              <Card
                                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                key={i + "-file"}
                              >
                                <div className="p-2">
                                  <Row className="align-items-center">
                                    <Col className="col-auto">
                                      <img
                                        data-dz-thumbnail=""
                                        height="80"
                                        className="avatar-sm rounded bg-light"
                                        alt={f.name}
                                        src={f.preview}
                                      />
                                    </Col>
                                    <Col>
                                      <Link
                                        to="#"
                                        className="text-muted font-weight-bold"
                                      >
                                        {f.name}
                                      </Link>
                                      <p className="mb-0">
                                        <strong>{f.formattedSize}</strong>
                                      </p>
                                    </Col>
                                  </Row>
                                </div>
                              </Card>
                            );
                          })}
                        </div>
                      </Form>
                    </div>
                  </Collapse>
                </Card>
                <Card>
                  <Link
                    to="#"
                    className="text-dark collapsed"
                    onClick={toggleBOM}
                  >
                    <div className="p-4">
                      <Media className="d-flex align-items-center">
                        <div className="me-3">
                          <div className="avatar-xs">
                            <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                              04
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <h5 className="font-size-16 mb-1">BOM</h5>
                          <p className="text-muted text-truncate mb-0">
                            Upload bill of materials
                          </p>
                        </div>
                        <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                      </Media>
                    </div>
                  </Link>
                  <Collapse isOpen={isOpenBOM}>
                    <div className="p-4 border-top">
                      <Form>
                        <Dropzone
                          onDrop={(acceptedFiles) => {
                            handleBOMFiles(acceptedFiles);
                          }}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <div className="dropzone">
                              <div
                                className="dz-message needsclick"
                                {...getRootProps()}
                              >
                                <input {...getInputProps()} />
                                <div className="dz-message needsclick">
                                  <div className="mb-3">
                                    <i className="display-4 text-muted uil uil-cloud-upload"></i>
                                  </div>
                                  <h4>Drop files here or click to upload.</h4>
                                </div>
                              </div>
                            </div>
                          )}
                        </Dropzone>
                        <div
                          className="dropzone-previews mt-3"
                          id="file-previews"
                        >
                          {selectedBOMFiles.map((f, i) => {
                            return (
                              <Card
                                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                key={i + "-file"}
                              >
                                <div className="p-2">
                                  <Row className="align-items-center">
                                    <Col className="col-auto">
                                      <img
                                        data-dz-thumbnail=""
                                        height="80"
                                        className="avatar-sm rounded bg-light"
                                        alt={f.name}
                                        src={f.preview}
                                      />
                                    </Col>
                                    <Col>
                                      <Link
                                        to="#"
                                        className="text-muted font-weight-bold"
                                      >
                                        {f.name}
                                      </Link>
                                      <p className="mb-0">
                                        <strong>{f.formattedSize}</strong>
                                      </p>
                                    </Col>
                                  </Row>
                                </div>
                              </Card>
                            );
                          })}
                        </div>
                      </Form>
                    </div>
                  </Collapse>
                </Card>
                <Card>
                  <Link
                    to="#"
                    className="text-dark collapsed"
                    onClick={toggleSupplyChain}
                  >
                    <div className="p-4">
                      <Media className="d-flex align-items-center">
                        <div className="me-3">
                          <div className="avatar-xs">
                            <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                              05
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <h5 className="font-size-16 mb-1">Supply Chain</h5>
                          <p className="text-muted text-truncate mb-0">
                            Create Product Supply Chain
                          </p>
                        </div>
                        <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                      </Media>
                    </div>
                  </Link>
                  {/* ADDING CARD */}
                  {/* <Row>
                        <Col xl={9}>
                          <Card>
                            <CardBody>
                              <CardTitle className="h4">Overall Badge Progress</CardTitle>
                              <hr></hr>
                              <p className="card-title-desc">
                                <b>Fair Working Conditions</b>
                              </p>
                              <p>
                                Please provide one of the following certificates
                              </p>
                              <div className="table-responsive">
                                <table className="table table-nowrap table-centered">
                                  <tbody>
                                    <tr>
                                      <td>WFTO Fair Trade Standard</td>
                                      <td><button type="button" className="btn btn-sm btn-link text-dark text-decoration-none">Certificate</button></td>
                                      <td><button type="button" className="btn btn-sm btn-link text-dark text-decoration-none">Certificate</button></td><td><button type="button" className="btn btn-sm btn-link text-dark text-decoration-none">Certificate</button></td><td><button type="button" className="btn btn-sm btn-link text-dark text-decoration-none">Certificate</button></td><td><button type="button" className="btn btn-sm btn-link text-dark text-decoration-none">Certificate</button></td>
                                      <td><button type="button" className="btn btn-sm btn-link text-dark text-decoration-none">Certificate</button></td><td><button type="button" className="btn btn-sm btn-link text-dark text-decoration-none">Certificate</button></td>
                                    </tr>
                                    
                                  </tbody>
                                </table>
                              </div>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row> */}

                  {/* <Collapse isOpen={isOpenSupplyChain}>
                      <Container fluid="md">
                    <Row>
                      <Col >
                    <div className="p-4 border-top">
                      <Row>
                      <div className="table-responsive">
                      <table className="table table-nowrap table-centered">
                            <tbody>
                              <tr>
                                  <td>
                        <Col className="col-9">
                          <div className="text-center mt-3">
                            <div className="avatar-xs mx-auto mb-3">
                              <Media className="d-flex align-items-center">
                                <div className="me-3">
                                  <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle bg-primary">
                                      01
                                    </div>
                                  </div>
                                </div>
                              </Media>
                            </div>
                            <h5 className="font-size-15">Fabre</h5>
                            <Col>
                              <Dropdown
                                isOpen={singlebtn1}
                                toggle={() => setSinglebtn1(!singlebtn1)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Assign to supplier{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-right">
                                  <DropdownItem>Supplier 1</DropdownItem>
                                  <DropdownItem>Supplier 2</DropdownItem>
                                  <DropdownItem>Supplier 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col>
                            <Col className="mt-2" >
                              <Dropdown
                                isOpen={singlebtn5}
                                toggle={() => setSinglebtn5(!singlebtn5)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Choose Source{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-right">
                                  <DropdownItem>Source 1</DropdownItem>
                                  <DropdownItem>Source 2</DropdownItem>
                                  <DropdownItem>Source 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col>
                          </div>
                        </Col>
                        </td>
                        <td>
                        <Col className="col-10">
                          <div className="text-center mt-3">
                            <div className="avatar-xs mx-auto mb-3">
                              <Media className="d-flex align-items-center">
                                <div className="me-3">
                                  <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle bg-primary">
                                      02
                                    </div>
                                  </div>
                                </div>
                              </Media>
                            </div>
                            <h5 className="font-size-15">Fabric</h5>
                            <Col>
                              <Dropdown
                                isOpen={singlebtn2}
                                toggle={() => setSinglebtn2(!singlebtn2)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Assign to supplier{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-right">
                                  <DropdownItem>Supplier 1</DropdownItem>
                                  <DropdownItem>Supplier 2</DropdownItem>
                                  <DropdownItem>Supplier 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col>
                            <Row>
                              <Col  sm={8} className="mt-2" >
                                <Dropdown
                                  isOpen={singlebtn6}
                                  toggle={() => setSinglebtn6(!singlebtn6)}
                                >
                                  <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                    Choose Type Of Fabric{" "}
                                    <i className="mdi mdi-chevron-down" />
                                  </DropdownToggle>
                                  <DropdownMenu className="dropdown-menu">
                                    <DropdownItem>Source 1</DropdownItem>
                                    <DropdownItem>Source 2</DropdownItem>
                                    <DropdownItem>Source 3</DropdownItem>
                                  </DropdownMenu>
                                </Dropdown>{" "}
                              </Col>
                              <Col  sm={8} className="mt-2 px-2" >
                                <Dropdown
                                  isOpen={singlebtn7}
                                  toggle={() => setSinglebtn7(!singlebtn7)}
                                >
                                  <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                    Choose Source{" "}
                                    <i className="mdi mdi-chevron-down" />
                                  </DropdownToggle>
                                  <DropdownMenu className="dropdown-menu">
                                    <DropdownItem>Source 1</DropdownItem>
                                    <DropdownItem>Source 2</DropdownItem>
                                    <DropdownItem>Source 3</DropdownItem>
                                  </DropdownMenu>
                                </Dropdown>{" "}
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        </td>
                        <td>
                        <Col className="col-9">
                          <div className="text-center mt-3">
                            <div className="avatar-xs mx-auto mb-3">
                              <Media className="d-flex align-items-center">
                                <div className="me-3">
                                  <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle bg-primary">
                                      03
                                    </div>
                                  </div>
                                </div>
                              </Media>
                            </div>
                            <h5 className="font-size-15">Trims and accessories</h5>
                            <Col>
                              <Dropdown
                                isOpen={singlebtn3}
                                toggle={() => setSinglebtn3(!singlebtn3)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Assign to supplier{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-right">
                                  <DropdownItem>Supplier 1</DropdownItem>
                                  <DropdownItem>Supplier 2</DropdownItem>
                                  <DropdownItem>Supplier 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col>
                            <Row>
                              <Col  sm={8} className="mt-2 px-2" >
                                <Dropdown
                                  isOpen={singlebtn8}
                                  toggle={() => setSinglebtn8(!singlebtn8)}
                                >
                                  <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                    Choose Source{" "}
                                    <i className="mdi mdi-chevron-down" />
                                  </DropdownToggle>
                                  <DropdownMenu className="dropdown-menu">
                                    <DropdownItem>Source 1</DropdownItem>
                                    <DropdownItem>Source 2</DropdownItem>
                                    <DropdownItem>Source 3</DropdownItem>
                                  </DropdownMenu>
                                </Dropdown>{" "}
                              </Col>
                              <Col  sm={6} className="mt-2 px-2" >
                                <Dropdown
                                  isOpen={singlebtn9}
                                  toggle={() => setSinglebtn9(!singlebtn9)}
                                >
                                  <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                    Choose Source{" "}
                                    <i className="mdi mdi-chevron-down" />
                                  </DropdownToggle>
                                  <DropdownMenu className="dropdown-menu">
                                    <DropdownItem>Source 1</DropdownItem>
                                    <DropdownItem>Source 2</DropdownItem>
                                    <DropdownItem>Source 3</DropdownItem>
                                  </DropdownMenu>
                                </Dropdown>{" "}
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        </td>

                      <td>
                        <Col className="col-10">
                          <div className="text-center mt-3">
                            <div className="avatar-xs mx-auto mb-3">
                              <Media className="d-flex align-items-center">
                                <div className="me-3">
                                  <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle bg-primary">
                                      04
                                    </div>
                                  </div>
                                </div>
                              </Media>
                            </div>
                            <h5 className="font-size-15">Dyeing</h5>
                            <Col>
                              <Dropdown
                                isOpen={singlebtn4}
                                toggle={() => setSinglebtn4(!singlebtn4)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Assign to supplier{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-right">
                                  <DropdownItem>Supplier 1</DropdownItem>
                                  <DropdownItem>Supplier 2</DropdownItem>
                                  <DropdownItem>Supplier 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col>
                            <Row>
                              <Col  sm={8} className="mt-2 px-2" >
                                <Dropdown
                                  isOpen={singlebtn10}
                                  toggle={() => setSinglebtn10(!singlebtn10)}
                                >
                                  <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                    Choose Source{" "}
                                    <i className="mdi mdi-chevron-down" />
                                  </DropdownToggle>
                                  <DropdownMenu className="dropdown-menu">
                                    <DropdownItem>Source 1</DropdownItem>
                                    <DropdownItem>Source 2</DropdownItem>
                                    <DropdownItem>Source 3</DropdownItem>
                                  </DropdownMenu>
                                </Dropdown>{" "}
                              </Col>
                              <Col  sm={8} className="mt-2 px-2" >
                                <Dropdown
                                  isOpen={singlebtn11}
                                  toggle={() => setSinglebtn11(!singlebtn11)}
                                >
                                  <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                    Choose Source{" "}
                                    <i className="mdi mdi-chevron-down" />
                                  </DropdownToggle>
                                  <DropdownMenu className="dropdown-menu">
                                    <DropdownItem>Source 1</DropdownItem>
                                    <DropdownItem>Source 2</DropdownItem>
                                    <DropdownItem>Source 3</DropdownItem>
                                  </DropdownMenu>
                                </Dropdown>{" "}
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        </td>

                        <td>
                        <Col className="col-5">
                          <div className="text-center mt-3">
                            <div className="avatar-xs mx-auto mb-3">
                              <Media className="d-flex align-items-center">
                                <div className="me-3">
                                  <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle bg-primary">
                                      04
                                    </div>
                                  </div>
                                </div>
                              </Media>
                            </div>
                            <h5 className="font-size-15">Dyeing</h5>
                            <Col>
                              <Dropdown
                                isOpen={singlebtn4}
                                toggle={() => setSinglebtn4(!singlebtn4)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Assign to supplier{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-right">
                                  <DropdownItem>Supplier 1</DropdownItem>
                                  <DropdownItem>Supplier 2</DropdownItem>
                                  <DropdownItem>Supplier 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col>
                            <Row>
                              <Col  sm={8} className="mt-2 px-2" >
                                <Dropdown
                                  isOpen={singlebtn10}
                                  toggle={() => setSinglebtn10(!singlebtn10)}
                                >
                                  <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                    Choose Source{" "}
                                    <i className="mdi mdi-chevron-down" />
                                  </DropdownToggle>
                                  <DropdownMenu className="dropdown-menu">
                                    <DropdownItem>Source 1</DropdownItem>
                                    <DropdownItem>Source 2</DropdownItem>
                                    <DropdownItem>Source 3</DropdownItem>
                                  </DropdownMenu>
                                </Dropdown>{" "}
                              </Col>
                              <Col  sm={8} className="mt-2 px-2" >
                                <Dropdown
                                  isOpen={singlebtn11}
                                  toggle={() => setSinglebtn11(!singlebtn11)}
                                >
                                  <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                    Choose Source{" "}
                                    <i className="mdi mdi-chevron-down" />
                                  </DropdownToggle>
                                  <DropdownMenu className="dropdown-menu">
                                    <DropdownItem>Source 1</DropdownItem>
                                    <DropdownItem>Source 2</DropdownItem>
                                    <DropdownItem>Source 3</DropdownItem>
                                  </DropdownMenu>
                                </Dropdown>{" "}
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        </td>
                        <td>
                        <Col className="col-5">
                          <div className="text-center mt-3">
                            <div className="avatar-xs mx-auto mb-3">
                              <Media className="d-flex align-items-center">
                                <div className="me-3">
                                  <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle bg-primary">
                                      04
                                    </div>
                                  </div>
                                </div>
                              </Media>
                            </div>
                            <h5 className="font-size-15">Dyeing</h5>
                            <Col>
                              <Dropdown
                                isOpen={singlebtn4}
                                toggle={() => setSinglebtn4(!singlebtn4)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Assign to supplier{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-right">
                                  <DropdownItem>Supplier 1</DropdownItem>
                                  <DropdownItem>Supplier 2</DropdownItem>
                                  <DropdownItem>Supplier 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col>
                            <Row>
                              <Col  sm={8} className="mt-2 px-2" >
                                <Dropdown
                                  isOpen={singlebtn10}
                                  toggle={() => setSinglebtn10(!singlebtn10)}
                                >
                                  <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                    Choose Source{" "}
                                    <i className="mdi mdi-chevron-down" />
                                  </DropdownToggle>
                                  <DropdownMenu className="dropdown-menu">
                                    <DropdownItem>Source 1</DropdownItem>
                                    <DropdownItem>Source 2</DropdownItem>
                                    <DropdownItem>Source 3</DropdownItem>
                                  </DropdownMenu>
                                </Dropdown>{" "}
                              </Col>
                              <Col  sm={8} className="mt-2 px-2" >
                                <Dropdown
                                  isOpen={singlebtn11}
                                  toggle={() => setSinglebtn11(!singlebtn11)}
                                >
                                  <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                    Choose Source{" "}
                                    <i className="mdi mdi-chevron-down" />
                                  </DropdownToggle>
                                  <DropdownMenu className="dropdown-menu">
                                    <DropdownItem>Source 1</DropdownItem>
                                    <DropdownItem>Source 2</DropdownItem>
                                    <DropdownItem>Source 3</DropdownItem>
                                  </DropdownMenu>
                                </Dropdown>{" "}
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        </td>
                         </tr>
                    </tbody>
                    </table>
                     </div>
                      </Row>
         

                      </div>
                      </Col>
                      </Row>
                      </Container>
                  </Collapse>
 */}

                  {/* <div className="table-responsive">
                                                                <Table className="table mb-0">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>#</th>
                                                                            <th>Name</th>
                                                                            <th>Type</th>
                                                                            <th>Expiration Date</th>
                                                                            <th>Document No.</th>
                                                                            <th>Issue Date</th>
                                                                            <th>Issue By</th>
                                                                            <th>Attachments</th>
                                                                            <th>Status</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>Table cell</td>
                                                                            <td>Table cell</td>
                                                                            <td>Table cell</td>
                                                                            <td>Table cell</td>
                                                                            <td>Table cell</td>
                                                                            <td>Table cell</td>
                                                                            <td>Table cell</td>
                                                                            <td>Table cell</td>
                                                                        </tr>
                                          
                                                                    </tbody>
                                                                </Table>
                                                            </div> */}

                  <Collapse isOpen={isOpenSupplyChain}>
                    <div className="p-2 border-top">
                      <Row>
                        <div className="table-responsive">
                          <Table className="table mb-0">
                            <tbody>
                              <tr>
                                <td>
                                  <Col className="col-12">
                                    <div className="text-center mt-3">
                                      <div className="avatar-xs mx-auto mb-3">
                                        <Media className="d-flex align-items-center">
                                          <div className="me-3">
                                            <div className="avatar-xs">
                                              <div className="avatar-title rounded-circle bg-primary">
                                                01
                                              </div>
                                            </div>
                                          </div>
                                        </Media>
                                      </div>
                                      <h5 className="font-size-15">Fabre</h5>
                                      <Col>
                                        <Dropdown
                                          isOpen={singlebtn1}
                                          toggle={() =>
                                            setSinglebtn1(!singlebtn1)
                                          }
                                        >
                                          <DropdownToggle
                                            tag="button"
                                            className="btn btn-primary ropdown-menu-right"
                                            caret
                                          >
                                            {fabre1}
                                            <i className="mdi mdi-chevron-down" />
                                          </DropdownToggle>
                                          <DropdownMenu className="dropdown-menu-right">
                                            {fabredetail.map((sup) => (
                                              <DropdownItem>
                                                <div
                                                  onClick={(e) => {
                                                    setFabre1(
                                                      e.currentTarget
                                                        .textContent
                                                    );
                                                    var temp = supplier_id;
                                                    temp.push(sup._id);
                                                    setSupplier_id(temp);
                                                  }}
                                                >
                                                  {sup.name_sup}
                                                </div>
                                              </DropdownItem>
                                            ))}
                                          </DropdownMenu>
                                        </Dropdown>{" "}
                                      </Col>

                                      <Col className="mt-2">
                                        <Dropdown
                                          isOpen={singlebtn5}
                                          toggle={() =>
                                            setSinglebtn5(!singlebtn5)
                                          }
                                        >
                                          <DropdownToggle
                                            tag="button"
                                            className="btn btn-primary ropdown-menu-right"
                                            caret
                                          >
                                            {fabre2}
                                            <i className="mdi mdi-chevron-down" />
                                          </DropdownToggle>
                                          <DropdownMenu className="dropdown-menu-right">
                                            <DropdownItem
                                              onClick={() => {
                                                var tempDate = new Date();
                                                var date =
                                                  tempDate.getFullYear() +
                                                  "-" +
                                                  (tempDate.getMonth() + 1) +
                                                  "-" +
                                                  tempDate.getDate() +
                                                  " " +
                                                  tempDate.getHours() +
                                                  ":" +
                                                  tempDate.getMinutes() +
                                                  ":" +
                                                  tempDate.getSeconds();
                                                setFabre2(date);
                                              }}
                                            >
                                              Done
                                            </DropdownItem>
                                            <DropdownItem
                                              onClick={() =>
                                                setFabre2("Choose status")
                                              }
                                            >
                                              UnDone
                                            </DropdownItem>
                                            {/* {fabredetail.map((sup)=>
                                            <DropdownItem>
                                              <div onClick = {(e) => setFabre2(e.currentTarget.textContent)}>
                                                {sup.name_sup}
                                                </div>
                                                </DropdownItem>
                                            )} */}
                                          </DropdownMenu>
                                        </Dropdown>{" "}
                                      </Col>
                                    </div>
                                  </Col>
                                </td>
                                <td>
                                  <Col className="col-12">
                                    <div className="text-center mt-3">
                                      <div className="avatar-xs mx-auto mb-3">
                                        <Media className="d-flex align-items-center">
                                          <div className="me-3">
                                            <div className="avatar-xs">
                                              <div className="avatar-title rounded-circle bg-primary">
                                                02
                                              </div>
                                            </div>
                                          </div>
                                        </Media>
                                      </div>
                                      <h5 className="font-size-15">Fabric</h5>
                                      <Col>
                                        <Dropdown
                                          isOpen={singlebtn2}
                                          toggle={() =>
                                            setSinglebtn2(!singlebtn2)
                                          }
                                        >
                                          <DropdownToggle
                                            tag="button"
                                            className="btn btn-primary ropdown-menu-right"
                                            caret
                                          >
                                            {fabric1}
                                            <i className="mdi mdi-chevron-down" />
                                          </DropdownToggle>
                                          <DropdownMenu className="dropdown-menu-right">
                                            {fabricdetail.map((sup) => (
                                              <DropdownItem>
                                                <div
                                                  onClick={(e) => {
                                                    setFabric1(
                                                      e.currentTarget
                                                        .textContent
                                                    );

                                                    var temp = supplier_id;
                                                    temp.push(sup._id);
                                                    setSupplier_id(temp);
                                                  }}
                                                >
                                                  {sup.name_sup}
                                                </div>
                                              </DropdownItem>
                                            ))}
                                          </DropdownMenu>
                                        </Dropdown>{" "}
                                      </Col>

                                      <Col className="mt-2">
                                        <Dropdown
                                          isOpen={singlebtn6}
                                          toggle={() =>
                                            setSinglebtn6(!singlebtn6)
                                          }
                                        >
                                          <DropdownToggle
                                            tag="button"
                                            className="btn btn-primary ropdown-menu-right"
                                            caret
                                          >
                                            {fabric2}
                                            <i className="mdi mdi-chevron-down" />
                                          </DropdownToggle>
                                          <DropdownMenu className="dropdown-menu">
                                            <DropdownItem
                                              onClick={() => {
                                                var tempDate = new Date();
                                                var date =
                                                  tempDate.getFullYear() +
                                                  "-" +
                                                  (tempDate.getMonth() + 1) +
                                                  "-" +
                                                  tempDate.getDate() +
                                                  " " +
                                                  tempDate.getHours() +
                                                  ":" +
                                                  tempDate.getMinutes() +
                                                  ":" +
                                                  tempDate.getSeconds();
                                                setFabric2(date);
                                              }}
                                            >
                                              Done
                                            </DropdownItem>
                                            <DropdownItem
                                              onClick={() =>
                                                setFabric2("Choose status")
                                              }
                                            >
                                              UnDone
                                            </DropdownItem>
                                            {/* {fabricdetail.map((sup)=>
                                             <DropdownItem>
                                             <div onClick = {(e) => setFabric2(e.currentTarget.textContent)}>
                                               {sup.name_sup}
                                               </div>
                                               </DropdownItem>
                                            )} */}
                                          </DropdownMenu>
                                        </Dropdown>{" "}
                                      </Col>
                                    </div>
                                  </Col>
                                </td>
                                <td>
                                  <Col className="col-12">
                                    <div className="text-center mt-3">
                                      <div className="avatar-xs mx-auto mb-3">
                                        <Media className="d-flex align-items-center">
                                          <div className="me-3">
                                            <div className="avatar-xs">
                                              <div className="avatar-title rounded-circle bg-primary">
                                                03
                                              </div>
                                            </div>
                                          </div>
                                        </Media>
                                      </div>
                                      <h5 className="font-size-15">
                                        Trims and accessories
                                      </h5>
                                      <Col>
                                        <Dropdown
                                          isOpen={singlebtn3}
                                          toggle={() =>
                                            setSinglebtn3(!singlebtn3)
                                          }
                                        >
                                          <DropdownToggle
                                            tag="button"
                                            className="btn btn-primary ropdown-menu-right"
                                            caret
                                          >
                                            {trim1}
                                            <i className="mdi mdi-chevron-down" />
                                          </DropdownToggle>
                                          <DropdownMenu className="dropdown-menu-right">
                                            {trimsdetail.map((sup) => (
                                              <DropdownItem>
                                                <div
                                                  onClick={(e) => {
                                                    setTrim1(
                                                      e.currentTarget
                                                        .textContent
                                                    );
                                                    var temp = supplier_id;
                                                    temp.push(sup._id);
                                                    setSupplier_id(temp);
                                                  }}
                                                >
                                                  {sup.name_sup}
                                                </div>
                                              </DropdownItem>
                                            ))}
                                          </DropdownMenu>
                                        </Dropdown>{" "}
                                      </Col>

                                      <Col className="mt-2 px-2">
                                        <Dropdown
                                          isOpen={singlebtn8}
                                          toggle={() =>
                                            setSinglebtn8(!singlebtn8)
                                          }
                                        >
                                          <DropdownToggle
                                            tag="button"
                                            className="btn btn-primary ropdown-menu-right"
                                            caret
                                          >
                                            {trim2}
                                            <i className="mdi mdi-chevron-down" />
                                          </DropdownToggle>
                                          <DropdownMenu className="dropdown-menu">
                                            <DropdownItem
                                              onClick={() => {
                                                var tempDate = new Date();
                                                var date =
                                                  tempDate.getFullYear() +
                                                  "-" +
                                                  (tempDate.getMonth() + 1) +
                                                  "-" +
                                                  tempDate.getDate() +
                                                  " " +
                                                  tempDate.getHours() +
                                                  ":" +
                                                  tempDate.getMinutes() +
                                                  ":" +
                                                  tempDate.getSeconds();
                                                setTrim2(date);
                                              }}
                                            >
                                              Done
                                            </DropdownItem>
                                            <DropdownItem
                                              onClick={() =>
                                                setTrim2("Choose status")
                                              }
                                            >
                                              UnDone
                                            </DropdownItem>
                                            {/* {trimsdetail.map((sup)=>
                                            <DropdownItem>
                                            <div onClick = {(e) => setTrim2(e.currentTarget.textContent)}>
                                              {sup.name_sup}
                                              </div>
                                              </DropdownItem>
                                            )} */}
                                          </DropdownMenu>
                                        </Dropdown>{" "}
                                      </Col>
                                    </div>
                                  </Col>
                                </td>
                                <td>
                                  <Col className="col-12">
                                    <div className="text-center mt-3">
                                      <div className="avatar-xs mx-auto mb-3">
                                        <Media className="d-flex align-items-center">
                                          <div className="me-3">
                                            <div className="avatar-xs">
                                              <div className="avatar-title rounded-circle bg-primary">
                                                04
                                              </div>
                                            </div>
                                          </div>
                                        </Media>
                                      </div>
                                      <h5 className="font-size-15">Dyeing</h5>
                                      <Col>
                                        <Dropdown
                                          isOpen={singlebtn4}
                                          toggle={() =>
                                            setSinglebtn4(!singlebtn4)
                                          }
                                        >
                                          <DropdownToggle
                                            tag="button"
                                            className="btn btn-primary ropdown-menu-right"
                                            caret
                                          >
                                            {dye1}
                                            <i className="mdi mdi-chevron-down" />
                                          </DropdownToggle>
                                          <DropdownMenu className="dropdown-menu-right">
                                            {dyeingdetail.map((sup) => (
                                              <DropdownItem>
                                                <div
                                                  onClick={(e) => {
                                                    setDye1(
                                                      e.currentTarget
                                                        .textContent
                                                    );
                                                    var temp = supplier_id;
                                                    temp.push(sup._id);
                                                    setSupplier_id(temp);
                                                  }}
                                                >
                                                  {sup.name_sup}
                                                </div>
                                              </DropdownItem>
                                            ))}
                                          </DropdownMenu>
                                        </Dropdown>{" "}
                                      </Col>

                                      <Col className="mt-2 px-2">
                                        <Dropdown
                                          isOpen={singlebtn10}
                                          toggle={() =>
                                            setSinglebtn10(!singlebtn10)
                                          }
                                        >
                                          <DropdownToggle
                                            tag="button"
                                            className="btn btn-primary ropdown-menu-right"
                                            caret
                                          >
                                            {dye2}
                                            <i className="mdi mdi-chevron-down" />
                                          </DropdownToggle>
                                          <DropdownMenu className="dropdown-menu">
                                            <DropdownItem
                                              onClick={() => {
                                                var tempDate = new Date();
                                                var date =
                                                  tempDate.getFullYear() +
                                                  "-" +
                                                  (tempDate.getMonth() + 1) +
                                                  "-" +
                                                  tempDate.getDate() +
                                                  " " +
                                                  tempDate.getHours() +
                                                  ":" +
                                                  tempDate.getMinutes() +
                                                  ":" +
                                                  tempDate.getSeconds();
                                                setDye2(date);
                                              }}
                                            >
                                              Done
                                            </DropdownItem>
                                            <DropdownItem
                                              onClick={() =>
                                                setDye2("Choose status")
                                              }
                                            >
                                              UnDone
                                            </DropdownItem>
                                            {/* {dyeingdetail.map((sup)=>
                                            <DropdownItem>
                                            <div onClick = {(e) => setDye2(e.currentTarget.textContent)}>
                                              {sup.name_sup}
                                              </div>
                                              </DropdownItem>
                                            )} */}
                                          </DropdownMenu>
                                        </Dropdown>{" "}
                                      </Col>
                                    </div>
                                  </Col>
                                </td>

                                <td>
                                  <Col className="col-12">
                                    <div className="text-center mt-3">
                                      <div className="avatar-xs mx-auto mb-3">
                                        <Media className="d-flex align-items-center">
                                          <div className="me-3">
                                            <div className="avatar-xs">
                                              <div className="avatar-title rounded-circle bg-primary">
                                                05
                                              </div>
                                            </div>
                                          </div>
                                        </Media>
                                      </div>
                                      <h5 className="font-size-15">CMT</h5>
                                      <Col>
                                        <Dropdown
                                          isOpen={singlebtn14}
                                          toggle={() =>
                                            setSinglebtn14(!singlebtn14)
                                          }
                                        >
                                          <DropdownToggle
                                            tag="button"
                                            className="btn btn-primary ropdown-menu-right"
                                            caret
                                          >
                                            {cmt1}
                                            <i className="mdi mdi-chevron-down" />
                                          </DropdownToggle>
                                          <DropdownMenu className="dropdown-menu-right">
                                            {cmtdetail.map((sup) => (
                                              <DropdownItem>
                                                <div
                                                  onClick={(e) => {
                                                    setCmt1(
                                                      e.currentTarget
                                                        .textContent
                                                    );
                                                    var temp = supplier_id;
                                                    temp.push(sup._id);
                                                    setSupplier_id(temp);
                                                  }}
                                                >
                                                  {sup.name_sup}
                                                </div>
                                              </DropdownItem>
                                            ))}
                                          </DropdownMenu>
                                        </Dropdown>{" "}
                                      </Col>
                                      <Col className="mt-2 px-2">
                                        <Dropdown
                                          isOpen={singlebtn13}
                                          toggle={() =>
                                            setSinglebtn13(!singlebtn13)
                                          }
                                        >
                                          <DropdownToggle
                                            tag="button"
                                            className="btn btn-primary ropdown-menu-right"
                                            caret
                                          >
                                            {cmt2}
                                            <i className="mdi mdi-chevron-down" />
                                          </DropdownToggle>
                                          <DropdownMenu className="dropdown-menu">
                                            <DropdownItem
                                              onClick={() => {
                                                var tempDate = new Date();
                                                var date =
                                                  tempDate.getFullYear() +
                                                  "-" +
                                                  (tempDate.getMonth() + 1) +
                                                  "-" +
                                                  tempDate.getDate() +
                                                  " " +
                                                  tempDate.getHours() +
                                                  ":" +
                                                  tempDate.getMinutes() +
                                                  ":" +
                                                  tempDate.getSeconds();
                                                setCmt2(date);
                                              }}
                                            >
                                              Done
                                            </DropdownItem>
                                            <DropdownItem
                                              onClick={() =>
                                                setCmt2("Choose status")
                                              }
                                            >
                                              UnDone
                                            </DropdownItem>
                                            {/* {cmtdetail.map((sup)=>
                                            <DropdownItem>
                                            <div onClick = {(e) => setCmt2(e.currentTarget.textContent)}>
                                              {sup.name_sup}
                                              </div>
                                              </DropdownItem>
                                            )} */}
                                          </DropdownMenu>
                                        </Dropdown>{" "}
                                      </Col>
                                    </div>
                                  </Col>
                                </td>

                                <td>
                                  <Col className="col-12">
                                    <div className="text-center mt-3">
                                      <div className="avatar-xs mx-auto mb-3">
                                        <Media className="d-flex align-items-center">
                                          <div className="me-3">
                                            <div className="avatar-xs">
                                              <div className="avatar-title rounded-circle bg-primary">
                                                06
                                              </div>
                                            </div>
                                          </div>
                                        </Media>
                                      </div>
                                      <h5 className="font-size-15">
                                        Processing
                                      </h5>
                                      <Col>
                                        <Dropdown
                                          isOpen={singlebtn15}
                                          toggle={() =>
                                            setSinglebtn15(!singlebtn15)
                                          }
                                        >
                                          <DropdownToggle
                                            tag="button"
                                            className="btn btn-primary ropdown-menu-right"
                                            caret
                                          >
                                            {pro1}
                                            <i className="mdi mdi-chevron-down" />
                                          </DropdownToggle>
                                          <DropdownMenu className="dropdown-menu-right">
                                            {processingdetail.map((sup) => (
                                              <DropdownItem>
                                                <div
                                                  onClick={(e) => {
                                                    setPro1(
                                                      e.currentTarget
                                                        .textContent
                                                    );
                                                    var temp = supplier_id;
                                                    temp.push(sup._id);
                                                    setSupplier_id(temp);
                                                  }}
                                                >
                                                  {sup.name_sup}
                                                </div>
                                              </DropdownItem>
                                            ))}
                                          </DropdownMenu>
                                        </Dropdown>{" "}
                                      </Col>

                                      <Col className="mt-2 px-2">
                                        <Dropdown
                                          isOpen={singlebtn16}
                                          toggle={() =>
                                            setSinglebtn16(!singlebtn16)
                                          }
                                        >
                                          <DropdownToggle
                                            tag="button"
                                            className="btn btn-primary ropdown-menu-right"
                                            caret
                                          >
                                            {pro2}
                                            <i className="mdi mdi-chevron-down" />
                                          </DropdownToggle>
                                          <DropdownMenu className="dropdown-menu">
                                            <DropdownItem
                                              onClick={() => {
                                                var tempDate = new Date();
                                                var date =
                                                  tempDate.getFullYear() +
                                                  "-" +
                                                  (tempDate.getMonth() + 1) +
                                                  "-" +
                                                  tempDate.getDate() +
                                                  " " +
                                                  tempDate.getHours() +
                                                  ":" +
                                                  tempDate.getMinutes() +
                                                  ":" +
                                                  tempDate.getSeconds();
                                                setPro2(date);
                                              }}
                                            >
                                              Done
                                            </DropdownItem>
                                            <DropdownItem
                                              onClick={() =>
                                                setPro2("Choose status")
                                              }
                                            >
                                              UnDone
                                            </DropdownItem>
                                            {/* {processingdetail.map((sup)=>
                                            <DropdownItem>
                                            <div onClick = {(e) => setPro2(e.currentTarget.textContent)}>
                                              {sup.name_sup}
                                              </div>
                                              </DropdownItem>
                                            )} */}
                                          </DropdownMenu>
                                        </Dropdown>{" "}
                                      </Col>
                                    </div>
                                  </Col>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </Row>
                    </div>
                  </Collapse>

                  {/* <Collapse isOpen={isOpenSupplyChain}>
                    <div className="p-4 border-top">
                      <Row>
                        <Col className="col-3">
                          <div className="text-center mt-3">
                            <div className="avatar-xs mx-auto mb-3">
                              <Media className="d-flex align-items-center">
                                <div className="me-3">
                                  <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle bg-primary">
                                      01
                                    </div>
                                  </div>
                                </div>
                              </Media>
                            </div>
                            <h5 className="font-size-15">Fabre</h5>
                            <Col>
                              <Dropdown
                                isOpen={singlebtn1}
                                toggle={() => setSinglebtn1(!singlebtn1)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Assign to supplier{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-right">
                                  <DropdownItem>Supplier 1</DropdownItem>
                                  <DropdownItem>Supplier 2</DropdownItem>
                                  <DropdownItem>Supplier 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col>
                            <Col className="mt-2" >
                              <Dropdown
                                isOpen={singlebtn5}
                                toggle={() => setSinglebtn5(!singlebtn5)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Choose Source{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-right">
                                  <DropdownItem>Source 1</DropdownItem>
                                  <DropdownItem>Source 2</DropdownItem>
                                  <DropdownItem>Source 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col>
                          </div>
                        </Col>
                        <Col className="col-3">
                          <div className="text-center mt-3">
                            <div className="avatar-xs mx-auto mb-3">
                              <Media className="d-flex align-items-center">
                                <div className="me-3">
                                  <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle bg-primary">
                                      02
                                    </div>
                                  </div>
                                </div>
                              </Media>
                            </div>
                            <h5 className="font-size-15">Fabric</h5>
                            <Col>
                              <Dropdown
                                isOpen={singlebtn2}
                                toggle={() => setSinglebtn2(!singlebtn2)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Assign to supplier{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-right">
                                  <DropdownItem>Supplier 1</DropdownItem>
                                  <DropdownItem>Supplier 2</DropdownItem>
                                  <DropdownItem>Supplier 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col>

                            <Col className="mt-2" >
                              <Dropdown
                                isOpen={singlebtn6}
                                toggle={() => setSinglebtn6(!singlebtn6)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Choose Type Of Fabric{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu">
                                  <DropdownItem>Source 1</DropdownItem>
                                  <DropdownItem>Source 2</DropdownItem>
                                  <DropdownItem>Source 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col>
                            <Col className="mt-2 px-2" >
                              <Dropdown
                                isOpen={singlebtn7}
                                toggle={() => setSinglebtn7(!singlebtn7)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Choose Source{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu">
                                  <DropdownItem>Source 1</DropdownItem>
                                  <DropdownItem>Source 2</DropdownItem>
                                  <DropdownItem>Source 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col>

                          </div>
                        </Col>
                        <Col className="col-3">
                          <div className="text-center mt-3">
                            <div className="avatar-xs mx-auto mb-3">
                              <Media className="d-flex align-items-center">
                                <div className="me-3">
                                  <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle bg-primary">
                                      03
                                    </div>
                                  </div>
                                </div>
                              </Media>
                            </div>
                            <h5 className="font-size-15">Trims and accessories</h5>
                            <Col>
                              <Dropdown
                                isOpen={singlebtn3}
                                toggle={() => setSinglebtn3(!singlebtn3)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Assign to supplier{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-right">
                                  <DropdownItem>Supplier 1</DropdownItem>
                                  <DropdownItem>Supplier 2</DropdownItem>
                                  <DropdownItem>Supplier 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col>

                            <Col className="mt-2 px-2" >
                              <Dropdown
                                isOpen={singlebtn8}
                                toggle={() => setSinglebtn8(!singlebtn8)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Choose Source{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu">
                                  <DropdownItem>Source 1</DropdownItem>
                                  <DropdownItem>Source 2</DropdownItem>
                                  <DropdownItem>Source 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col>
                            <Col className="mt-2 px-2" >
                              <Dropdown
                                isOpen={singlebtn9}
                                toggle={() => setSinglebtn9(!singlebtn9)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Choose Source{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu">
                                  <DropdownItem>Source 1</DropdownItem>
                                  <DropdownItem>Source 2</DropdownItem>
                                  <DropdownItem>Source 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col>

                          </div>
                        </Col>

                        <Col className="col-3">
                          <div className="text-center mt-3">
                            <div className="avatar-xs mx-auto mb-3">
                              <Media className="d-flex align-items-center">
                                <div className="me-3">
                                  <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle bg-primary">
                                      04
                                    </div>
                                  </div>
                                </div>
                              </Media>
                            </div>
                            <h5 className="font-size-15">Dyeing</h5>
                            <Col>
                              <Dropdown
                                isOpen={singlebtn4}
                                toggle={() => setSinglebtn4(!singlebtn4)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Assign to supplier{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-right">
                                  <DropdownItem>Supplier 1</DropdownItem>
                                  <DropdownItem>Supplier 2</DropdownItem>
                                  <DropdownItem>Supplier 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col>

                            <Col className="mt-2 px-2" >
                              <Dropdown
                                isOpen={singlebtn10}
                                toggle={() => setSinglebtn10(!singlebtn10)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Choose Source{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu">
                                  <DropdownItem>Source 1</DropdownItem>
                                  <DropdownItem>Source 2</DropdownItem>
                                  <DropdownItem>Source 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col>
                            <Col className="mt-2 px-2" >
                              <Dropdown
                                isOpen={singlebtn11}
                                toggle={() => setSinglebtn11(!singlebtn11)}
                              >
                                <DropdownToggle tag="button" className="btn btn-primary ropdown-menu-right" caret>
                                  Choose Source{" "}
                                  <i className="mdi mdi-chevron-down" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu">
                                  <DropdownItem>Source 1</DropdownItem>
                                  <DropdownItem>Source 2</DropdownItem>
                                  <DropdownItem>Source 3</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>{" "}
                            </Col>

                          </div>
                        </Col>
                      </Row>

                    </div>
                  </Collapse> */}
                </Card>

                {/* <Card>
                  <Link to="#" className="text-dark collapsed" onClick={toggleBadges}>
                    <div className="p-4">

                      <Media className="d-flex align-items-center">
                        <div className="me-3">
                          <div className="avatar-xs">
                            <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                              06
                                                            </div>
                          </div>
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <h5 className="font-size-16 mb-1">Badges</h5>
                          <p className="text-muted text-truncate mb-0">View obtained batches</p>
                        </div>
                        <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                      </Media>

                    </div>
                  </Link>
                  <Collapse isOpen={isOpenBadges}>
                    <div className="p-4 border-top">
                      <Row>
                        <Col mg={3} xl={2}>
                          <Card className="align-items-center" >
                            <CardImg top className="img-fluid avatar-lg " src={img1} alt="Card image cap" />
                            <CardBody>
                              <h6 className="text-center">Badge 1</h6>
                            </CardBody>
                          </Card>
                        </Col>

                        <Col mg={3} xl={2}>
                          <Card className="align-items-center" >
                            <CardImg top className="img-fluid avatar-lg " src={img1} alt="Card image cap" />
                            <CardBody>
                              <h6 className="text-center">Badge 1</h6>
                            </CardBody>
                          </Card>
                        </Col>

                        <Col mg={3} xl={2}>
                          <Card className="align-items-center" >
                            <CardImg top className="img-fluid avatar-lg " src={img1} alt="Card image cap" />
                            <CardBody>
                              <h6 className="text-center">Badge 1</h6>
                            </CardBody>
                          </Card>
                        </Col>

                        <Col mg={3} xl={2}>
                          <Card className="align-items-center" >
                            <CardImg top className="img-fluid avatar-lg " src={img1} alt="Card image cap" />
                            <CardBody>
                              <h6 className="text-center">Badge 1</h6>
                            </CardBody>
                          </Card>
                        </Col>

                        <Col mg={3} xl={2}>
                          <Card className="align-items-center" >
                            <CardImg top className="img-fluid avatar-lg " src={img1} alt="Card image cap" />
                            <CardBody>
                              <h6 className="text-center">Badge 1</h6>
                            </CardBody>
                          </Card>
                        </Col>

                        <Col mg={3} xl={2}>
                          <Card className="align-items-center" >
                            <CardImg top className="img-fluid avatar-lg " src={img1} alt="Card image cap" />
                            <CardBody>
                              <h6 className="text-center">Badge 1</h6>
                            </CardBody>
                          </Card>
                        </Col>

                        <Col mg={3} xl={2}>
                          <Card className="align-items-center" >
                            <CardImg top className="img-fluid avatar-lg " src={img1} alt="Card image cap" />
                            <CardBody>
                              <h6 className="text-center">Badge 1</h6>
                            </CardBody>
                          </Card>
                        </Col>

                        <Col mg={3} xl={2}>
                          <Card className="align-items-center" >
                            <CardImg top className="img-fluid avatar-lg " src={img1} alt="Card image cap" />
                            <CardBody>
                              <h6 className="text-center">Badge 1</h6>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>

                    </div>
                  </Collapse>
                </Card> */}
              </div>

              {/* <Card>
                <Link to="#" className="text-dark collapsed" onClick={toggleMetadata}>
                  <div className="p-4">

                    <Media className="d-flex align-items-center">
                      <div className="me-3">
                        <div className="avatar-xs">
                          <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                            03
                                                            </div>
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <h5 className="font-size-16 mb-1">Meta Data</h5>
                        <p className="text-muted text-truncate mb-0">Fill all information below</p>
                      </div>
                      <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                    </Media>
                  </div>
                </Link>
                <Collapse isOpen={isOpenMetadata}>
                  <div className="p-4 border-top">
                    <Form>
                      <Row>
                        <Col sm={6}>
                          <div className="mb-3">
                            <Label htmlFor="metatitle">Meta title</Label>
                            <Input
                              id="metatitle"
                              name="productname"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </Col>
                        <Col sm={6}>
                          <div className="mb-3">
                            <Label htmlFor="metakeywords">Meta Keywords</Label>
                            <Input
                              id="metakeywords"
                              name="manufacturername"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </Col>
                      </Row>
                      <div className="mb-0">
                        <Label htmlFor="metadescription">
                          Meta Description
                          </Label>
                        <textarea
                          className="form-control"
                          id="metadescription"
                          rows="5"
                        />
                      </div>
                    </Form>

                  </div>
                </Collapse>
              </Card> */}
            </Col>
          </Row>
          <Row>
            <Col lg="3">
              <Button
                type="button"
                color="success"
                className="waves-effect waves-light mb-3"
                onClick={() => {
                  setmodal(!modal);
                }}
                to="#"
              >
                <i className="mdi mdi-plus me-1"></i>
                Update Supply Chain
              </Button>
              <Modal
                size="xl"
                isOpen={modal}
                toggle={() => {
                  setmodal(!modal);
                }}
              >
                <ModalHeader
                  toggle={() => {
                    setmodal(!modal);
                  }}
                >
                  Update Supply Chain
                </ModalHeader>
                <ModalBody>
                  <Row>
                    <div className="table-responsive">
                      <Table className="table mb-0">
                        <tbody>
                          <tr>
                            <td>
                              <Col className="col-12">
                                <div className="text-center mt-3">
                                  <div className="avatar-xs mx-auto mb-3">
                                    <Media className="d-flex align-items-center">
                                      <div className="me-3">
                                        <div className="avatar-xs">
                                          <div className="avatar-title rounded-circle bg-primary">
                                            01
                                          </div>
                                        </div>
                                      </div>
                                    </Media>
                                  </div>
                                  <h5 className="font-size-15">Fabre</h5>
                                  <Col>
                                    <Dropdown
                                      isOpen={singlebtn1}
                                      toggle={() => setSinglebtn1(!singlebtn1)}
                                    >
                                      <DropdownToggle
                                        tag="button"
                                        className="btn btn-primary ropdown-menu-right"
                                        caret
                                      >
                                        {fabre1}
                                        <i className="mdi mdi-chevron-down" />
                                      </DropdownToggle>
                                      <DropdownMenu className="dropdown-menu-right">
                                        {fabredetail.map((sup) => (
                                          <DropdownItem>
                                            <div
                                              onClick={(e) =>
                                                setFabre1(
                                                  e.currentTarget.textContent
                                                )
                                              }
                                            >
                                              {sup.name_sup}
                                            </div>
                                          </DropdownItem>
                                        ))}
                                      </DropdownMenu>
                                    </Dropdown>{" "}
                                  </Col>

                                  <Col className="mt-2">
                                    <Dropdown
                                      isOpen={singlebtn5}
                                      toggle={() => setSinglebtn5(!singlebtn5)}
                                    >
                                      <DropdownToggle
                                        tag="button"
                                        className="btn btn-primary ropdown-menu-right"
                                        caret
                                      >
                                        {fabre2}
                                        <i className="mdi mdi-chevron-down" />
                                      </DropdownToggle>
                                      <DropdownMenu className="dropdown-menu-right">
                                        <DropdownItem>Done</DropdownItem>
                                        {/* {fabredetail.map((sup)=>
                                            <DropdownItem>
                                              <div onClick = {(e) => setFabre2(e.currentTarget.textContent)}>
                                                {sup.name_sup}
                                                </div>
                                                </DropdownItem>
                                            )} */}
                                      </DropdownMenu>
                                    </Dropdown>{" "}
                                  </Col>
                                </div>
                              </Col>
                            </td>
                            <td>
                              <Col className="col-12">
                                <div className="text-center mt-3">
                                  <div className="avatar-xs mx-auto mb-3">
                                    <Media className="d-flex align-items-center">
                                      <div className="me-3">
                                        <div className="avatar-xs">
                                          <div className="avatar-title rounded-circle bg-primary">
                                            02
                                          </div>
                                        </div>
                                      </div>
                                    </Media>
                                  </div>
                                  <h5 className="font-size-15">Fabric</h5>
                                  <Col>
                                    <Dropdown
                                      isOpen={singlebtn2}
                                      toggle={() => setSinglebtn2(!singlebtn2)}
                                    >
                                      <DropdownToggle
                                        tag="button"
                                        className="btn btn-primary ropdown-menu-right"
                                        caret
                                      >
                                        {fabric1}
                                        <i className="mdi mdi-chevron-down" />
                                      </DropdownToggle>
                                      <DropdownMenu className="dropdown-menu-right">
                                        {fabricdetail.map((sup) => (
                                          <DropdownItem>
                                            <div
                                              onClick={(e) =>
                                                setFabric1(
                                                  e.currentTarget.textContent
                                                )
                                              }
                                            >
                                              {sup.name_sup}
                                            </div>
                                          </DropdownItem>
                                        ))}
                                      </DropdownMenu>
                                    </Dropdown>{" "}
                                  </Col>

                                  <Col className="mt-2">
                                    <Dropdown
                                      isOpen={singlebtn6}
                                      toggle={() => setSinglebtn6(!singlebtn6)}
                                    >
                                      <DropdownToggle
                                        tag="button"
                                        className="btn btn-primary ropdown-menu-right"
                                        caret
                                      >
                                        {fabric2}
                                        <i className="mdi mdi-chevron-down" />
                                      </DropdownToggle>
                                      <DropdownMenu className="dropdown-menu">
                                        <DropdownItem>Done</DropdownItem>
                                        {/* {fabricdetail.map((sup)=>
                                             <DropdownItem>
                                             <div onClick = {(e) => setFabric2(e.currentTarget.textContent)}>
                                               {sup.name_sup}
                                               </div>
                                               </DropdownItem>
                                            )} */}
                                      </DropdownMenu>
                                    </Dropdown>{" "}
                                  </Col>
                                </div>
                              </Col>
                            </td>
                            <td>
                              <Col className="col-12">
                                <div className="text-center mt-3">
                                  <div className="avatar-xs mx-auto mb-3">
                                    <Media className="d-flex align-items-center">
                                      <div className="me-3">
                                        <div className="avatar-xs">
                                          <div className="avatar-title rounded-circle bg-primary">
                                            03
                                          </div>
                                        </div>
                                      </div>
                                    </Media>
                                  </div>
                                  <h5 className="font-size-15">
                                    Trims and accessories
                                  </h5>
                                  <Col>
                                    <Dropdown
                                      isOpen={singlebtn3}
                                      toggle={() => setSinglebtn3(!singlebtn3)}
                                    >
                                      <DropdownToggle
                                        tag="button"
                                        className="btn btn-primary ropdown-menu-right"
                                        caret
                                      >
                                        {trim1}
                                        <i className="mdi mdi-chevron-down" />
                                      </DropdownToggle>
                                      <DropdownMenu className="dropdown-menu-right">
                                        {trimsdetail.map((sup) => (
                                          <DropdownItem>
                                            <div
                                              onClick={(e) =>
                                                setTrim1(
                                                  e.currentTarget.textContent
                                                )
                                              }
                                            >
                                              {sup.name_sup}
                                            </div>
                                          </DropdownItem>
                                        ))}
                                      </DropdownMenu>
                                    </Dropdown>{" "}
                                  </Col>

                                  <Col className="mt-2 px-2">
                                    <Dropdown
                                      isOpen={singlebtn8}
                                      toggle={() => setSinglebtn8(!singlebtn8)}
                                    >
                                      <DropdownToggle
                                        tag="button"
                                        className="btn btn-primary ropdown-menu-right"
                                        caret
                                      >
                                        {trim2}
                                        <i className="mdi mdi-chevron-down" />
                                      </DropdownToggle>
                                      <DropdownMenu className="dropdown-menu">
                                        <DropdownItem>Done</DropdownItem>
                                        {/* {trimsdetail.map((sup)=>
                                            <DropdownItem>
                                            <div onClick = {(e) => setTrim2(e.currentTarget.textContent)}>
                                              {sup.name_sup}
                                              </div>
                                              </DropdownItem>
                                            )} */}
                                      </DropdownMenu>
                                    </Dropdown>{" "}
                                  </Col>
                                </div>
                              </Col>
                            </td>
                            <td>
                              <Col className="col-12">
                                <div className="text-center mt-3">
                                  <div className="avatar-xs mx-auto mb-3">
                                    <Media className="d-flex align-items-center">
                                      <div className="me-3">
                                        <div className="avatar-xs">
                                          <div className="avatar-title rounded-circle bg-primary">
                                            04
                                          </div>
                                        </div>
                                      </div>
                                    </Media>
                                  </div>
                                  <h5 className="font-size-15">Dyeing</h5>
                                  <Col>
                                    <Dropdown
                                      isOpen={singlebtn4}
                                      toggle={() => setSinglebtn4(!singlebtn4)}
                                    >
                                      <DropdownToggle
                                        tag="button"
                                        className="btn btn-primary ropdown-menu-right"
                                        caret
                                      >
                                        {dye1}
                                        <i className="mdi mdi-chevron-down" />
                                      </DropdownToggle>
                                      <DropdownMenu className="dropdown-menu-right">
                                        {dyeingdetail.map((sup) => (
                                          <DropdownItem>
                                            <div
                                              onClick={(e) =>
                                                setDye1(
                                                  e.currentTarget.textContent
                                                )
                                              }
                                            >
                                              {sup.name_sup}
                                            </div>
                                          </DropdownItem>
                                        ))}
                                      </DropdownMenu>
                                    </Dropdown>{" "}
                                  </Col>

                                  <Col className="mt-2 px-2">
                                    <Dropdown
                                      isOpen={singlebtn10}
                                      toggle={() =>
                                        setSinglebtn10(!singlebtn10)
                                      }
                                    >
                                      <DropdownToggle
                                        tag="button"
                                        className="btn btn-primary ropdown-menu-right"
                                        caret
                                      >
                                        {dye2}
                                        <i className="mdi mdi-chevron-down" />
                                      </DropdownToggle>
                                      <DropdownMenu className="dropdown-menu">
                                        <DropdownItem>Done</DropdownItem>
                                        {/* {dyeingdetail.map((sup)=>
                                            <DropdownItem>
                                            <div onClick = {(e) => setDye2(e.currentTarget.textContent)}>
                                              {sup.name_sup}
                                              </div>
                                              </DropdownItem>
                                            )} */}
                                      </DropdownMenu>
                                    </Dropdown>{" "}
                                  </Col>
                                </div>
                              </Col>
                            </td>

                            <td>
                              <Col className="col-12">
                                <div className="text-center mt-3">
                                  <div className="avatar-xs mx-auto mb-3">
                                    <Media className="d-flex align-items-center">
                                      <div className="me-3">
                                        <div className="avatar-xs">
                                          <div className="avatar-title rounded-circle bg-primary">
                                            05
                                          </div>
                                        </div>
                                      </div>
                                    </Media>
                                  </div>
                                  <h5 className="font-size-15">CMT</h5>
                                  <Col>
                                    <Dropdown
                                      isOpen={singlebtn14}
                                      toggle={() =>
                                        setSinglebtn14(!singlebtn14)
                                      }
                                    >
                                      <DropdownToggle
                                        tag="button"
                                        className="btn btn-primary ropdown-menu-right"
                                        caret
                                      >
                                        {cmt1}
                                        <i className="mdi mdi-chevron-down" />
                                      </DropdownToggle>
                                      <DropdownMenu className="dropdown-menu-right">
                                        {cmtdetail.map((sup) => (
                                          <DropdownItem>
                                            <div
                                              onClick={(e) =>
                                                setCmt1(
                                                  e.currentTarget.textContent
                                                )
                                              }
                                            >
                                              {sup.name_sup}
                                            </div>
                                          </DropdownItem>
                                        ))}
                                      </DropdownMenu>
                                    </Dropdown>{" "}
                                  </Col>
                                  <Col className="mt-2 px-2">
                                    <Dropdown
                                      isOpen={singlebtn13}
                                      toggle={() =>
                                        setSinglebtn13(!singlebtn13)
                                      }
                                    >
                                      <DropdownToggle
                                        tag="button"
                                        className="btn btn-primary ropdown-menu-right"
                                        caret
                                      >
                                        {cmt2}
                                        <i className="mdi mdi-chevron-down" />
                                      </DropdownToggle>
                                      <DropdownMenu className="dropdown-menu">
                                        <DropdownItem>Done</DropdownItem>
                                        {/* {cmtdetail.map((sup)=>
                                            <DropdownItem>
                                            <div onClick = {(e) => setCmt2(e.currentTarget.textContent)}>
                                              {sup.name_sup}
                                              </div>
                                              </DropdownItem>
                                            )} */}
                                      </DropdownMenu>
                                    </Dropdown>{" "}
                                  </Col>
                                </div>
                              </Col>
                            </td>

                            <td>
                              <Col className="col-12">
                                <div className="text-center mt-3">
                                  <div className="avatar-xs mx-auto mb-3">
                                    <Media className="d-flex align-items-center">
                                      <div className="me-3">
                                        <div className="avatar-xs">
                                          <div className="avatar-title rounded-circle bg-primary">
                                            06
                                          </div>
                                        </div>
                                      </div>
                                    </Media>
                                  </div>
                                  <h5 className="font-size-15">Processing</h5>
                                  <Col>
                                    <Dropdown
                                      isOpen={singlebtn15}
                                      toggle={() =>
                                        setSinglebtn15(!singlebtn15)
                                      }
                                    >
                                      <DropdownToggle
                                        tag="button"
                                        className="btn btn-primary ropdown-menu-right"
                                        caret
                                      >
                                        {pro1}
                                        <i className="mdi mdi-chevron-down" />
                                      </DropdownToggle>
                                      <DropdownMenu className="dropdown-menu-right">
                                        {processingdetail.map((sup) => (
                                          <DropdownItem>
                                            <div
                                              onClick={(e) =>
                                                setPro1(
                                                  e.currentTarget.textContent
                                                )
                                              }
                                            >
                                              {sup.name_sup}
                                            </div>
                                          </DropdownItem>
                                        ))}
                                      </DropdownMenu>
                                    </Dropdown>{" "}
                                  </Col>

                                  <Col className="mt-2 px-2">
                                    <Dropdown
                                      isOpen={singlebtn16}
                                      toggle={() =>
                                        setSinglebtn16(!singlebtn16)
                                      }
                                    >
                                      <DropdownToggle
                                        tag="button"
                                        className="btn btn-primary ropdown-menu-right"
                                        caret
                                      >
                                        {pro2}
                                        <i className="mdi mdi-chevron-down" />
                                      </DropdownToggle>
                                      <DropdownMenu className="dropdown-menu">
                                        <DropdownItem>Done</DropdownItem>
                                        {/* {processingdetail.map((sup)=>
                                            <DropdownItem>
                                            <div onClick = {(e) => setPro2(e.currentTarget.textContent)}>
                                              {sup.name_sup}
                                              </div>
                                              </DropdownItem>
                                            )} */}
                                      </DropdownMenu>
                                    </Dropdown>{" "}
                                  </Col>
                                </div>
                              </Col>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <div className="text-end">
                        <button
                          type="button"
                          // onClick={

                          // }
                          // type="submit"

                          className="btn btn-success w-sm waves-effect waves-light"
                          data-toggle="modal"
                          data-target=".bs-example-modal-sm"
                        >
                          Submit
                        </button>
                      </div>
                    </Col>
                  </Row>
                </ModalBody>
              </Modal>
            </Col>
          </Row>
          <Row className="row mb-4">
            <div className="col text-end">
              <Link to="#" className="btn btn-danger" onClick={cancelProd}>
                {" "}
                <i className="uil uil-times me-1"></i> Cancel{" "}
              </Link>{" "}
              {isEdit ? (
                <Link to="#" className="btn btn-success" onClick={editProduct}>
                  {" "}
                  <i className="uil uil-file-alt me-1"></i> Edit{" "}
                </Link>
              ) : (
                <Link to="#" className="btn btn-success" onClick={saveProduct}>
                  {" "}
                  <i className="uil uil-file-alt me-1"></i> Save{" "}
                </Link>
              )}
            </div>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ProductDetails;
