import logo from "./logo.svg";
import "./App.css";
import { useLocation, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/DashBoard";
import TenantsInfo from "./pages/TenantsInfo";
import ParkingInfo from "./pages/ParkingInfo";
import ComplaintsInfo from "./pages/ComplaintsInfo";
import ServiceInfo from "./pages/ServicesInfo";

import HallsInfo from "./pages/HallsInfo";
import NoticeInfo from "./pages/NoticeInfo";
// import UserServicesInfo from "./pages/UserServicesInfo";
import RentInfo from "./pages/RentInfo";
import SideBar from "./layout/SideBar";
import Breadcrumbs from "./layout/BreadCrums";
import TenantsIndividualinfo from "./pages/TenantIndividualInfo";
function App() {
  const location = useLocation();
  return (
    <>
      <div className="App">
        {location.pathname !== "/login" && <SideBar />}
        <div className="main-container">
          {location.pathname !== "/login" && <Breadcrumbs />}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/TenantsIndividualinfo"
              element={<TenantsIndividualinfo />}
            />
            <Route path="/Tenants" element={<TenantsInfo />} />
            <Route path="/Parking" element={<ParkingInfo />} />
            <Route path="/Halls" element={<HallsInfo />} />
            <Route path="/Complaints" element={<ComplaintsInfo />} />
            <Route path="/Notice" element={<NoticeInfo />} />
            <Route path="/Service" element={<ServiceInfo />} />
            {/* <Route path="/UserServicesInfo" element={<UserServicesInfo />} /> */}
            <Route path="/Rents" element={<RentInfo />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
