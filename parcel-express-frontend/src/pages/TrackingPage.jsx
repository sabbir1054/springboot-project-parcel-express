import SearchIcon from "@mui/icons-material/Search";
import { Alert, AlertTitle, TextField, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useState } from "react";

const TrackingPage = () => {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");
  console.log(orderId);
  const handleSearch = async () => {
    const result = await fetch(
      `http://localhost:8080/api/trackOrder?id=${orderId}`
    );
    const data = await result.json();
    setStatus(data?.message);
  };
  console.log(status);
  return (
    <div style={{ minHeight: "90vh" }}>
      <div
        style={{
          height: "30vh",
          backgroundColor: "black",
          backgroundImage: `url("/tracking-bg2.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ backgroundColor: "#23d4ac94", padding: "10px 20px" }}>
          <Typography
            variant="h3"
            fontWeight={"bold"}
            textAlign={"center"}
            fontFamily={"Poppins"}
          >
            Track Your Parcel
          </Typography>
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "5vh" }}
      >
        <div>
          <label
            style={{
              fontFamily: "Poppins",
              // fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Enter order id :
          </label>{" "}
          <br />
          <TextField
            type="text"
            style={{ width: "500px" }}
            onChange={(e) => setOrderId(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {/* pending/ approve /   */}
          <div style={{ marginTop: "5vh" }}>
            {status?.includes("+") && (
              <Alert severity="success" color="info">
                <b>Status :</b>{" "}
                <span style={{ textTransform: "capitalize" }}>
                  {status?.split("+")[1]}
                </span>
                <br />
                <b>Current Location :</b>
                <span style={{ textTransform: "capitalize" }}>
                  {status?.split("+")[0]}
                </span>
                <br /> <b>Assign Delivery man :</b>
                <span style={{ textTransform: "capitalize" }}>
                  {status?.split("+")[2]}
                </span>
              </Alert>
            )}
            {status === "no order found" && (
              <Alert severity="error">
                <AlertTitle>Order not found</AlertTitle>
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;
