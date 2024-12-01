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
import "@material/mwc-icon-button";

function ComplaintsInfo() {
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [complaintDetails, setComplaintDetails] = useState(null);

  useEffect(() => {
    const handleRowArrowClick = (event) => {
      setComplaintDetails(event.detail);
      setIsArrowClicked(true);
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
          <div className="dialog-header">
            {complaintDetails.title}{" "}
            <mwc-icon-button
              icon="close"
              onClick={() => setIsArrowClicked(false)}
            ></mwc-icon-button>
          </div>

          <div className="basic-detail-wrapper">
            <div>
              <div className="header">Ref. No:</div>
              <div className="label">{complaintDetails.refNo} </div>
            </div>
            <div>
              <div className="header">Unit No:</div>
              <div className="label">{complaintDetails.unitNo}</div>
            </div>
            <div>
              <div className="header">Related To</div>
              <div className="label">Neigbour</div>
            </div>
            <div>
              <div className="header">Date:</div>
              <div className="label">{complaintDetails.date}</div>
            </div>
            <div>
              <div className="header">Status:</div>
              <div className={`label ${complaintDetails.status}`}>
                {complaintDetails.status}
              </div>
            </div>
          </div>

          <div className="header">Description:</div>
          <div className="desc label">
            The neighbours in the unit 134 are playing loud music even at night.
            We have asked them about the issue before and no response from their
            side.
          </div>

          {complaintDetails.status === "Pending" ? (
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
                The garbage disposal issue had been resolved. Sorry for the
                inconvenience experienced.
              </div>
            </div>
          )}

          {complaintDetails.status === "Pending" ? (
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
            ``
          )}
        </mwc-dialog>
      ) : (
        ``
      )}
    </div>
  );
}

export default ComplaintsInfo;
