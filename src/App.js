import logo from "./logo.svg";
import "./App.css";
import { useLocation, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/DashBoard";
import TenantsInfo from "./pages/TenantsInfo";
import ParkingInfo from "./pages/ParkingInfo";
import ComplaintsInfo from "./pages/ComplaintsInfo";
import HallsInfo from "./pages/HallsInfo";
import NoticeInfo from "./pages/NoticeInfo";
import ServicesInfo from "./pages/ServicesInfo";
import RentInfo from "./pages/RentInfo";
import SideBar from "./layout/SideBar";
function App() {
  const location = useLocation();
  return (
    <>
      <div className="App">
      {location.pathname !== "/login" && <SideBar />}
        <div className="main-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tenant_info" element={<TenantsInfo />} />
          <Route path="/parking_info" element={<ParkingInfo />} />
          <Route path="/complaint_info" element={<ComplaintsInfo />} />
          <Route path="/hall_info" element={<HallsInfo />} />
          <Route path="/notice_info" element={<NoticeInfo />} />
          <Route path="/service_info" element={<ServicesInfo />} />
          <Route path="/rent_info" element={<RentInfo />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
