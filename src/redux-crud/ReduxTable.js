import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { Icon, IconButton, useStepperContext } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, editedUsers, isUserEdit, userUpdated } from "./usersSlice";
import { VislibleParam } from "./ReduxMasterFile";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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

export default function ReduxTable({ visible, setVisible }) {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  console.log("users", users);

  const handleEdit = (userId) => {
    console.log("userEdit", userId);
    dispatch(userUpdated(userId));
    setVisible(VislibleParam.create);
  };
  const handleDelete = (userId) => {
    console.log("userDelete", userId);
    dispatch(deleteData(userId));
  };
  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.length > 0 ? (
            users?.map((user) => (
              <StyledTableRow key={user?.firstName}>
                <StyledTableCell component="th" scope="row">
                  {user?.firstName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {user?.lastName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {user?.gender}
                </StyledTableCell>
                <StyledTableCell align="right">{user?.phone}</StyledTableCell>
                <StyledTableCell align="right">{user?.address}</StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton size="small">
                    <EditIcon
                      onClick={() => {
                        handleEdit(user?.id);
                      }}
                    />
                  </IconButton>
                  <IconButton size="small">
                    <DeleteIcon
                      onClick={() => {
                        handleDelete(user?.id);
                      }}
                    />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <>No Data Found</>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
