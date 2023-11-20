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
import SinglePendingOrders from "../../components/SinglePendingOrders";
import SingleHandleOrder from "../../components/SingleHandleOrder";
const HandleOrders = () => {
  const [approvedOrders, setApprovedOrders] = useState([]);

  const getData = async () => {
    const result = await fetch(`http://localhost:8080/api/getApprovedOrder`);
    const data = await result.json();
    setApprovedOrders(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {" "}
      <Typography
        variant="h5"
        textAlign={"center"}
        fontFamily={"Poppins"}
        fontWeight={"bold"}
        paddingY={5}
      >
        Handle Orders Update Status
      </Typography>{" "}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "black" }}>
              <TableCell style={{ color: "white" }}>Order Id</TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Product Info
              </TableCell>

              <TableCell style={{ color: "white" }} align="left">
                Customer Info
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Pick up/Delivery Address
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Order status
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
               Update Order status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {approvedOrders?.map((order, idx) => (
              <SingleHandleOrder order={order} idx={idx} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HandleOrders;
