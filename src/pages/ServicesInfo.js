import React, { useState, useEffect } from "react";
import BasicTable from "../components/TableDataView/TableView";
import {
  paginationModel,
  columnname,
  rowdata,
} from "../components/model_data/Service/ServiceInfo.js";
import "@material/mwc-dialog/mwc-dialog.js";
import "@material/mwc-button";
import "@material/mwc-textarea";
import "./ServiceInfo.css";
import "@material/mwc-icon-button";
import ReactDatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; // Import the default styles
import dayjs from "dayjs";

function ServiceInfo() {
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [serviceDetails, setServiceDetails] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dayjs()); // Store selected date

  useEffect(() => {
    const handleRowArrowClick = (event) => {
      console.log(event.detail);
      setServiceDetails(event.detail);
      setIsArrowClicked(true);
    };

    window.addEventListener("arrow-click", handleRowArrowClick);
    return () => {
      window.removeEventListener("arrow-click", handleRowArrowClick);
    };
  }, []);

  return (
    <div className="service-info">
      <BasicTable
        columnname={columnname}
        rowdata={rowdata}
        noOfColumns={5}
        tableName="List Of Services"
        initialState={paginationModel}
        showIconProp={true}
      />

      {isArrowClicked ? (
        <mwc-dialog open>
          <div className="dialog-header">
            {serviceDetails.Title}
            <mwc-icon-button
              icon="close"
              onClick={() => setIsArrowClicked(false)}
            ></mwc-icon-button>
          </div>

          <div className="basic-detail-wrapper">
            <div>
              <div className="header">Ref. No:</div>
              <div className="label">{serviceDetails.RefNo} </div>
            </div>
            <div>
              <div className="header">Unit No:</div>
              <div className="label">{serviceDetails.UnitNo}</div>
            </div>
            <div>
              <div className="header">Date:</div>
              <div className="label">{serviceDetails.Date}</div>
            </div>
            <div>
              <div className="header">Status:</div>
              <div className={`label ${serviceDetails.Status}`}>
                {serviceDetails.Status}
              </div>
            </div>
          </div>

          <div className="header">Description:</div>
          <div className="desc label">
            The entry access to the apartment shows invalid while using. Please
            resolve the issue at the earliest.
          </div>

          <div>
            <div className="header" style={{ paddingTop: "16px" }}>
              Due Date:
            </div>
            <ReactDatePicker
              selected={selectedDate.toDate()} 
              onChange={(date) => setSelectedDate(dayjs(date))}
              dateFormat="yyyy/MM/dd"
              className="react-datepicker-input"
              placeholderText="Select a date"
            />
          </div>

          {serviceDetails.Status === "Pending" ? (
            <mwc-textarea
              outlined
              label="Admin's Comment"
              placeholder="Enter Comment"
            ></mwc-textarea>
          ) : (
            <div>
              <div className="header" style={{ paddingTop: "24px" }}>
                Admin's Comment:
              </div>
              <div className="desc label">
                The issue regarding wifi is resolved.
              </div>
            </div>
          )}

          {serviceDetails.Status === "Pending" ? (
            <>
              <mwc-button
                outlined
                slot="secondaryAction"
                onClick={() => setIsArrowClicked(false)}
              >
                Cancel
              </mwc-button>
              <mwc-button
                raised
                slot="primaryAction"
                onClick={() => setIsArrowClicked(false)}
              >
                Resolve Issue
              </mwc-button>
            </>
          ) : (
            ""
          )}
        </mwc-dialog>
      ) : (
        ""
      )}
    </div>
  );
}

export default ServiceInfo;
