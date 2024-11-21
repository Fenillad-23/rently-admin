// import React, { useState } from "react";
import "./pages.css";
import "@material/mwc-icon/mwc-icon.js";
// import polygon from "../assets/images/Polygon.svg";
import BasicTable from "../components/TableDataView/TableView";
import {
  paginationModel,
  columnname,
  rowdata,
} from "../components/model_data/Tenant/TenantInfo";
function TenantsInfo() {
  const date = new Date();
  const currentMonth = date.toLocaleString("default", { month: "long" });
  const currentYear = date.getFullYear();

  return (
    <>
      <div className="info-container">
        <div className="current-month">
          <div className="img-wrapper">
            <mwc-icon className="top">calendar_month</mwc-icon>
          </div>

          {currentMonth + " " + currentYear}
        </div>

        <div className="total-renatal">
          <h5>32</h5>
          <p>Total Tenants</p>
        </div>
        <div className="total-renatal-occupied">
          <h5>24</h5>
          <p>Occupied</p>
        </div>
        <div className="total-renatal-vacant">
          <h5>8</h5>
          <p>Unoccupied</p>
        </div>
      </div>
      <BasicTable
        columnname={columnname}
        rowdata={rowdata}
        noOfColumns={5}
        initialState={paginationModel}
        tableName="Users"
        redirectTo="/TenantsIndividualinfo"
      />
    </>
  );
}
export default TenantsInfo;
