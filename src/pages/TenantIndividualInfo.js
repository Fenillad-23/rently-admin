import React from "react";
import { useLocation } from "react-router-dom";
import ServiceInfo from "../components/TentantInfoCards/UserServicesInfo";
import UserDetail from "../components/TentantInfoCards/UserDetail";
import UserPaymentDetails from "../components/TentantInfoCards/UserPaymentDetails";
import {
  individualInfopaginationModel,
  columnname,
  rowdata,
} from "../components/model_data/TenantIndividualInfo";
import {
  parkingColumnname, parkingRowdata, parkingPaginationModel
} from "../components/model_data/TenantParkingInfo";
import {
  complainColumnname, complainRowdata, complainPaginationModel
} from "../components/model_data/TenantComplainService";
import BasicTable from "../components/TableDataView/TableView";
import "./pages.css";
function TenantsIndividualinfo() {
  const location = useLocation();
  const tenantData = location.state?.data;
  const userRentDetails = {
    "Rent Due": "$650.00",
    "Due Date": "23-Oct-2024",
    "Payment Status": "Payment Pending",
  };
  const userParkingDetails = {
    "Rent Due": "$650.00",
    "Due Date": "23-Oct-2024",
    "Payment Status": "Payment Done",
  };
  const userComplaintsDetails = {
    "Total Count": "3",
    Resolved: "2",
    Pending: "1",
  };
  const userServiceRequestDetails = {
    "Total Count": "2",
    Resolved: "2",
    Pending: "0",
  };

  return (
    <div className="tenants-individual-info-wrapper">
      <div className="tenants-individual-info">
        {tenantData ? (
          <>
            <div>
              <UserDetail data={tenantData} />
            </div>
            <div className="User-additional-info">
              <div className="user-rent-info">
                <UserPaymentDetails
                  title="Rent Details"
                  data={userRentDetails}
                />
                <ServiceInfo title="Complaints" data={userComplaintsDetails} />
              </div>
              <div className="user-service-info">
                <UserPaymentDetails
                  title="Monthly Parking Pass"
                  data={userParkingDetails}
                />
                <ServiceInfo
                  title="Service Request"
                  data={userServiceRequestDetails}
                />
              </div>
            </div>
          </>
        ) : (
          <p>No tenant data available.</p>
        )}
      </div>
      <BasicTable
        columnname={columnname}
        rowdata={rowdata}
        noOfColumns={5}
        initialState={individualInfopaginationModel}
        tableName="Rent"
        noOfRows={5}
      />
      <BasicTable
        columnname={parkingColumnname}
        rowdata={parkingRowdata}
        noOfColumns={5}
        initialState={parkingPaginationModel}
        tableName="Montly Parking Pass"
        noOfRows={5}
       
      />
      <BasicTable
        columnname={complainColumnname}
        rowdata={complainRowdata}
        noOfColumns={5}
        initialState={complainPaginationModel}
        tableName="Complaint & Request"
        noOfRows={5}
      />
    </div>
  );
}

export default TenantsIndividualinfo;
