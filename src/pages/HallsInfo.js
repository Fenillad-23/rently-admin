import React, { useState } from "react";
import BasicTable from "../components/TableDataView/TableView";
import {
  paginationModel,
  columnname,
  rowdata,
} from "../components/model_data/Hall/HallInfo.js";

function HallsInfo() {
  return (
    <>
      <BasicTable
        columnname={columnname}
        rowdata={rowdata}
        noOfColumns={6}
        tableName="Hall Requests"
        initialState={paginationModel}
      />
    </>
  );
}
export default HallsInfo;
