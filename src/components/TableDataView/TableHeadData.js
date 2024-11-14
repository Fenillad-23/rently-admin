import React from "react";
import { Typography,  Box } from "@mui/material";
import "../component.css";
function TableHeadData({ tableName, fieldValue, onChange = () => {} }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 1  ,
        }}
      >
        <Typography className="tableName" sx={{ fontWeight: 'bold',fontSize: 24  }}>
          {tableName}
        </Typography>
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="field"
          value={fieldValue}
          onChange={onChange}
        />
      </Box>
      <hr style={{ backgroundColor: 'black', height: '1px', border: 'none' }} />
    </>
  );
}

export default TableHeadData;
