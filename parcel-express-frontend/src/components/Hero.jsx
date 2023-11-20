import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundImage: `url(${"/hero-bg.png"})`,
        minHeight: "95vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid
            item
            md={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              {" "}
              <Typography variant="h1" color={"white"} fontWeight={"bold"}>
                Doorstep Delight Your{" "}
                <span style={{ color: "#FF9F48" }}>Parcel, Our Priority</span>
              </Typography>
              <Typography variant="h5" color={"white"}>
                Make every delivery a delight with our doorstep service. Your
                parcels are our priority, ensuring they reach their destination
                with care and efficiency. Experience the joy of hassle-free
                shipping.
              </Typography>
              <NavLink to="/parcelTracking">
                {" "}
                <Button
                  variant="contained"
                  disableElevation
                  size="large"
                  sx={{
                    color: "#fff",
                    backgroundColor: "#FF9F48",
                    margin: "20px 2px",
                    "&:hover": {
                      backgroundColor: "#E03B5E",
                      color: "#fff",
                    },
                  }}
                >
                  Track Your Parcel
                </Button>
              </NavLink>
              <NavLink to={"/login"}>
                <Button
                  variant="outlined"
                  disableElevation
                  size="large"
                  sx={{
                    color: "#FF9F48",
                    margin: "20px 2px",
                    border: "2px solid #FF9F48",
                    "&:hover": {
                      border: "2px solid #E03B5E",
                      color: "#fff",
                    },
                  }}
                >
                  Deliver your parcel
                </Button>
              </NavLink>
            </div>
          </Grid>
          <Grid item md={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/hero-left.png" alt="" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
