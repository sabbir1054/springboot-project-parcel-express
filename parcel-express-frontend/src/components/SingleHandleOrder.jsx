/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import UpdateOrderStatusForm from "./UpdateOrderStatusForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const SingleHandleOrder = ({ order, idx }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          <b>Status:</b> {order?.status} <br />
          <b>Location:</b> {order?.currentLocation} <br />
          <b>Delivery Man:</b> {order?.deliveryMan}
        </TableCell>
        <TableCell align="left">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green",
              "&:hover": { backgroundColor: "green" },
            }}
            disableElevation
            onClick={handleOpen}
          >
            Update Status
          </Button>
        </TableCell>
      </TableRow>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Status
          </Typography>
          <UpdateOrderStatusForm order={order} handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default SingleHandleOrder;
