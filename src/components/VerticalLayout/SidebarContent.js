import PropTypes from "prop-types";
import React, { useCallback, useEffect, useRef } from "react";

// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

const SidebarContent = (props) => {
  const ref = useRef();

  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }, []);

  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname;

    new MetisMenu("#side-menu");
    let matchingMenuItem = null;
    const ul = document.getElementById("side-menu");
    const items = ul.getElementsByTagName("a");
    for (let i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [props.location.pathname, activateParentDropdown]);

  useEffect(() => {
    ref.current.recalculate();
  });

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar
        style={{ maxHeight: "100%" }}
        ref={ref}
        className="sidebar-menu-scroll"
      >
         
        <div id="sidebar-menu">
         
          <ul className="metismenu list-unstyled" id="side-menu">
          <div>
            <li style={{height:"20px"}} className="menu-title">{props.t("Menu")} </li>

            <li style={{height:"40px"}}>
              <Link to="/home" className="waves-effect">
                <i style={{fontSize:"15px"}}className="uil-home-alt"></i>
                <span  style={{fontSize:"15px"}}>{props.t("Dashboard")}</span>
              </Link>
            </li>

            <li style={{height:"40px"}}> 
              <Link to="/suppliers" className="waves-effect">
                <i style={{fontSize:"15px"}}className="uil-user-circle"></i>
                <span style={{fontSize:"15px"}}>{props.t("Your Suppliers")}</span>
              </Link>
            </li>

            <li style={{height:"40px"}}>
              <Link to="/products" className="waves-effect">
                <i style={{fontSize:"15px"}}className="uil-store"></i>
                <span style={{fontSize:"15px"}}>{props.t("Your Products")}</span>
              </Link>
            </li>

            <li style={{height:"40px"}}>
              <Link to="/badges" className="waves-effect">
                <i style={{fontSize:"15px"}}className="uil-shutter-alt"></i>
                <span style={{fontSize:"15px"}}>{props.t("Your Badges")}</span>
              </Link>
            </li>

            <li style={{height:"40px"}}>
              <Link to="/tracing" className="waves-effect">
                <i style={{fontSize:"15px"}}className="uil-invoice"></i>
                <span style={{fontSize:"15px"}}>{props.t("Tracing")}</span>
              </Link>
            </li>

            <li style={{height:"40px"}}>
              <Link to="/journey" className="waves-effect">
                <i style={{fontSize:"15px"}}className="uil-calender"></i>
                <span style={{fontSize:"15px"}}>{props.t("Publish Your Journey")}</span>
              </Link>
            </li>

            <li style={{height:"40px"}}>
              <Link to="/qrcode" className="waves-effect">
                <i style={{fontSize:"15px"}} className="uil-streering"></i>
                <span style={{fontSize:"15px"}}>{props.t("QR Codes")}</span>
              </Link>
            </li>

            <li style={{height:"40px"}}>
              <Link to="/faqs" className="waves-effect">
                <i style={{fontSize:"15px"}} className="uil-flask"></i>
                <span style={{fontSize:"15px"}}>{props.t("FAQ's")}</span>
              </Link>
            </li>
            </div>
          </ul>
       
        </div>

      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));
