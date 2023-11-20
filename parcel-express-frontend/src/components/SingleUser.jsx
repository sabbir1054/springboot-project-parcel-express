/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { notification } from "../utils/notification";

const SingleUser = ({ user, idx }) => {
  const retrievedUser = JSON.parse(localStorage.getItem("user"));

  const removeUser = () => {
    fetch(
      `http://localhost:8080/api/removeUser?userId=${user?.id}&adminEmail=${retrievedUser?.email}`,
      { method: "DELETE" }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.message === "user deleted") {
          notification("User deleted", "", "success");
          window.location.reload();
        } else {
          notification("Something went wrong !", "", "error");
        }
      });
  };

  return (
    <>
      <TableRow key={idx}>
        <TableCell align="left">{user?.id}</TableCell>
        <TableCell align="left">{user?.name}</TableCell>
        <TableCell align="left">{user?.email}</TableCell>
        <TableCell align="left">{user?.number}</TableCell>
        <TableCell align="left">{user?.role}</TableCell>
        <TableCell align="left">
          {retrievedUser?.email === user?.email ? (
            <Button variant="contained" color="warning">
              Me
            </Button>
          ) : (
            <>
              <Button
                variant="contained"
                sx={{
                  margin: "0px 2px",
                  backgroundColor: "red",
                  "&:hover": { backgroundColor: "red" },
                }}
                onClick={removeUser}
              >
                Remove User
              </Button>
            </>
          )}
        </TableCell>
      </TableRow>
    </>
  );
};

export default SingleUser;
