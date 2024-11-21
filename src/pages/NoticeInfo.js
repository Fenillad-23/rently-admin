import React, { useState } from "react";
import BasicTable from "../components/TableDataView/TableView";
import {
  paginationModel,
  columnname,
  rowdata,
} from "../components/model_data/Notice/NoticeInfo.js";

function NoticeInfo() {
  return (
    <>
      <BasicTable
        columnname={columnname}
        rowdata={rowdata}
        noOfColumns={5}
        tableName="List Of Notices"
        initialState={paginationModel}
      />
    </>
  );
}

export default NoticeInfo;
