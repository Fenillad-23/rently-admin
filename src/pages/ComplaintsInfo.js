import React, { useState, useEffect } from "react";
import BasicTable from "../components/TableDataView/TableView";
import {
  paginationModel,
  columnname,
  rowdata,
} from "../components/model_data/Complaints/ComplaintsInfo.js";
import "@material/mwc-dialog/mwc-dialog.js";
import "@material/mwc-button";
import "@material/mwc-textarea";
import "./ComplaintsInfo.css";

function ComplaintsInfo() {
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

  return (
    <div className="compaint-info">
      <BasicTable
        columnname={columnname}
        rowdata={rowdata}
        noOfColumns={5}
        tableName="List Of Complaints"
        initialState={paginationModel}
        showIconProp={true}
      />

      {isArrowClicked ? (
        <mwc-dialog open>
          <div className="dialog-header">Loud music at night</div>

          <div className="basic-detail-wrapper">
            <div>
              <div className="header">Ref. No:</div>
              <div className="label">#C0010</div>
            </div>
            <div>
              <div className="header">Unit No:</div>
              <div className="label">136</div>
            </div>
            <div>
              <div className="header">Related To</div>
              <div className="label">Neigbour</div>
            </div>
            <div>
              <div className="header">Date:</div>
              <div className="label">10 Dec 2024</div>
            </div>
            <div>
              <div className="header">Status:</div>
              <div className="label">Pending</div>
            </div>
          </div>

          <div className="header">Description:</div>
          <div className="desc label">
            The neighbours in the unit 134 are playing loud music even at night.
            We have asked them about the issue before and no response from their
            side.
          </div>

          <mwc-textarea
            outlined
            label="Admin's Comment"
            placeholder="Enter Comment"
          ></mwc-textarea>

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
        </mwc-dialog>
      ) : (
        ``
      )}
    </div>
  );
}

export default ComplaintsInfo;
