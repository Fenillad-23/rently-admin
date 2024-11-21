import React, { useState } from "react";
import BasicTable from "../components/TableDataView/TableView";
import {
  paginationModel,
  columnname,
  rowdata,
} from "../components/model_data/Parking/ParkingInfo.js";

import {
    guestParkingColumns,
    guestParkingPagination,
    guestParkingData
  } from "../components/model_data/Parking/GuestParkingInfo.js";

function ParkingInfo() {
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

        <div className="total-renatal-vacant">
          <h5>16/40</h5>
          <p>Lots</p>
        </div>
        <div className="total-renatal">
          <h5>$2,000.00</h5>
          <p>Total Pass Income</p>
        </div>
        <div className="total-renatal-occupied">
          <h5>$1,500.00</h5>
          <p>Received Amount</p>
        </div>
        <div className="total-renatal-vacant">
          <h5>$500.00</h5>
          <p>Pending Amount</p>
        </div>
      </div>
      <BasicTable
        columnname={columnname}
        rowdata={rowdata}
        noOfColumns={8}
        tableName="Monthly Parking Pass"
        initialState={paginationModel}
      />
      <BasicTable
        columnname={guestParkingColumns}
        rowdata={guestParkingData}
        noOfColumns={7}
        noOfRows={5}
        tableName="Guest Parking"
        initialState={guestParkingPagination}
      />
    </>
  );
}
export default ParkingInfo;
