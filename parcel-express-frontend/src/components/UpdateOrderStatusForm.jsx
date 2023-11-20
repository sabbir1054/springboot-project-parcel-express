/* eslint-disable react/prop-types */
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { notification } from "../utils/notification";

const UpdateOrderStatusForm = ({ order, handleClose }) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const updateToDB = (data) => {
    const location =
      data?.orderLocation.length > 0
        ? data?.orderLocation
        : order?.currentLocation;
    const deliveryMan =
      data?.deliveryManName.length > 0
        ? data?.deliveryManName
        : order?.deliveryMan;
    const status =
      data?.orderStatus.length > 0 ? data?.orderStatus : order?.status;
    fetch(
      `http://localhost:8080/api/updateOrder?id=5&currentLocation=${data?.orderLocation}&deliveryMan=${data?.deliveryManName}&status=${data?.orderStatus}`,
      { method: "PUT" }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.message === "order updated") {
          notification("Status updated", "", "success");
          window.location.reload();
        } else {
          notification("Something went wrong !", "", "error");
        }
      });
    handleClose();
  };

  const onSubmit = (data) => {
    updateToDB(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel id="order-status-label">Order Status</InputLabel>
          <Controller
            name="orderStatus"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                labelId="order-status-label"
                label="Order Status"
                {...field}
              >
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="shipped">Shipped</MenuItem>
                <MenuItem value="delivered">Delivered</MenuItem>
              </Select>
            )}
          />
        </FormControl>

        <TextField
          fullWidth
          label="Order Current Location"
          {...register("orderLocation", {})}
          error={!!errors.orderLocation}
          helperText={errors.orderLocation ? errors.orderLocation.message : ""}
          sx={{ marginBottom: 2 }}
        />

        <TextField
          fullWidth
          label="Delivery Man Contact"
          {...register("deliveryManName", {})}
          error={!!errors.deliveryManName}
          helperText={
            errors.deliveryManName ? errors.deliveryManName.message : ""
          }
          sx={{ marginBottom: 2 }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#007A9B",
            "&:hover": { backgroundColor: "#007A9B" },
          }}
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default UpdateOrderStatusForm;
