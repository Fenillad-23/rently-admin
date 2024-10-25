import SideBar from "./SideBar";
import { NavLink } from "react-router-dom";
import "@material/mwc-icon/mwc-icon.js";
function MenuItem({
  path = "/",
  className = "sidebar-menu-link",
  linkIcon,
  linkText = "",
  alt = "",
}) {
  return (
    <div className="sidebar-menu-item-card">
      {" "}
      <NavLink to={path} className={({ isActive }) => isActive ? `${className} active` : className}>
        <div className="menu">
          <mwc-icon className="menu-icon">{linkIcon}</mwc-icon>
          {/* <img src={linkIcon} alt={alt} className="menu-icon" /> */}
          <span>{linkText}</span>
        </div>
      </NavLink>
    </div>
  );
}
export default MenuItem;
