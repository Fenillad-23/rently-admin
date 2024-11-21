import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import TableHeadData from "./TableHeadData";
import "../component.css";
import { useNavigate } from "react-router-dom";

export default function BasicTable({
  columnname,
  rowdata,
  noOfColumns,
  tableName,
  redirectTo,
  noOfRows = 10,
  style,
}) {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(noOfRows);
  const [fieldValue, setFieldValue] = React.useState("");
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRowClick = (row) => {
    navigate(redirectTo, { state: { data: row } });
  };

  const handleSearch = (event) => {
    setFieldValue(event.target.value);
  };

  const filteredRows = rowdata.filter((row) =>
    Object.values(row).some((value) => {
      if (!value) return;

      return value.toString().toLowerCase().includes(fieldValue.toLowerCase());
    })
  );

  return (
    <TableContainer
      component={Paper}
      sx={{ borderRadius: 4, marginTop: 2 }}
      className="table-data"
    >
      <TableHeadData
        tableName={tableName}
        fieldValue={fieldValue}
        onChange={handleSearch}
      />
      <Table sx={{ minWidth: 650 }} aria-label="dynamic table">
        <TableHead>
          <TableRow>
            {columnname.map((col, index) => (
              <TableCell
                key={index}
                align={index === 0 ? "left" : "right"}
                sx={{ fontWeight: "bold", textAlign: "left" }}
                className="colName"
              >
                {col}
              </TableCell>
            ))} 
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {Object.values(row)
                  .slice(0, noOfColumns)
                  .map((cell, cellIndex) => {
                    const columnName = columnname[cellIndex];
                    let tagColor;

                    if (columnName === "Status") {
                      if (["Pending"].includes(cell)) {
                        tagColor = "yellow-tag";
                      } else if (
                        ["Published", "Paid", "Resolved", "Approved", "In Use"].includes(
                          cell
                        )
                      ) {
                        tagColor = "green-tag";
                      } else if (["Rejected", "Deleted"].includes(cell)) {
                        tagColor = "red-tag";
                      } else {
                        tagColor = "brown-tag";
                      }
                    }

                    return (
                      <TableCell
                        key={cellIndex}
                        align={cellIndex === 0 ? "left" : "right"}
                        sx={{ textAlign: "left" }}
                        onClick={() => handleRowClick(row)}
                      >
                        {cell ? (
                          columnName === "Status" ? (
                            <div className={`status-wrapper ${tagColor}`}>
                              {cell}
                            </div>
                          ) : (
                            cell
                          )
                        ) : (
                          "--"
                        )}
                      </TableCell>
                    );
                  })}
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={filteredRows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[]}
      />
    </TableContainer>
  );
}
