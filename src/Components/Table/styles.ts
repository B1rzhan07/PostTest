import { TableCell, TableRow, styled, tableCellClasses } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#474955",
    color: theme.palette.common.white,
  },

  "& div": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "70px",
  },
}));

export const StyledTableRow = styled(TableRow)({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "& > *": {
    borderRight: "1px solid #e0e0e0",
  },
});
