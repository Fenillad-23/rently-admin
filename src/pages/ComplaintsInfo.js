import React, { useState } from "react";
import BasicTable from "../components/TableDataView/TableView";
import {
  paginationModel,
  columnname,
  rowdata,
} from "../components/model_data/Complaints/ComplaintsInfo.js";

function ComplaintsInfo() {
  return (
    <>
      <BasicTable
        columnname={columnname}
        rowdata={rowdata}
        noOfColumns={5}
        tableName="List Of Complaints"
        initialState={paginationModel}
      />
    </>
  );
}

export default ComplaintsInfo;
