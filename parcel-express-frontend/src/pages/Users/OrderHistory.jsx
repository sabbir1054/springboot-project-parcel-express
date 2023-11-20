import { Button, Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";

const OrderHistory = () => {
  const retrievedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(retrievedUser);
  const [orders, setOrders] = useState([]);

  const getData = async () => {
    const result = await fetch(
      `http://localhost:8080/api/order_single_user?userNumber=${user?.number}`
    );
    const data = await result.json();
    setOrders(data);
  };
  console.log(orders);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ minHeight: "90vh" }}>
      <Typography
        variant="h5"
        textAlign={"center"}
        fontFamily={"Poppins"}
        fontWeight={"bold"}
        paddingY={5}
      >
        {" "}
        Order History{" "}
      </Typography>

      <Container maxWidth="lg">
        {" "}
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
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders?.map((order, idx) => (
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
                    <Button variant="contained">{order?.status} </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default OrderHistory;
