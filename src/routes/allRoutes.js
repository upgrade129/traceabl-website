import React from "react";
import { Redirect } from "react-router-dom";
// Dashboard
//import Dashboard from "../pages/Dashboard/index";

import Home from "../pages/Home/index";
import Suppliers from "../pages/Suppliers/index";
import Products from "../pages/Products/index";
import Badges from "../pages/Badges/index";
import Tracing from "../pages/Tracing/index";
import Journey from "../pages/Journey/index";
import Qrcode from "../pages/Qrcode/index";
import Faqs from "../pages/Faqs/index";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import Forms from "../pages/Authentication/forms";
import Form1s from "../pages/Authentication/form1s";
import Form2s from "../pages/Authentication/form2s";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
// Profile
import UserProfile from "../pages/Authentication/user-profile";
import SupplierDetails from "../pages/Suppliers/SupplierDetails";
import ProductDetails from "../pages/Products/productDetails";
import BadgeDetails from "../pages/Badges/BadgeDetails";
import TraceDetails from "../pages/Tracing/TraceDetails";
import ProductExist from "../pages/Products/eProduct";
import JourneyView from "../pages/Journey/tracingView";

const userRoutes = [
  { path: "/home", component: Home },
  // { path: "/dashboard", component: Dashboard },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/home" /> },

  // //profile
  { path: "/profile", component: UserProfile },

  // this route should be at the end of all other routes
  // { path: "/", exact: true, component: () => <Redirect to="/home" /> },

  // Your suppliers
  { path: "/suppliers", component: Suppliers },

  // Your suppliers
  { path: "/products", component: Products },

  // Your badgets
  { path: "/badges", component: Badges },

  // tracing
  { path: "/tracing", component: Tracing },

  // publish journey
  { path: "/journey", component: Journey },

  // qrcodes
  { path: "/qrcode", component: Qrcode },

  // faqs
  { path: "/faqs", component: Faqs },

  // Supplier Details
  { path: "/supplierdetails", component: SupplierDetails },

  // product Details
  { path: "/addProduct", component: ProductDetails },
  //existing product
  { path: "/ProductDetails", component: ProductExist },

  // badge Details
  { path: "/badgedetails", component: BadgeDetails },

  // trace Details
  { path: "/tracedetails", component: TraceDetails },
  //tracing detail view
  { path: "/journeyview", component: JourneyView },
];

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
  { path: "/forms", component: Forms },
  { path: "/formsec", component: Form1s },
  { path: "/formthr", component: Form2s },
];

export { userRoutes, authRoutes };
