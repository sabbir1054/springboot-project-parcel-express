import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
console.log("OK");
const Footer = () => {
  return (
    <div style={{ minHeight: "40vh", backgroundColor: "black" }}>
      <Grid container spacing={2}>
        <Grid item md={4} display={"flex"} justifyContent={"center"}>
          <img src="/bangladash-map.svg" alt="" width={"200px"} />
        </Grid>
        <Grid
          item
          md={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h4" color={"white"}>
            Parcel Express logistics services are spread across 64 districts and
            493 upazilas across the country
          </Typography>
        </Grid>
        <Grid item md={4}>
          <div>
            <Typography
              variant="h6"
              color={"white"}
              textAlign={"center"}
              marginTop={5}
            >
              Useful Link
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ul>
                <li style={{ color: "white", fontSize: "20px" }}>
                  <NavLink to="/trackParcel" style={{ color: "white" }}>
                    {" "}
                    Track your parcel
                  </NavLink>
                </li>
                <li style={{ color: "white", fontSize: "20px" }}>
                  <NavLink to="/pricing" style={{ color: "white" }}>
                    Calculate cost
                  </NavLink>
                </li>
                <li style={{ color: "white", fontSize: "20px" }}>
                  <NavLink to="/register" style={{ color: "white" }}>
                    Join with us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item md={12}>
          <Divider color={"gray"} />
          <Typography
            variant="subtitle2"
            fontFamily={"Poppins"}
            color={"white"}
            textAlign={"center"}
          >
            Parcel Express @ All rights reserved 2023
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
