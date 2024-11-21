import React, { useState } from "react";
import BasicTable from "../components/TableDataView/TableView";
import {
  paginationModel,
  columnname,
  rowdata,
} from "../components/model_data/Rental/RentalInfo";

function RentInfo() {
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
          <h5>$17,700.00</h5>
          <p>Total Rent Due</p>
        </div>
        <div className="total-renatal-occupied">
          <h5>$11,250.00</h5>
          <p>Rent Received</p>
        </div>
        <div className="total-renatal-vacant">
          <h5>$6,450.00</h5>
          <p>Rent Pending</p>
        </div>
      </div>
      <BasicTable
        columnname={columnname}
        rowdata={rowdata}
        noOfColumns={6}
        tableName="Rents"
        initialState={paginationModel}
      />
    </>
  );
}

export default RentInfo;
