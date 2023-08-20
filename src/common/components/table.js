import * as React from "react";
import Table from "@mui/material/Table";
import { styled } from '@mui/material/styles';
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#697689",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


export const MyTable = ({ rows, fields, id, handleDelete, handleEdit }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            {fields.map((field) => (
              <StyledTableCell key={field.name} align="left">
                {field.header}
              </StyledTableCell>
            ))}
            <StyledTableCell align="left">Action</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row[id]}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {fields.map((field) => (
                <StyledTableCell align="left">
                  {row[field.name]}
                </StyledTableCell>
              ))}
              <StyledTableCell align="left">
                <EditOutlinedIcon
                  onClick={() => handleEdit(row[id])}
                  fontSize="small"
                  sx={{ paddingRight: 1 }}
                  color="primary"
                />
                <DeleteOutlinedIcon
                  onClick={() => handleDelete(row[id])}
                  color="error"
                  fontSize="small"
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
