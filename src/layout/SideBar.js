import React from "react";
import { Link } from "react-router-dom";
// import Icon from "../helper/IconConst.js";
import "./SideBar.css";
import MenuItem from "./MenuItem";
import logo_f from "../assets/images/logo_f.svg";
import "@material/mwc-icon/mwc-icon.js";
import CustomButton from "../components/CustomButton";
function SideBar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <Link to="/">
          <img src={logo_f} alt="Logo" className="banner-logo" />
        </Link>
      </div>
      <div>
        <hr />
      </div>
      <div className="sidebar-menu-item">
        <MenuItem
          path="/"
          linkIcon="dashboard"
          linkText="Dashboard"
          alt="dashboard"
        />
        <MenuItem
          path="/Tenants"
          linkIcon="group"
          linkText="Tenants"
          alt="Tenants"
        />
        <MenuItem
          path="/Rents"
          linkIcon="receipt"
          linkText="Rents"
          alt="Rents"
        />
        <MenuItem
          path="/Parking"
          linkIcon="local_parking"
          linkText="Parking"
          alt="Parking"
        />
        <MenuItem
          path="/Halls"
          linkIcon="event_seat"
          linkText="Halls"
          alt="Halls"
        />
        <MenuItem
          path="/Complaints"
          linkIcon="report_problem"
          linkText="Complaints"
          alt="Complaints"
        />
        <MenuItem
          path="/Service"
          linkIcon="home_repair_service"
          linkText="Services"
          alt="Services"
        />
        <MenuItem
          path="/Notice"
          linkIcon="mail"
          linkText="Notices"
          alt="Notices"
        />
      </div>
      <div className="sidebar-action-button">
      <CustomButton
                type='submit'
                className="btn-logout">
                Logout
              </CustomButton>
      </div>
    </div>
  );
}

export default SideBar;
