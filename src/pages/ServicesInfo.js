import React, { useState } from "react";
import BasicTable from "../components/TableDataView/TableView";
import {
  paginationModel,
  columnname,
  rowdata,
} from "../components/model_data/Service/ServiceInfo.js";

function ServiceInfo() {
  return (
    <>
      <BasicTable
        columnname={columnname}
        rowdata={rowdata}
        noOfColumns={5}
        tableName="List Of Services"
        initialState={paginationModel}
      />
    </>
  );
}

export default ServiceInfo;
