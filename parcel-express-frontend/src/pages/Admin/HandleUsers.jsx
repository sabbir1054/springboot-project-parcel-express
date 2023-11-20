/* eslint-disable react/jsx-key */
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import SingleUser from "../../components/SingleUser";
const HandleUsers = () => {
  const [usersData, setUsersData] = useState([]);

  const getData = async () => {
    const result = await fetch(`http://localhost:8080/api/getAllUsers`);
    const data = await result.json();
    setUsersData(data);
    };
   

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Typography
        variant="h5"
        textAlign={"center"}
        fontFamily={"Poppins"}
        fontWeight={"bold"}
        paddingY={5}
      >
        Pending Orders
      </Typography>{" "}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "black" }}>
              <TableCell style={{ color: "white" }}>User Id</TableCell>
              <TableCell style={{ color: "white" }} align="left">
                User Name
              </TableCell>

              <TableCell style={{ color: "white" }} align="left">
                User Email
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Phone No
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Role
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersData?.map((user, idx) => (
              <SingleUser user={user} idx={idx} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HandleUsers;
