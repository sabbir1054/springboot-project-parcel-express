/* eslint-disable react/prop-types */

import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const OrderForm = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper
        elevation={3}
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          gutterBottom
          fontFamily={"Poppins"}
        >
          Submit new order
        </Typography>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          style={{ width: "100%" }}
        >
          <Grid container spacing={2}>
            <Grid item md={6}>
              {" "}
              <Grid item xs={12} style={{ margin: "10px 0" }}>
                <Controller
                  name="pickUpAddress"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Pick-up Address"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} style={{ margin: "10px 0" }}>
                <Controller
                  name="productName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Product Type"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} style={{ margin: "10px 0" }}>
                <Controller
                  name="productPrice"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      label="Product Price"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} style={{ margin: "10px 0" }}>
                <Controller
                  name="productQuantity"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      label="Product Quantity"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Grid item md={6}>
              {" "}
              <Grid item xs={12} style={{ margin: "10px 0" }}>
                <Controller
                  name="customer_name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Customer Name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} style={{ margin: "10px 0" }}>
                <Controller
                  name="customerContact"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="tel"
                      label="Customer Contact"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} style={{ margin: "10px 0" }}>
                <Controller
                  name="deliveryAddress"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Delivery Address"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: 16 }}
            sx={{
              backgroundColor: "#FF9F48",
              "&:hover": { backgroundColor: "#FF9F48" },
            }}
          >
            Payment and Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default OrderForm;
