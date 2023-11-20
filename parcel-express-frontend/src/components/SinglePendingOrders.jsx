/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { notification } from "../utils/notification";
const SinglePendingOrders = ({ order, idx }) => {
  const approveOrder = () => {
    fetch(`http://localhost:8080/api/approveOrder?id=${order?.orderId}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.message === "order approved") {
          notification("Order Approved ✅", "", "success");
          window.location.reload();
        } else {
          notification("Something went wrong ❌", "", "error");
        }
      });
  };
  return (
    <>
      <TableRow key={idx}>
        <TableCell align="left">
          <h3>#{order?.orderId}</h3>
        </TableCell>
        <TableCell align="left">
          <b>Name: </b>
          {order?.productName} <br />
          <b>Price:</b>
          {order?.productPrice} <br />
          <b>Quantity:</b>
          {order?.productQuantity}
        </TableCell>
        <TableCell align="left">
          <b>Name:</b> {order?.customer_name} <br />
          <b>Contact:</b> {order?.customerContact}
        </TableCell>
        <TableCell align="left">
          <b>Pick up: </b>
          {order?.pickUpAddress} <br />
          <b>Delivery: </b>
          {order?.deliveryAddress}
        </TableCell>
        <TableCell align="left">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green",
              "&:hover": { backgroundColor: "green" },
            }}
            disableElevation
            onClick={approveOrder}
          >
            {" "}
            Approve Order{" "}
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default SinglePendingOrders;
