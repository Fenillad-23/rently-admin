import React, { useState, useEffect } from "react";
import BasicTable from "../components/TableDataView/TableView";
import {
  paginationModel,
  columnname,
  rowdata,
  hallSchedule,
} from "../components/model_data/Hall/HallInfo.js";
import "./HallsInfo.css";

function HallsInfo() {
  const [isArrowClicked, setIsArrowClicked] = useState(false);

  useEffect(() => {
    const handleRowArrowClick = (event) => {
      setIsArrowClicked(true); // Set to true to show Hall Schedule
    };

    window.addEventListener("arrow-click", handleRowArrowClick);
    return () => {
      window.removeEventListener("arrow-click", handleRowArrowClick);
    };
  }, []);

  if (isArrowClicked) {
    return (
      <div className="list-wrapper">
        <div className="hall-header">
          <mwc-icon
            className="back-arrow"
            onClick={() => setIsArrowClicked(false)} // Set to false to render BasicTable
          >
            arrow_back
          </mwc-icon>
          Hall Schedule
        </div>
        <div className="list">
          {hallSchedule.map((row, index) => (
            <div className="list-item-wrapper" key={index}>
              <div className="list-item-row">
                <div className="date">{row.date}</div>
                <div className="hall-name">{row.hall}</div>
              </div>
              <div className="list-item-row">
                <div className="time">{row.time}</div>
                <div className="tenant-name">
                  {row.sessionId} - {row.tenant}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <BasicTable
        columnname={columnname}
        rowdata={rowdata}
        noOfColumns={6}
        tableName="Hall Requests"
        initialState={paginationModel}
        showIconProp={true}
      />
    </>
  );
}

export default HallsInfo;
