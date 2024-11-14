import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideBar.css";
import profile from"../assets/images/Profile.svg";
const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumb-main-container">
     
      <nav aria-label="breadcrumb">
      <div className="flex items-center justify-between mb-0">
        <h5>{location.pathname.replace("/", "")}</h5>
      </div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Dashboard</Link>
          </li>
          {pathnames.map((value, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return isLast ? (
              <li
                key={index}
                className="breadcrumb-item active"
                aria-current="page"
              >
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </li>
            ) : (
              <li key={index} className="breadcrumb-item">
                <Link to={routeTo}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>
      <>
       
      </>
     
        <div className="profile-info">
        <mwc-icon className="menu-icon">
          <span class="material-icons">notifications</span>
        </mwc-icon>
        <img src={profile}  alt="profile" className="profile" />
        </div>
    </div>
  );
};

export default Breadcrumbs;
